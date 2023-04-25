import { auth, firestore } from '@/firebase';
import { ProjectDocument, ProjectCredentials, Project } from '@/models';
import {
	addDoc,
	collection,
	deleteDoc,
	doc,
	getDocs,
	query,
	updateDoc,
	where,
} from 'firebase/firestore';
import { addDocument } from './collection.service';

export const createProjectDocument = async (
	dataProject: ProjectCredentials
) => {
	return await addDocument('project', {
		userId: auth.currentUser?.uid,
		dataProject,
		dateCreated: new Date(),
	});
};

// export const fetchProjects = async (userId: string): Promise<ProjectDocument[]> => {
// 	const queryProject = query(collection(firestore, 'project'), where('userId', '==', userId));
// 	const querySnapshot = await getDocs(queryProject);
// 	const projects: ProjectDocument[] = [];
// 	querySnapshot.forEach((doc) => {
// 		projects.push({ uid: doc.id, ...doc.data() } as ProjectDocument);
// 	});

// 	return projects;
// };

const projectsCollection = collection(firestore, 'projects');

export const createProjectService = async (
	dataCredential: ProjectCredentials
): Promise<Project> => {
	const docRef = await addDoc(projectsCollection, {
		userId: auth.currentUser?.uid,
		name: dataCredential.nameProject,
		colorProject: dataCredential.colorProject,
		dateCreated: new Date(),
	});
	return { id: docRef.id } as Project;
};

export const updateProjectService = async (
	id: string,
	dataCredential: ProjectCredentials
): Promise<void> => {
	const { nameProject, colorProject } = dataCredential;
	const projectRef = doc(firestore, 'projects', id);
	await updateDoc(projectRef, { nameProject, colorProject });
};

export const deleteProjectService = async (id: string): Promise<void> => {
	const projectRef = doc(firestore, 'projects', id);
	await deleteDoc(projectRef);
};

export const fetchProjects = async (userId: string): Promise<Project[]> => {
	const q = query(
		collection(firestore, 'projects'),
		where('userId', '==', userId)
	);
	const querySnapshot = await getDocs(q);
	const projects: Project[] = [];
	querySnapshot.forEach(doc => {
		projects.push({ id: doc.id, ...doc.data() } as Project);
	});
	return projects;
};
