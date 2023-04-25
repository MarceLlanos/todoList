export interface ProjectDocument {
	uid?: string;
	userId: string;
	projectName: string;
	colorProject: string;
	dateCreatedProject?: Date;
}

export interface Project {
	id: string;
	name: string;
	colorProject: string;
	userId: string;
	dateCreated?: Date;
}
