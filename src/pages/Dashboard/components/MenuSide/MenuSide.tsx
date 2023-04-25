import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import {
	Box,
	Collapse,
	Divider,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from '@mui/material';

import { useState } from 'react';
import './styles/MenuSide.css';
import { ModalComponent } from '../ModalComponent';
import { MenuProjects } from './components';

export interface MenuSideProps {}

const MenuSide: React.FC<MenuSideProps> = () => {
	const [openProject, setOpenProject] = useState(true);
	const [openLabel, setOpenLabel] = useState(true);
	const [openModalProject, setOpenModalProject] = useState(false);

	const handleClickOpenProject = () => {
		setOpenProject(!openProject);
	};
	const handleClickOpenLabel = () => {
		setOpenLabel(!openLabel);
	};

	const handleOpenModalProject = () => setOpenModalProject(true);

	return (
		<>
			<Box
				sx={{
					width: '100%',
					height: 'calc(100dvh - 50px)',
					bgcolor: 'transparent',
					right: 0,
					bottom: 0,
				}}
			>
				<nav aria-label='main mailbox folders'>
					<List>
						<ListItem disablePadding>
							<ListItemButton>
								<ListItemIcon>
									<HomeOutlinedIcon />
								</ListItemIcon>
								<ListItemText primary='Inbox' />
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton>
								<ListItemIcon>
									<CalendarTodayOutlinedIcon />
								</ListItemIcon>
								<ListItemText primary='Today' />
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton>
								<ListItemIcon>
									<CalendarMonthOutlinedIcon />
								</ListItemIcon>
								<ListItemText primary='Next 7 days' />
							</ListItemButton>
						</ListItem>
					</List>
				</nav>
				<Divider />
				<nav aria-label='secondary mailbox folders'>
					<List>
						<MenuProjects />
						<Divider />
						<ListItemButton onClick={handleClickOpenLabel}>
							{openLabel ? <ExpandLess /> : <ExpandMore />}
							<ListItemText primary='Labels' />
							{openLabel ? <p>see less</p> : <p>see all</p>}
						</ListItemButton>
						<Collapse in={openLabel} timeout='auto' unmountOnExit>
							<List component='div' disablePadding>
								<ListItemButton sx={{ pl: 4 }}>
									<ListItemIcon>
										<AddOutlinedIcon />
									</ListItemIcon>
									<ListItemText primary='Add label' />
								</ListItemButton>
							</List>
						</Collapse>
					</List>
				</nav>
			</Box>
		</>
	);
};

export default MenuSide;
