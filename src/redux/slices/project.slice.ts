import { ProjectCredentials, ProjectDocument } from '@/models';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { DocumentData, DocumentReference } from 'firebase/firestore';

const project: ProjectDocument = {
	uid: '',
	userId: '',
	projectName: '',
	colorProject: '',
	dateCreatedProject: new Date(0),
};
const projectCredentials: ProjectCredentials = {
	titleProject: '',
	colorProject: '',
};
const initialState = {
	projectDoc: project,
	projectCred: projectCredentials,
};

export const projectSlice = createSlice({
	name: 'project',
	initialState,
	reducers: {
		createProject: (state, action) => {
			return {
				...state,
				projectCred: action.payload,
			};
		},
		updateProject: (state, { payload }: PayloadAction<ProjectDocument>) => {
			return {
				...state,
				projectDoc: { ...state.projectDoc, payload },
				isProjectCreated: false,
			};
		},
		removeProject: state => {
			return {
				...state,
			};
		},
	},
});

export const { createProject, updateProject, removeProject } =
	projectSlice.actions;

export default projectSlice.reducer;
