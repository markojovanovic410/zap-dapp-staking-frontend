import React from "react";
import styled from "styled-components";
import { useWallet } from "wallets/wallet";
import { getNetworkName } from "web3/utils";

import { Dialog, PrimaryButton } from "components/Elements";

const WEB3_CHAIN_ID = Number(process.env.REACT_APP_WEB3_CHAIN_ID);

const StyledDialogInfo = styled.div`
	line-height: 26px;
	margin-bottom: 32px;
	width: 300px;
  color: #ccc;
`;

const StyledDialogHeader = styled.div`
	font-size: 32px;
	line-height: 64px;
	letter-spacing: 0.007em;
	color: #f5f5f5;
	margin-bottom: 32px;
	white-space: nowrap;
`;

export type ModalProps = {
  show: boolean
  onClose: () => void;
};


const UnsupportedChainModal: React.FunctionComponent<ModalProps> = ({ show, onClose }) => {

  const wallet = useWallet();
  
  if (show) {
    return (
      <Dialog center>
        <StyledDialogHeader>Wrong network</StyledDialogHeader>
        <StyledDialogInfo>
          Please switch your wallet network to <span style={{ color: '#058AD4' }}><b>{getNetworkName(WEB3_CHAIN_ID)}</b></span> to use the app
        </StyledDialogInfo>
        <PrimaryButton
          onClick={(ev: React.MouseEvent<HTMLElement>) => {
            // props.onHide?.(ev);
            onClose();
            wallet.showWalletsModal();
          }}
        >
          Switch wallet
        </PrimaryButton>
      </Dialog>
    );
  }

  return (<></>)
};

export default UnsupportedChainModal;
