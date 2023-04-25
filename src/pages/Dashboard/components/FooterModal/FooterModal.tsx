import React, { Dispatch, SetStateAction } from 'react';
import { LinkButton, PrimaryButton } from '@/styled-components';
import { ModalFooter } from '../../styledComponents';

import './FooterModal.css';

export type FooterModalProps = {
	setOpenModal: Dispatch<SetStateAction<boolean>>;
	labelButton: string;
};

const FooterModal: React.FC<FooterModalProps> = ({
	setOpenModal,
	labelButton,
}) => {
	const handleCloseModal = () => setOpenModal(false);

	return (
		<ModalFooter>
			<LinkButton onClick={handleCloseModal}>Cancel</LinkButton>

			<PrimaryButton type='submit'>{labelButton}</PrimaryButton>
		</ModalFooter>
	);
};

export default FooterModal;
