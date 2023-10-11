import React from "react";
import BigNumber from "bignumber.js";

import { useReload } from "hooks/useReload";
import useRefresh from "hooks/useRefresh";
import { useAsyncEffect } from "hooks/useAsyncEffect";
import { useWallet } from "wallets/wallet";
import Web3Contract from "web3/contract";
import { web3 } from "web3/utils";
import moment from "moment";

export const CONTRACT_ZAP_ADDRESS = String(
  process.env.REACT_APP_ZAP_ADDRESS
);

type ZapData = {
  peggedPrice: BigNumber;
  currentPrice: BigNumber;
  circulatingSupply: BigNumber;
  twapPrice: BigNumber;
  rebaseLag: number;
  nextSupersizePerct: number;
  nextSupersizeTime: number;
  totalSupply: BigNumber;
  balance: BigNumber;
  live: boolean;
};

export type ZapContract = ZapData & {
  contract: Web3Contract;
  supersize: () => Promise<any>;
  reload: () => void;
};

const InitialData: ZapData = {
  peggedPrice: new BigNumber(0),
  currentPrice: new BigNumber(0),
  circulatingSupply: new BigNumber(0),
  twapPrice: new BigNumber(0),
  rebaseLag: 0,
  nextSupersizePerct: 0,
  nextSupersizeTime: 0,
  totalSupply: new BigNumber(0),
  balance: new BigNumber(0),
  live: false,
};

export function useZapContract(): ZapContract {
  const [reload] = useReload();
  const { fastRefresh } = useRefresh();
  const wallet = useWallet();
  const contract = React.useMemo<Web3Contract>(() => {
    return new Web3Contract(
      require("web3/abi/zap.json"),
      CONTRACT_ZAP_ADDRESS,
      "ZAP"
    );
  }, []);

  const [data, setData] = React.useState<ZapData>(InitialData);

  useAsyncEffect(async () => {
    const netId = await web3.eth.net.getId();
    if (netId === Number(process.env.REACT_APP_WEB3_CHAIN_ID)) {
      let currentTime = moment().unix();
      let [
        peggedPrice,
        currentPrice,
        twapPrice,
        rebaseLag,
        nextSupersizePerctData,
        lastEpochTime,
        epochCycle,
        totalSupply,
        deployerBalance,
      ] = await contract.batch([
        {
          method: "PEGGED_PRICE",
          transform: (value: BigNumber) => new BigNumber(value),
        },
        {
          method: "getTokenPriceInUSD",
          transform: (value: BigNumber) => new BigNumber(value),
        },
        {
          method: "getTokenAveragePriceInUSD",
          transform: (value: BigNumber) => new BigNumber(value),
        },
        {
          method: "_rebaseLag",
        },
        {
          method: "getSupersizeRate",
        },
        {
          method: "_lastEpochTime",
        },
        {
          method: "_epochCycle",
        },
        {
          method: "totalSupply",
          transform: (value: BigNumber) => new BigNumber(value),
        },
        {
          method: "balanceOf",
          methodArgs: [process.env.REACT_APP_ZAP_DEPLOYER_ADDRESS],
          transform: (value: BigNumber) => new BigNumber(value),
        },
      ]);

      setData((prevState) => ({
        ...prevState,
        peggedPrice,
        currentPrice,
        twapPrice,
        rebaseLag,
        nextSupersizePerct: nextSupersizePerctData ? Number(nextSupersizePerctData[0]) : 0,
        nextSupersizeTime:
          Number(lastEpochTime) + Number(epochCycle) > currentTime
            ? (Number(lastEpochTime) + Number(epochCycle)) * 1000
            : 0,
        totalSupply,
        circulatingSupply: totalSupply.minus(deployerBalance),
        live: Number(lastEpochTime) > 0,
      }));
    }
  }, [reload, web3]);

  useAsyncEffect(async () => {
    if (wallet.account) {
      let [balance] = await contract.batch([
        {
          method: "balanceOf",
          methodArgs: [wallet.account],
          transform: (value: BigNumber) => new BigNumber(value),
        },
      ]);

      setData((prevState) => ({
        ...prevState,
        balance,
      }));
    }
  }, [reload, wallet.account]);

  const supersize = React.useCallback(async (): Promise<any> => {
    if (!wallet.account) {
      return Promise.reject();
    }

    const result = await contract.send(
      "Supersize",
      [],
      {
        from: wallet.account,
      },
      reload
    );
    return result;
  }, [reload, contract, wallet.account]);

  return React.useMemo<ZapContract>(
    () => ({
      ...data,
      contract,
      supersize,
      reload,
    }),
    [data, contract, supersize, reload]
  );
}
