import styled from 'styled-components';
import { useState, useRef } from 'react';
import { Divider } from './Elements';
import { useOutside } from 'hooks/useOutside';
import { useWallet } from "wallets/wallet";
import { useWeb3Contracts } from "web3/contracts";
import { formatBigNumberToString } from 'web3/utils';
import { shortenAddr } from "web3/utils";

const StyledWalletInfoPopup = styled.div`
	position: relative;
`;

const StyledWrap = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 auto;
	gap: 6px;
	width: 140px;
	height: 40px;
	background-color: #fdb40d;
	color: #000;
	border-radius: 58px;
	cursor: pointer;
	box-shadow: 0px -3px 80px rgba(8, 8, 8, 0.06),
		0px -1.25333px 33.4221px rgba(8, 8, 8, 0.0431313),
		0px -0.670089px 17.869px rgba(8, 8, 8, 0.0357664),
		0px -0.375647px 10.0172px rgba(8, 8, 8, 0.03),
		0px -0.199503px 5.32008px rgba(8, 8, 8, 0.0242336),
		0px -0.0830177px 2.21381px rgba(8, 8, 8, 0.0168687);
	backdrop-filter: blur(12px);
`;

const StyledPopup = styled.div`
	position: absolute;
	right: 0;
	background: rgba(0, 0, 0, 0.9);
	box-shadow: 0px 7px 80px rgba(0, 0, 0, 0.07),
		0px 2.92443px 33.4221px rgba(0, 0, 0, 0.0503198),
		0px 1.56354px 17.869px rgba(0, 0, 0, 0.0417275),
		0px 0.876509px 10.0172px rgba(0, 0, 0, 0.035),
		0px 0.465507px 5.32008px rgba(0, 0, 0, 0.0282725),
		0px 0.193708px 2.21381px rgba(0, 0, 0, 0.0196802);
	border-radius: 2px;
	padding: 16px 0;
	top: 45px;
	user-select: none;
	z-index: 10;

	@media (max-width: 1280px) {
		bottom: 40px;
	}

	@media (max-width: 480px) {
		bottom: 30px;
	}
`;

const StyledItem = styled.div`
	white-space: nowrap;
	padding: 10px 20px;
	display: flex;
	align-items: center;

	@media (max-width: 1280px) {
		font-size: 14px;
		padding: 5px 20px;
	}

	@media (max-width: 480px) {
		font-size: 12px;
		padding: 3px 20px;
	}
`;

const StyledWalletBalance = styled(StyledItem)`
	font-weight: 500;
	line-height: 20px;
	color: #f5f5f5;
	gap: 10px;
`;

const StyledWalletAddress = styled(StyledItem)`
	line-height: 18px;
	color: rgba(245, 245, 245, 0.8);
	gap: 7px;

	svg {
		cursor: pointer;
	}
`;

const StyledDisconnect = styled(StyledItem)`
	font-weight: 500;
	line-height: 20px;
	color: #e02b2b;
	cursor: pointer;

	&:hover {
		background-color: #3e3e3e;
	}
`;

const StyledDivider = styled(Divider)`
	margin: 4px 0px;

	@media (max-width: 1280px) {
		margin: 3px 0px;
	}

	@media (max-width: 480px) {
		margin: 2px 0px;
	}
`;

const StyledCopied = styled.div<{ showCopied: boolean }>`
	position: fixed;
	visibility: ${(props) => (props.showCopied ? 'visible' : 'hidden')};
	bottom: 50px;
	left: 50%;
	transform: translateX(-50%);
	padding: 10px 16px;
	background-color: #55da5b;
	border-radius: 8px;
	transition: all 1s;
	color: white;
	opacity: ${(props) => (props.showCopied ? '1' : '0')};
	z-index: 200;
`;

export const WalletInfoPopup = (props: any) => {
	const wallet = useWallet();

	const onWalletDisconnect = () => {
		wallet.disconnect();
	};

	const { zapContract } = useWeb3Contracts();

	const [showCopied, setShowCopied] = useState(false);
	const [showPopup, setShowPopup] = useState(false);

	const wrapperRef = useRef(null);
	useOutside(wrapperRef, setShowPopup);

	const copiedWalletAddress = () => {
		setShowCopied(true);
		setTimeout(() => setShowCopied(false), 2000);
	};

	const fallbackCopyTextToClipboard = (text: string) => {
		var textArea = document.createElement('textarea');
		textArea.value = text;

		// Avoid scrolling to bottom
		textArea.style.top = '0';
		textArea.style.left = '0';
		textArea.style.position = 'fixed';

		document.body.appendChild(textArea);
		textArea.focus();
		textArea.select();

		try {
			document.execCommand('copy');
			copiedWalletAddress();
		} catch (err) {
			console.error('Fallback: Oops, unable to copy', err);
		}

		document.body.removeChild(textArea);
	};

	const copyWalletAddress = (address: string) => {
		if (!navigator.clipboard) {
			fallbackCopyTextToClipboard(address);
			return;
		}
		navigator.clipboard.writeText(address).then(
			function () {
				copiedWalletAddress();
			},
			function (err) {
				console.error('Async: Could not copy text: ', err);
			}
		);
	};

	return (
		<StyledWalletInfoPopup>
			<StyledCopied showCopied={showCopied}>Copied!</StyledCopied>
			<StyledWrap
				onMouseUp={(e: any) => {
					e.preventDefault();
					e.stopPropagation();
					setShowPopup(!showPopup);
				}}
			>
				<svg
					width="20"
					height="18"
					viewBox="0 0 20 18"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M17 4H16V3C16 2.20435 15.6839 1.44129 15.1213 0.87868C14.5587 0.316071 13.7956 0 13 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V15C0 15.7956 0.316071 16.5587 0.87868 17.1213C1.44129 17.6839 2.20435 18 3 18H17C17.7956 18 18.5587 17.6839 19.1213 17.1213C19.6839 16.5587 20 15.7956 20 15V7C20 6.20435 19.6839 5.44129 19.1213 4.87868C18.5587 4.31607 17.7956 4 17 4ZM3 2H13C13.2652 2 13.5196 2.10536 13.7071 2.29289C13.8946 2.48043 14 2.73478 14 3V4H3C2.73478 4 2.48043 3.89464 2.29289 3.70711C2.10536 3.51957 2 3.26522 2 3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2ZM18 12H17C16.7348 12 16.4804 11.8946 16.2929 11.7071C16.1054 11.5196 16 11.2652 16 11C16 10.7348 16.1054 10.4804 16.2929 10.2929C16.4804 10.1054 16.7348 10 17 10H18V12ZM18 8H17C16.2044 8 15.4413 8.31607 14.8787 8.87868C14.3161 9.44129 14 10.2044 14 11C14 11.7956 14.3161 12.5587 14.8787 13.1213C15.4413 13.6839 16.2044 14 17 14H18V15C18 15.2652 17.8946 15.5196 17.7071 15.7071C17.5196 15.8946 17.2652 16 17 16H3C2.73478 16 2.48043 15.8946 2.29289 15.7071C2.10536 15.5196 2 15.2652 2 15V5.83C2.32127 5.94302 2.65943 6.00051 3 6H17C17.2652 6 17.5196 6.10536 17.7071 6.29289C17.8946 6.48043 18 6.73478 18 7V8Z"
						fill="#333"
					/>
				</svg>
				{shortenAddr(wallet.account, 4, 4)}
			</StyledWrap>
			{showPopup && (
				<StyledPopup ref={wrapperRef}>
					<StyledWalletBalance>
						{/* <svg
							width="20"
							height="18"
							viewBox="0 0 20 18"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M17 4H16V3C16 2.20435 15.6839 1.44129 15.1213 0.87868C14.5587 0.316071 13.7956 0 13 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V15C0 15.7956 0.316071 16.5587 0.87868 17.1213C1.44129 17.6839 2.20435 18 3 18H17C17.7956 18 18.5587 17.6839 19.1213 17.1213C19.6839 16.5587 20 15.7956 20 15V7C20 6.20435 19.6839 5.44129 19.1213 4.87868C18.5587 4.31607 17.7956 4 17 4ZM3 2H13C13.2652 2 13.5196 2.10536 13.7071 2.29289C13.8946 2.48043 14 2.73478 14 3V4H3C2.73478 4 2.48043 3.89464 2.29289 3.70711C2.10536 3.51957 2 3.26522 2 3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2ZM18 12H17C16.7348 12 16.4804 11.8946 16.2929 11.7071C16.1054 11.5196 16 11.2652 16 11C16 10.7348 16.1054 10.4804 16.2929 10.2929C16.4804 10.1054 16.7348 10 17 10H18V12ZM18 8H17C16.2044 8 15.4413 8.31607 14.8787 8.87868C14.3161 9.44129 14 10.2044 14 11C14 11.7956 14.3161 12.5587 14.8787 13.1213C15.4413 13.6839 16.2044 14 17 14H18V15C18 15.2652 17.8946 15.5196 17.7071 15.7071C17.5196 15.8946 17.2652 16 17 16H3C2.73478 16 2.48043 15.8946 2.29289 15.7071C2.10536 15.5196 2 15.2652 2 15V5.83C2.32127 5.94302 2.65943 6.00051 3 6H17C17.2652 6 17.5196 6.10536 17.7071 6.29289C17.8946 6.48043 18 6.73478 18 7V8Z"
								fill="#F5F5F5"
							/>
						</svg> */}
						Balance: {formatBigNumberToString(zapContract.balance)} ZAP
					</StyledWalletBalance>
					<StyledDivider />
					<StyledWalletAddress>
						{shortenAddr(wallet.account, 6, 6)}
						<svg
							width="12"
							height="13"
							viewBox="0 0 12 13"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							onClick={(e: any) => copyWalletAddress(wallet.account)}
						>
							<path
								d="M3.9 9.75H1.3C0.955219 9.75 0.624559 9.61304 0.380761 9.36924C0.136964 9.12544 0 8.79478 0 8.45V1.3C0 0.955218 0.136964 0.624558 0.380761 0.380761C0.624559 0.136964 0.955219 0 1.3 0L6.5 0C6.84478 0 7.17544 0.136964 7.41924 0.380761C7.66304 0.624558 7.8 0.955218 7.8 1.3V3.25H9.75L11.7 5.2V11.7C11.7 12.0448 11.563 12.3754 11.3192 12.6192C11.0754 12.863 10.7448 13 10.4 13H5.2C4.85522 13 4.52456 12.863 4.28076 12.6192C4.03696 12.3754 3.9 12.0448 3.9 11.7V9.75ZM3.9 8.45V4.55C3.9 4.20522 4.03696 3.87456 4.28076 3.63076C4.52456 3.38696 4.85522 3.25 5.2 3.25H6.5V1.3H1.3V8.45H3.9ZM9.2118 4.55H5.2V11.7H10.4V5.7382L9.2118 4.55Z"
								fill="#F5F5F5"
							/>
						</svg>
					</StyledWalletAddress>
					<StyledDivider />
					<StyledDisconnect onClick={() => onWalletDisconnect()}>
						<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M11.258 8.56914C11.258 9.12136 10.8103 9.56902 10.2581 9.56902L7.67722 9.56902C7.67692 9.56902 7.67662 9.56902 7.67632 9.56903C6.76665 9.57107 5.89476 9.93333 5.25166 10.5764C4.6088 11.2193 4.2467 12.0906 4.2444 12.9999C4.24674 13.9092 4.60886 14.7805 5.25166 15.4233C5.89501 16.0666 6.76729 16.4289 7.6772 16.4307C8.22903 16.4318 8.67565 16.8797 8.67512 17.4315C8.67458 17.9834 8.22709 18.4304 7.67526 18.4305L7.60929 18.4305C7.59027 18.4305 7.57138 18.4299 7.55262 18.4289C6.15754 18.3952 4.82663 17.8264 3.83762 16.8373C2.82014 15.8199 2.2475 14.4407 2.24464 13.0018L2.24464 12.9979C2.24747 11.5591 2.82009 10.1799 3.83762 9.16238C4.85505 8.14495 6.23437 7.57212 7.67325 7.56927L10.2581 7.56927C10.8103 7.56927 11.258 8.01693 11.258 8.56914Z" fill="#E02B2B" />
							<path fill-rule="evenodd" clip-rule="evenodd" d="M20.2045 10.5765C19.5611 9.93313 18.6888 9.57087 17.7789 9.56908C17.2271 9.568 16.7805 9.12006 16.781 8.56822C16.7815 8.01639 17.229 7.56933 17.7809 7.56932L17.8468 7.56932C17.8658 7.56932 17.8847 7.56985 17.9034 7.5709C19.2985 7.60455 20.6295 8.17342 21.6185 9.16244C22.636 10.1799 23.2086 11.5591 23.2115 12.9979L23.2115 13.0019C23.2086 14.4407 22.636 15.8199 21.6185 16.8374C20.6011 17.8548 19.2217 18.4277 17.7829 18.4305L17.7809 18.4305L15.198 18.4305C14.6458 18.4305 14.1981 17.9829 14.1981 17.4306C14.1981 16.8784 14.6458 16.4308 15.198 16.4308L17.7789 16.4308C17.7792 16.4308 17.7794 16.4308 17.7797 16.4308C18.6894 16.4287 19.5613 16.0665 20.2045 15.4234C20.8473 14.7805 21.2094 13.9092 21.2117 13C21.2094 12.0906 20.8473 11.2193 20.2045 10.5765Z" fill="#E02B2B" />
							<path fill-rule="evenodd" clip-rule="evenodd" d="M16.273 4.30617C16.7844 4.51468 17.0299 5.09823 16.8214 5.60957L10.4865 21.1452C10.2779 21.6565 9.6944 21.902 9.18306 21.6935C8.67171 21.485 8.42622 20.9015 8.63473 20.3901L14.9696 4.8545C15.1782 4.34316 15.7617 4.09766 16.273 4.30617Z" fill="#E02B2B" />
						</svg>
						Disconnect
					</StyledDisconnect>
				</StyledPopup>
			)}
		</StyledWalletInfoPopup>
	);
};
