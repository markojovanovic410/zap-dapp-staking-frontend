import React, { useState, CSSProperties } from 'react';

import styled from 'styled-components';

import { Dialog } from 'components/Elements';

import MetamaskIcon from 'assets/images/wallet/metamask-logo.png';
import walletConnectIcon from 'assets/images/wallet/walletconnect-logo.png';
import coinbaseIcon from 'assets/images/wallet/coinbase-logo.svg';

import { WalletConnector } from 'wallets/types';
import { useWallet, WalletConnectors } from 'wallets/wallet';
import ClipLoader from 'react-spinners/ClipLoader';

const StyledDialogClose = styled.svg`
	position: absolute;
	right: 16px;
	top: 16px;
	cursor: pointer;
`;

const StyledWalletIcon = styled.svg`
	margin-bottom: 32px;
`;

const StyledDialogHeader = styled.div`
	font-size: 32px;
	line-height: 64px;
	letter-spacing: 0.007em;
	color: #f5f5f5;
	margin-bottom: 32px;
	white-space: nowrap;
`;

const StyledWallet = styled.div`
	display: flex;
	align-items: center;
	gap: 16px;
	font-weight: 500;
	font-size: 16px;
	line-height: 19px;
	color: #f5f5f5;
	cursor: pointer;
	padding: 8px 16px;
	background-image: radial-gradient(
			circle at 100% 100%,
			transparent 2px,
			rgba(245, 245, 245, 0.038) 2px,
			rgba(245, 245, 245, 0.038) 3px,
			transparent 3px
		),
		linear-gradient(
			to right,
			rgba(245, 245, 245, 0.063) 0%,
			rgba(245, 245, 245, 0.1) 52.08%,
			rgba(245, 245, 245, 0.063) 100%
		),
		radial-gradient(
			circle at 0% 100%,
			transparent 2px,
			rgba(245, 245, 245, 0.038) 2px,
			rgba(245, 245, 245, 0.038) 3px,
			transparent 3px
		),
		linear-gradient(
			to bottom,
			rgba(245, 245, 245, 0.063) 0%,
			rgba(245, 245, 245, 0.1) 52.08%,
			rgba(245, 245, 245, 0.063) 100%
		),
		radial-gradient(
			circle at 0% 0%,
			transparent 2px,
			rgba(245, 245, 245, 0.038) 2px,
			rgba(245, 245, 245, 0.038) 3px,
			transparent 3px
		),
		linear-gradient(
			to left,
			rgba(245, 245, 245, 0.063) 0%,
			rgba(245, 245, 245, 0.1) 52.08%,
			rgba(245, 245, 245, 0.063) 100%
		),
		radial-gradient(
			circle at 100% 0%,
			transparent 2px,
			rgba(245, 245, 245, 0.038) 2px,
			rgba(245, 245, 245, 0.038) 3px,
			transparent 3px
		),
		linear-gradient(
			to top,
			rgba(245, 245, 245, 0.063) 0%,
			rgba(245, 245, 245, 0.1) 52.08%,
			rgba(245, 245, 245, 0.063) 100%
		);
	background-size: 3px 3px, calc(100% - 6px) 1px, 3px 3px,
		1px calc(100% - 6px);
	background-position: top left, top center, top right, center right,
		bottom right, bottom center, bottom left, center left;
	background-repeat: no-repeat;

	img {
		width: 35px;
	}

	&:not(:last-child) {
		margin-bottom: 24px;
	}

	&:hover {
		background-color: #1a1e29;
		color: #0075C5;
	}
`;

const StyledDialogInfo = styled.p`
	text-align: left;
	margin-bottom: 32px;
	line-height: 26px;
	color: #ccc;
`;

export type ModalProps = {
	show: boolean;
	onClose: () => void;
};

const loadingCss: CSSProperties = {
	position: 'relative',
	marginRight: '0px',
	top: '0',
};

const ConnectWalletModal: React.FunctionComponent<ModalProps> = ({
	show,
	onClose,
}) => {
	const wallet = useWallet();

	const [connecting, setConnecting] = useState(true);

	function handleConnectorSelect(connector: WalletConnector) {
		if (wallet.isActive) {
			return;
		}

		return wallet.connect(connector);
	}

	if (show) {
		return (
			<Dialog center>
				<StyledDialogClose
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					onClick={() => onClose()}
				>
					<path
						d="M13.314 11.9L16.849 8.364C16.9445 8.27176 17.0207 8.16141 17.0731 8.03941C17.1255 7.9174 17.1531 7.78618 17.1543 7.6534C17.1554 7.52062 17.1301 7.38894 17.0798 7.26605C17.0295 7.14315 16.9553 7.0315 16.8614 6.93761C16.7675 6.84371 16.6559 6.76946 16.533 6.71918C16.4101 6.6689 16.2784 6.6436 16.1456 6.64475C16.0128 6.64591 15.8816 6.67349 15.7596 6.7259C15.6376 6.77831 15.5273 6.85449 15.435 6.95L11.899 10.485L8.364 6.95C8.27176 6.85449 8.16141 6.77831 8.03941 6.7259C7.9174 6.67349 7.78618 6.64591 7.6534 6.64475C7.52062 6.6436 7.38894 6.6689 7.26605 6.71918C7.14315 6.76946 7.0315 6.84371 6.93761 6.93761C6.84371 7.0315 6.76946 7.14315 6.71918 7.26605C6.6689 7.38894 6.6436 7.52062 6.64475 7.6534C6.64591 7.78618 6.67349 7.9174 6.7259 8.03941C6.77831 8.16141 6.85449 8.27176 6.95 8.364L10.485 11.899L6.95 15.435C6.85449 15.5273 6.77831 15.6376 6.7259 15.7596C6.67349 15.8816 6.64591 16.0128 6.64475 16.1456C6.6436 16.2784 6.6689 16.4101 6.71918 16.533C6.76946 16.6559 6.84371 16.7675 6.93761 16.8614C7.0315 16.9553 7.14315 17.0295 7.26605 17.0798C7.38894 17.1301 7.52062 17.1554 7.6534 17.1543C7.78618 17.1531 7.9174 17.1255 8.03941 17.0731C8.16141 17.0207 8.27176 16.9445 8.364 16.849L11.899 13.314L15.435 16.849C15.5273 16.9445 15.6376 17.0207 15.7596 17.0731C15.8816 17.1255 16.0128 17.1531 16.1456 17.1543C16.2784 17.1554 16.4101 17.1301 16.533 17.0798C16.6559 17.0295 16.7675 16.9553 16.8614 16.8614C16.9553 16.7675 17.0295 16.6559 17.0798 16.533C17.1301 16.4101 17.1554 16.2784 17.1543 16.1456C17.1531 16.0128 17.1255 15.8816 17.0731 15.7596C17.0207 15.6376 16.9445 15.5273 16.849 15.435L13.314 11.899V11.9Z"
						fill="#F5F5F5"
					/>
				</StyledDialogClose>

				<StyledWalletIcon
					width="61"
					height="60"
					viewBox="0 0 61 60"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<circle cx="30.5" cy="30" r="30" fill="#272b36" />
					<path
						d="M21.0466 21.3935H40.4448C40.6714 21.3933 40.8978 21.4077 41.1225 21.4365C41.0464 20.9017 40.8627 20.3879 40.5825 19.926C40.3024 19.4641 39.9316 19.0637 39.4926 18.749C39.0535 18.4343 38.5553 18.2117 38.0279 18.0948C37.5005 17.9778 36.9549 17.9689 36.4239 18.0685L20.4707 20.7921H20.4525C19.4511 20.9836 18.5606 21.5502 17.9629 22.3761C18.8635 21.7355 19.9415 21.392 21.0466 21.3935Z"
						fill="#F5F5F5"
					/>
					<path
						d="M40.4449 22.8481H21.0466C20.018 22.8493 19.0319 23.2584 18.3046 23.9857C17.5772 24.713 17.1681 25.6992 17.167 26.7278V38.3667C17.1681 39.3953 17.5772 40.3815 18.3046 41.1088C19.0319 41.8361 20.018 42.2452 21.0466 42.2464H40.4449C41.4735 42.2452 42.4596 41.8361 43.1869 41.1088C43.9143 40.3815 44.3234 39.3953 44.3245 38.3667V26.7278C44.3234 25.6992 43.9143 24.713 43.1869 23.9857C42.4596 23.2584 41.4735 22.8493 40.4449 22.8481ZM37.5654 34.4871C37.1818 34.4871 36.8067 34.3733 36.4877 34.1602C36.1687 33.947 35.9201 33.6441 35.7733 33.2896C35.6265 32.9351 35.588 32.5451 35.6629 32.1688C35.7377 31.7925 35.9225 31.4469 36.1938 31.1756C36.4651 30.9043 36.8107 30.7196 37.187 30.6447C37.5633 30.5699 37.9533 30.6083 38.3078 30.7551C38.6622 30.9019 38.9652 31.1505 39.1783 31.4695C39.3915 31.7885 39.5053 32.1636 39.5053 32.5473C39.5053 33.0617 39.3009 33.5551 38.9371 33.9189C38.5733 34.2827 38.0799 34.4871 37.5654 34.4871Z"
						fill="#F5F5F5"
					/>
					<path
						d="M17.1973 30.8196V24.788C17.1973 23.4744 17.9247 21.272 20.4495 20.795C22.5924 20.3931 24.7141 20.3931 24.7141 20.3931C24.7141 20.3931 26.1083 21.363 24.9566 21.363C23.8048 21.363 23.8351 22.8482 24.9566 22.8482C26.078 22.8482 24.9566 24.2727 24.9566 24.2727L20.4404 29.3951L17.1973 30.8196Z"
						fill="#F5F5F5"
					/>
				</StyledWalletIcon>

				<StyledDialogHeader>Connect Wallet</StyledDialogHeader>

				<StyledDialogInfo>
					Choose the wallet that you want to connect
				</StyledDialogInfo>

				<StyledWallet
					onClick={() => handleConnectorSelect(WalletConnectors[0])}
				>
					{/* {connecting && (
						<ClipLoader
							color="#F5F5F5"
							cssOverride={loadingCss}
							loading={true}
							size={20}
						/>
					)} */}
					<img src={MetamaskIcon} alt="metamask" />
					Metamask
				</StyledWallet>
				<StyledWallet
					onClick={() => handleConnectorSelect(WalletConnectors[1])}
				>
					<img src={walletConnectIcon} alt="walletconnect" />
					WalletConnect
				</StyledWallet>
				{/* <StyledWallet onClick={() => handleConnectorSelect(WalletConnectors[2])}>
          <img src={coinbaseIcon} alt="coinbase" />
          Coinbase
        </StyledWallet> */}
			</Dialog>
		);
	}

	return <></>;
};

export default ConnectWalletModal;
