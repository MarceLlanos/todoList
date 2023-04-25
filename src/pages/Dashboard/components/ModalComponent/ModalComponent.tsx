import { Box, IconButton, Modal, Typography } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

import './ModalComponent.css';

const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 520,
	bgcolor: 'background.paper',
	borderRadius: '3px',
	boxShadow: 24,
	p: 4,
};

const titleStyle = {
	display: 'flex',
	flexWrap: 'wrap',
};
const closeButtonStyle = {
	position: 'absolute' as 'absolute',
	right: 30,
	color: '#2A2F36',
};

export type ModalComponentProps = {
	children: JSX.Element[] | JSX.Element;
	setOpenModal: Dispatch<SetStateAction<boolean>>;
	openModal: boolean;
	titleModal: string;
};

const ModalComponent: React.FC<ModalComponentProps> = ({
	children,
	setOpenModal,
	openModal,
	titleModal,
}) => {
	const handleCloseModal = () => setOpenModal(false);

	return (
		<div>
			<Modal
				open={openModal}
				onClose={handleCloseModal}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<Box sx={style}>
					<Box sx={titleStyle}>
						<Typography id='modal-modal-title' variant='h6' component='h2'>
							{titleModal}
						</Typography>
						<IconButton
							aria-label='close'
							size='small'
							onClick={handleCloseModal}
							sx={closeButtonStyle}
						>
							<CloseOutlinedIcon fontSize='small' />
						</IconButton>
					</Box>
					{children}
				</Box>
			</Modal>
		</div>
	);
};

export default ModalComponent;
