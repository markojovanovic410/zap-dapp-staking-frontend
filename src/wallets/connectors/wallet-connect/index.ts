
import { AbstractConnector } from "@web3-react/abstract-connector";
import { WalletConnectConnectorV2 } from "./WalletConnectConnectorV2";
import { WalletConnector } from "wallets/types";

import WalletConnectLogo from "assets/images/wallet/walletconnect-logo.png";

export const WalletConnectConfig: WalletConnector = {
  id: "walletconnectV2",
  logo: WalletConnectLogo,
  name: "WalletConnectV2",
  factory(chainId: number): AbstractConnector {
    return new WalletConnectConnectorV2({
      projectId: process.env.REACT_APP_WEB3_WALLET_PROJECT_ID,
      chains: [chainId],
      showQrModal: true,
    });
  },
  onDisconnect(connector?: WalletConnectConnectorV2): void {
    connector?.close();
  },
  onError(error: Error): Error | undefined {
    return error;
  },
};
