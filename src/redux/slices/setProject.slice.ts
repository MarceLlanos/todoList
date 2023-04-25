import { ProjectDocument } from '@/models';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProjectsState {
	projects: ProjectDocument[];
}

const initialState: ProjectsState = {
	projects: [],
};

const projectsSlice = createSlice({
	name: 'projects',
	initialState,
	reducers: {
		setProjects(state, action: PayloadAction<ProjectDocument[]>) {
			state.projects = action.payload;
		},
	},
});

export const { setProjects } = projectsSlice.actions;

export default projectsSlice.reducer;
