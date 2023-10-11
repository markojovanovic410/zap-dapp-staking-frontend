import React from "react";
import BigNumber from "bignumber.js";

import { useReload } from "hooks/useReload";
import useRefresh from "hooks/useRefresh";
import { useAsyncEffect } from "hooks/useAsyncEffect";
import { useWallet } from "wallets/wallet";
import Web3Contract from "web3/contract";
import { web3 } from "web3/utils";
import moment from "moment";

export const CONTRACT_ZAP_GEYSER_ADDRESS = String(
  process.env.REACT_APP_ZAP_GEYSER_ADDRESS
);

type ZapGeyserData = {
  myStakedAmount: BigNumber;
  reward: BigNumber;
  rewardIn30Days: BigNumber;
  totalStakedAmount: BigNumber;
  totalUnlockAmountPerSec: BigNumber;
  multiplier: number;
};

export type ZapGeyserContract = ZapGeyserData & {
  contract: Web3Contract;
  stake: (amount: BigNumber) => Promise<any>;
  unstake: (amount: BigNumber) => Promise<any>;
  reload: () => void;
};

const InitialData: ZapGeyserData = {
  myStakedAmount: new BigNumber(0),
  reward: new BigNumber(0),
  rewardIn30Days: new BigNumber(0),
  totalStakedAmount: new BigNumber(0),
  totalUnlockAmountPerSec: new BigNumber(0),
  multiplier: 1,
};

export function useZapGeyserContract(): ZapGeyserContract {
  const [reload] = useReload();
  const { slowRefresh } = useRefresh();
  const wallet = useWallet();
  const contract = React.useMemo<Web3Contract>(() => {
    return new Web3Contract(
      require("web3/abi/geyser.json"),
      CONTRACT_ZAP_GEYSER_ADDRESS,
      "ZAP GEYSER"
    );
  }, []);

  const [data, setData] = React.useState<ZapGeyserData>(InitialData);

  useAsyncEffect(async () => {
    const netId = await web3.eth.net.getId();
    if (netId === Number(process.env.REACT_APP_WEB3_CHAIN_ID)) {
      let [totalStakedAmount, unlockScheduleCount] = await contract.batch([
        {
          method: "totalStaked",
          transform: (value: BigNumber) => new BigNumber(value),
        },
        {
          method: "unlockScheduleCount",
        },
      ]);

      let currentTime = moment().unix();

      let totalUnlockAmountPerSec = new BigNumber(0);
      for (let index = 0; index < unlockScheduleCount; index++) {
        let [unlockData] = await contract.batch([
          {
            method: "unlockSchedules",
            methodArgs: [index],
          },
        ]);
        if (currentTime <= Number(unlockData[3])) {
          totalUnlockAmountPerSec = totalUnlockAmountPerSec.plus(
            new BigNumber(unlockData[0])
              .div(1e24)
              .div(new BigNumber(unlockData[4]))
          );
        }
      }

      setData((prevState) => ({
        ...prevState,
        totalStakedAmount,
        totalUnlockAmountPerSec,
      }));
    }
  }, [reload, web3]);

  useAsyncEffect(async () => {
    if (wallet.account) {
      let currentTime = moment().unix();
      let [myStakedAmount, reward, rewardIn30Days, firstStakeTime] =
        await contract.batch([
          {
            method: "totalStakedFor",
            methodArgs: [wallet.account],
            transform: (value: BigNumber) => new BigNumber(value),
          },
          {
            method: "getUserReward",
            methodArgs: [wallet.account, currentTime],
            transform: (value: BigNumber) => new BigNumber(value),
          },
          {
            method: "getUserReward",
            methodArgs: [wallet.account, currentTime + 2592000],
            transform: (value: BigNumber) => new BigNumber(value),
          },
          {
            method: "getUserFirstStakeTime",
            methodArgs: [wallet.account],
          },
        ]);

      setData((prevState) => ({
        ...prevState,
        myStakedAmount,
        reward,
        rewardIn30Days,
        multiplier:
          firstStakeTime > 0
            ? Number(1 + (currentTime - firstStakeTime) / 86400 / 15)
            : 1,
      }));
    }
  }, [reload, wallet.account]);

  const stake = React.useCallback(
    async (amount: BigNumber): Promise<any> => {
      if (!wallet.account) {
        return Promise.reject();
      }

      const result = await contract.send(
        "stake",
        [amount.toString(10)],
        {
          from: wallet.account,
        },
        reload
      );
      return result;
    },
    [reload, contract, wallet.account]
  );

  const unstake = React.useCallback(
    async (amount: BigNumber): Promise<any> => {
      if (!wallet.account) {
        return Promise.reject();
      }

      const result = await contract.send(
        "unstake",
        [amount.toString(10)],
        {
          from: wallet.account,
        },
        reload
      );
      return result;
    },
    [reload, contract, wallet.account]
  );

  return React.useMemo<ZapGeyserContract>(
    () => ({
      ...data,
      contract,
      stake,
      unstake,
      reload,
    }),
    [data, contract, stake, unstake, reload]
  );
}
