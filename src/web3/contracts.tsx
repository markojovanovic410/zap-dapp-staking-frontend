import React from "react";
import { useWallet } from "wallets/wallet";
import Web3Contract from "web3/contract";
import { ZapContract, useZapContract } from "./contracts/zap";
import {
  ZapEthPairContract,
  useZapEthPairContract,
} from "./contracts/zapEthPair";
import {
  ZapGeyserContract,
  useZapGeyserContract,
} from "./contracts/geyser";
import UserRejectedModal from "components/user-rejected-modal";

export type Web3ContractsData = {
  zapContract: ZapContract;
  zapEthPairContract: ZapEthPairContract;
  zapGeyserContract: ZapGeyserContract;
};

export type Web3Contracts = Web3ContractsData & {};

const Web3ContractsContext = React.createContext<Web3Contracts>({} as any);

export function useWeb3Contracts(): Web3Contracts {
  return React.useContext(Web3ContractsContext);
}

const Web3ContractsProvider: React.FunctionComponent<any> = (props) => {
  const wallet = useWallet();
  const zapContract = useZapContract();
  const zapEthPairContract = useZapEthPairContract();
  const zapGeyserContract = useZapGeyserContract();

  const [userRejectedVisible, setUserRejectedVisible] =
    React.useState<boolean>(false);

  React.useEffect(() => {
    const contracts = [
      zapContract.contract,
      zapEthPairContract.contract,
      zapGeyserContract.contract,
    ];

    function handleError(
      err: Error & { code: number },
      contract: Web3Contract,
      { method }: any
    ) {
      console.error(`${contract.name}:${method}`, { error: err });

      if (err.code === 4001) {
        setUserRejectedVisible(true);
      } else {
        // TODO: Add err notification
        console.log(err);
      }
    }

    contracts.forEach((contract: Web3Contract) => {
      contract.on("error", handleError);
    });

    return () => {
      contracts.forEach((contract: Web3Contract) => {
        contract.off("error", handleError);
      });
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  React.useEffect(() => {
    const contracts = [
      zapContract.contract,
      zapEthPairContract.contract,
      zapGeyserContract.contract,
    ];

    contracts.forEach((contract) => {
      contract.setProvider(wallet.provider);
    });
  }, [wallet.provider]); // eslint-disable-line react-hooks/exhaustive-deps

  const value = {
    zapContract: zapContract,
    zapEthPairContract: zapEthPairContract,
    zapGeyserContract: zapGeyserContract,
  };

  return (
    <Web3ContractsContext.Provider value={value}>
      <UserRejectedModal
        show={userRejectedVisible}
        onClose={() => setUserRejectedVisible(false)}
      />
      {props.children}
    </Web3ContractsContext.Provider>
  );
};

export default Web3ContractsProvider;
