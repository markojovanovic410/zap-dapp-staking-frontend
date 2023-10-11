import React from "react";
import styled from "styled-components";
import { Dialog } from "components/Elements";

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

const CustomBtn = styled.a`
  border-radius: 2px;
  padding: 9px 16px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  border: none;
  cursor: pointer;

  background: #058ad4;
	color: #f5f5f5;

	&:hover {
		background: #2ea3e4;
	}

	&:active {
		background: rgba(5, 138, 212, 0.4);
		color: rgba(245, 245, 245, 0.72);
	}
`;

export type ModalProps = {
  show: boolean
  onClose: () => void;
};

const InstallMetaMaskModal: React.FunctionComponent<ModalProps> = ({ show, onClose }) => {

  if (show) {
    return (
      <Dialog center>
        <StyledDialogHeader>Install Metamask</StyledDialogHeader>
        <StyledDialogInfo>
          You need to have MetaMask installed to continue. Once
          you have installed it, please refresh the page.
        </StyledDialogInfo>
        <CustomBtn
          onClick={() => onClose()}
          href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"
          target="_blank"
        >
          Install MetaMask
        </CustomBtn>
      </Dialog>
    );
  }

  return (<></>)
};

export default InstallMetaMaskModal;
