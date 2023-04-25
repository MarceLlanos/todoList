import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import {
	AppBar,
	Avatar,
	Button,
	ClickAwayListener,
	Grid,
	Grow,
	IconButton,
	InputAdornment,
	MenuItem,
	MenuList,
	Paper,
	Popper,
} from '@mui/material';
import './styles/NavbarTop.css';

import { useAppSelector } from '@/redux';
import { useEffect, useRef, useState } from 'react';
import { ModalComponent } from '../ModalComponent';
import { Logo, Search, StyledInput } from './styled';
export interface NavbarTopProps {}

const NavbarTop: React.FC<NavbarTopProps> = () => {
	const [open, setOpen] = useState(false);
	const anchorRef = useRef<HTMLButtonElement>(null);
	const prevOpen = useRef(open);
	const [openModal, setOpenModal] = useState(false);

	const userData = useAppSelector(({ userAuth }) => userAuth.currentUser);

	const handleOpenModal = () => setOpenModal(true);

	const handleToggle = () => {
		setOpen(prevOpen => !prevOpen);
	};

	const handleClose = (event: Event | React.SyntheticEvent) => {
		if (
			anchorRef.current &&
			anchorRef.current.contains(event.target as HTMLElement)
		) {
			return;
		}

		setOpen(false);
	};

	function handleListKeyDown(event: React.KeyboardEvent) {
		if (event.key === 'Tab') {
			event.preventDefault();
			setOpen(false);
		} else if (event.key === 'Escape') {
			setOpen(false);
		}
	}

	// return focus to the button when we transitioned from !open -> open
	useEffect(() => {
		if (prevOpen.current === true && open === false) {
			anchorRef.current!.focus();
		}

		prevOpen.current = open;
	}, [open]);

	return (
		<AppBar position='fixed' sx={{ background: 'var(--grey00)' }}>
			<Grid container>
				<Grid item md={1} lg={1} />
				<Grid item md={2} lg={2}>
					<Button className='logoButton' sx={{ mr: 2 }}>
						<Logo src='../src/assets/Combination Logo.svg' />
					</Button>
				</Grid>
				<Grid item xs={12} md={8} lg={8}>
					<div className='searchBarContainer'>
						<Search>
							<StyledInput
								startAdornment={
									<InputAdornment position='end'>
										<SearchIcon />
									</InputAdornment>
								}
								placeholder='Search…'
								inputProps={{ 'aria-label': 'search' }}
							/>
						</Search>
						<IconButton
							sx={{
								marginRight: '25px',
							}}
							onClick={handleOpenModal}
						>
							<AddIcon />
						</IconButton>

						<div className='avatarContainer'>
							<Button
								sx={{
									textTransform: 'none',
									color: '#2A2F36',
									fontSize: '1rem',
									fontWeight: '400',
									margin: 0,
									padding: 0,
								}}
								ref={anchorRef}
								id='composition-button'
								aria-controls={open ? 'composition-menu' : undefined}
								aria-expanded={open ? 'true' : undefined}
								aria-haspopup='true'
								onClick={handleToggle}
							>
								<span className='mr-1'> {userData?.name} </span>
								<Avatar src={userData?.photo} />
							</Button>
							<Popper
								open={open}
								anchorEl={anchorRef.current}
								role={undefined}
								placement='bottom-start'
								transition
								disablePortal
							>
								{({ TransitionProps, placement }) => (
									<Grow
										{...TransitionProps}
										style={{
											transformOrigin:
												placement === 'bottom-start'
													? 'left top'
													: 'left bottom',
										}}
									>
										<Paper>
											<ClickAwayListener onClickAway={handleClose}>
												<MenuList
													autoFocusItem={open}
													id='composition-menu'
													aria-labelledby='composition-button'
													onKeyDown={handleListKeyDown}
												>
													<MenuItem onClick={handleClose}>My profile</MenuItem>
													<MenuItem onClick={handleClose}>Logout</MenuItem>
												</MenuList>
											</ClickAwayListener>
										</Paper>
									</Grow>
								)}
							</Popper>
						</div>
					</div>
				</Grid>
				<Grid item md={1} lg={1} />
			</Grid>
			<ModalComponent
				setOpenModal={setOpenModal}
				openModal={openModal}
				titleModal='Add a new todo'
			>
				<p>hola desde Modal</p>
			</ModalComponent>
		</AppBar>
	);
};

export default NavbarTop;
