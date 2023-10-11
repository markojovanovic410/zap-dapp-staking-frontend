import React from "react";
import BigNumber from "bignumber.js";

import { useReload } from "hooks/useReload";
import useRefresh from "hooks/useRefresh";
import { useAsyncEffect } from "hooks/useAsyncEffect";
import { useWallet } from "wallets/wallet";
import Web3Contract from "web3/contract";
import { MAX_UINT_256, web3 } from "web3/utils";

export const CONTRACT_ZAP_ETH_PAIR_ADDRESS = String(
  process.env.REACT_APP_ZAP_ETH_PAIR_ADDRESS
);

type ZapEthPairData = {
  totalSupply: BigNumber;
  totalZapInPair: BigNumber;
  balance: BigNumber;
  allowance: BigNumber;
};

export type ZapEthPairContract = ZapEthPairData & {
  contract: Web3Contract;
  approve: () => Promise<any>;
  reload: () => void;
};

const InitialData: ZapEthPairData = {
  totalSupply: new BigNumber(0),
  totalZapInPair: new BigNumber(0),
  balance: new BigNumber(0),
  allowance: new BigNumber(0),
};

export function useZapEthPairContract(): ZapEthPairContract {
  const [reload] = useReload();
  const { slowRefresh } = useRefresh();
  const wallet = useWallet();
  const contract = React.useMemo<Web3Contract>(() => {
    return new Web3Contract(
      require("web3/abi/pair.json"),
      CONTRACT_ZAP_ETH_PAIR_ADDRESS,
      "ZAP ETH PAIR"
    );
  }, []);

  const [data, setData] = React.useState<ZapEthPairData>(InitialData);

  useAsyncEffect(async () => {
    const netId = await web3.eth.net.getId();
    if (netId === Number(process.env.REACT_APP_WEB3_CHAIN_ID)) {
      let [totalSupply, reserves] = await contract.batch([
        {
          method: "totalSupply",
          transform: (value: BigNumber) => new BigNumber(value),
        },
        {
          method: "getReserves",
        },
      ]);

      setData((prevState) => ({
        ...prevState,
        totalSupply,
        totalZapInPair: new BigNumber(reserves[0]).times(2),
      }));
    }
  }, [reload, web3]);

  useAsyncEffect(async () => {
    if (wallet.account) {
      let [balance, allowance] = await contract.batch([
        {
          method: "balanceOf",
          methodArgs: [wallet.account],
          transform: (value: BigNumber) => new BigNumber(value),
        },
        {
          method: "allowance",
          methodArgs: [
            wallet.account,
            process.env.REACT_APP_ZAP_GEYSER_ADDRESS,
          ],
          transform: (value: BigNumber) => new BigNumber(value),
        },
      ]);

      setData((prevState) => ({
        ...prevState,
        balance,
        allowance,
      }));
    }
  }, [reload, wallet.account]);

  const approve = React.useCallback(async (): Promise<any> => {
    if (!wallet.account) {
      return Promise.reject();
    }

    const result = await contract.send(
      "approve",
      [process.env.REACT_APP_ZAP_GEYSER_ADDRESS, MAX_UINT_256.toString(10)],
      {
        from: wallet.account,
      },
      reload
    );
    return result;
  }, [reload, contract, wallet.account]);

  return React.useMemo<ZapEthPairContract>(
    () => ({
      ...data,
      contract,
      approve,
      reload,
    }),
    [data, contract, approve, reload]
  );
}
