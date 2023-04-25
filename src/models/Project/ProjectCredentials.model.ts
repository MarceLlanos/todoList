import { Project } from './ProjectDocument.model';

export interface ProjectCredentials {
	nameProject: string;
	colorProject: string;
}

export interface ProjectsState {
	projects: Project[];
	status: 'idle' | 'loading' | 'succeeded' | 'failed';
	error: string | null;
}
