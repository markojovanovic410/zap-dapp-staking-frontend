import React from "react";
import styled from "styled-components";

import { useWallet } from "wallets/wallet";

import { WalletInfoPopup } from "components/WalletInfoPopup";

import s from "./styles.module.css";

const StyledDesktopButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  gap: 6px;
  font-weight: 400;
  width: 140px;
  height: 40px;
  background-color: #fdb40d;
  color: #000;
  border-radius: 58px;
  cursor: pointer;
`;

const ConnectedWallet: React.FunctionComponent<{ isFull?: boolean }> = ({
  isFull,
}) => {
  const wallet = useWallet();

  function handleWalletConnect() {
    wallet.showWalletsModal();
  }

  const handleWalletDisconnect = () => {
    wallet.disconnect();
  };

  if (wallet.connecting) {
    return (
      <div className={s.component}>
        <StyledDesktopButton>Connecting...</StyledDesktopButton>
      </div>
    );
  }

  if (!wallet.isActive) {
    return (
      <div className={s.component}>
        <StyledDesktopButton onClick={() => handleWalletConnect()}>
          <span>Connect Wallet</span>
        </StyledDesktopButton>
      </div>
    );
  }

  return <WalletInfoPopup />;
};

export default ConnectedWallet;
