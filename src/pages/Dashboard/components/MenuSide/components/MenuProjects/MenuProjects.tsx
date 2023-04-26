import { RootState, useAppDispatch, useAppSelector } from '@/redux';
import { setProject } from '@/redux/slices/projects.slice';
import { fetchProjects } from '@/services';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import {
	Collapse,
	List,
	ListItemButton,
	ListItemText
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { ModalComponent } from '../../../ModalComponent';
import { LabelProject } from '../LabelProject';
import { ModalFormProject } from '../ModalFormProject';

export type MenuProjectsProps = {};

const MenuProjects: React.FC<MenuProjectsProps> = () => {
	const [openProject, setOpenProject] = useState(false);
	const [openModalProject, setOpenModalProject] = useState(false);
	const dispatch = useAppDispatch();
	const userId = useAppSelector(
		(state: RootState) => state.userAuth.currentUser?.uid
	);
	const projects = useAppSelector(
		(state: RootState) => state.projects.projects
	);

	const handleClickOpenProject = () => {
		setOpenProject(!openProject);
	};

	useEffect(() => {
		if (userId) {
			fetchProjects(userId).then(projects => {
				dispatch(setProject(projects));
			});
		}
	}, [dispatch, userId]);

	const handleOpenModalProject = () => setOpenModalProject(true);

	return (
		<>
			<List>
				<ListItemButton sx={{ pl: 1 }}  onClick={handleClickOpenProject}>
					{openProject ? <ExpandLess /> : <ExpandMore />}
					<ListItemText primary='Projects' />
					{openProject ? <p>see less</p> : <p>see all</p>}
				</ListItemButton>
				<Collapse in={openProject} timeout='auto' unmountOnExit>
					<List component='div' disablePadding>
							{projects.length > 0 ? (
							projects.map(project => (
									<ListItemButton sx={{ pl: 5 }}  key={project.id}>
										<LabelProject
											color={project.colorProject}
											label={project.name}
										/>
									</ListItemButton>
								))
							) : (
								<></>
							)}
						
						<ListItemButton sx={{ pl: 2 }} onClick={handleOpenModalProject}>
							<AddOutlinedIcon />
							<ListItemText primary='Add project' />
						</ListItemButton>
					</List>
				</Collapse>
			</List>
			<ModalComponent
				setOpenModal={setOpenModalProject}
				openModal={openModalProject}
				titleModal='Add a new project'
			>
				<ModalFormProject setOpenModal={setOpenModalProject} />
			</ModalComponent>
		</>
	);
};

export default MenuProjects;
