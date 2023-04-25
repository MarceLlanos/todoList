import { ColorProject, ProjectCredentials } from '@/models';
import {
	Divider,
	FormControl,
	FormHelperText,
	InputLabel,
	MenuItem,
	Select,
	TextField,
} from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import { FooterModal } from '../../../FooterModal';

import { useAppDispatch } from '@/redux';
import { createProject } from '@/redux/slices/project.slice';
import { setStatus } from '@/redux/slices/projects.slice';
import { createProjectService } from '@/services';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import './ModalFormProject.css';
import { LabelProject } from '../LabelProject';

export type ModalFormProjectProps = {
	setOpenModal: Dispatch<SetStateAction<boolean>>;
};

const ModalFormProject: React.FC<ModalFormProjectProps> = ({
	setOpenModal,
}) => {
	const dispatch = useAppDispatch();
	const {
		control,
		register,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm<ProjectCredentials>();

	const handleAddProject: SubmitHandler<
		ProjectCredentials
	> = async dataProject => {
		try {
			const projectDoc = await createProjectService(dataProject);

			dispatch(createProject(projectDoc));
			dispatch(setStatus('succeeded'));

			setOpenModal(false);
		} catch (error) {
			// dispatch(setError(error));
			dispatch(setStatus('failed'));
		}
	};

	return (
		<form onSubmit={handleSubmit(handleAddProject)} className='mt-2'>
			<FormControl sx={{ mb: 3, width: '100%' }}>
				<TextField
					id='outlined-basic'
					label='Project Name*'
					variant='outlined'
					type='text'
					autoComplete='project-name'
					autoCorrect='on'
					autoCapitalize='on'
					margin='normal'
					aria-describedby='project-name'
					aria-required='true'
					{...register('nameProject', {
						required: 'Project name is required',
						minLength: 5,
					})}
					error={errors.nameProject ? true : false}
				/>
			</FormControl>
			<Controller
				name='colorProject'
				control={control}
				defaultValue=''
				rules={{ required: true }}
				render={({ field }) => (
					<FormControl sx={{ mb: 2, width: '100%' }}>
						<InputLabel id='color-project'>Color project</InputLabel>
						<Select
							{...field}
							labelId='color-project'
							id='color-project'
							autoComplete='color-project'
							autoCorrect='off'
							autoCapitalize='off'
							aria-describedby='color-project'
							aria-required='true'
							label='Color project*'
							error={errors.colorProject ? true : false}
						>
							<MenuItem value={`${ColorProject.BLUE}`}>
								<LabelProject color={`${ColorProject.BLUE}`} label='Blue' />
							</MenuItem>
							<MenuItem value={`${ColorProject.CYAN}`}>
								<LabelProject color={`${ColorProject.CYAN}`} label='Cyan' />
							</MenuItem>
							<MenuItem value={`${ColorProject.PURPLE}`}>
								<LabelProject color={`${ColorProject.PURPLE}`} label='Purple' />
							</MenuItem>
							<MenuItem value={`${ColorProject.LIGHT_BLUE}`}>
								<LabelProject
									color={`${ColorProject.LIGHT_BLUE}`}
									label='Light blue'
								/>
								Blue
							</MenuItem>
							<MenuItem value={`${ColorProject.GREEN}`}>
								<LabelProject color={`${ColorProject.GREEN}`} label='Green' />
							</MenuItem>
							<MenuItem value={`${ColorProject.DARK_PURPLE}`}>
								<LabelProject
									color={`${ColorProject.DARK_PURPLE}`}
									label='Dark purple'
								/>
								Purple
							</MenuItem>
							<MenuItem value={`${ColorProject.RED}`}>
								<LabelProject color={`${ColorProject.RED}`} label='Red' />
							</MenuItem>
							<MenuItem value={`${ColorProject.PINK}`}>
								<LabelProject color={`${ColorProject.PINK}`} label='Pink' />
							</MenuItem>
						</Select>
						{errors.colorProject && (
							<FormHelperText error>This field is required</FormHelperText>
						)}
					</FormControl>
				)}
			/>
			<Divider />
			<FooterModal labelButton='Add project' setOpenModal={setOpenModal} />
		</form>
	);
};

export default ModalFormProject;
