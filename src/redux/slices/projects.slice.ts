import { Project, ProjectsState } from '@/models';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: ProjectsState = {
	projects: [],
	status: 'idle',
	error: null,
};

export const projectsSlice = createSlice({
	name: 'projects',
	initialState,
	reducers: {
		addProject: {
			reducer(state, action: PayloadAction<Project>) {
				state.projects.push(action.payload);
			},
			prepare(name: string, colorProject: string, userId: string) {
				return {
					payload: { name, colorProject, userId, id: Date.now().toString() },
				};
			},
		},
		updateProject: (state, action: PayloadAction<Project>) => {
			const { id, name, colorProject } = action.payload;
			const existingProject = state.projects.find(project => project.id === id);
			if (existingProject) {
				existingProject.name = name;
				existingProject.colorProject = colorProject;
			}
		},
		removeProject: (state, action: PayloadAction<Project>) => {
			const projectId = action.payload.id;
			state.projects = state.projects.filter(
				project => project.id !== projectId
			);
		},
		setProject: (state, action: PayloadAction<Project[]>) => {
			state.projects = action.payload;
		},
		setStatus: (
			state,
			action: PayloadAction<'idle' | 'loading' | 'succeeded' | 'failed'>
		) => {
			state.status = action.payload;
		},
		setError: (state, action: PayloadAction<string | null>) => {
			state.error = action.payload;
		},
	},
});

export const {
	addProject,
	updateProject,
	removeProject,
	setProject,
	setStatus,
	setError,
} = projectsSlice.actions;
