import React from 'react';
import styled from 'styled-components';
import { Dialog, PrimaryButton } from 'components/Elements';

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
	show: boolean;
	onClose: () => void;
};

const UserRejectedModal: React.FunctionComponent<ModalProps> = ({
	show,
	onClose,
}) => {
	if (show) {
		return (
			<Dialog center>
				<StyledDialogHeader>Error</StyledDialogHeader>
				<StyledDialogInfo>Transaction rejected</StyledDialogInfo>
				<PrimaryButton
					onClick={(ev: React.MouseEvent<HTMLElement>) => {
						onClose();
					}}
				>
					Dismiss
				</PrimaryButton>
			</Dialog>
		);
	}

	return <></>;
};

export default UserRejectedModal;
