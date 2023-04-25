import { combineReducers } from '@reduxjs/toolkit';
import { authUser } from '../slices';
import projectSlice from '../slices/project.slice';
import { projectsSlice } from '../slices/projects.slice';

export const rootReducer = combineReducers({
	userAuth: authUser,
	project: projectSlice,
	projects: projectsSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
