import { firestore } from '@/firebase';
import {
	DocumentData,
	addDoc,
	collection,
	deleteDoc,
	doc,
	getDoc,
	getDocs,
	updateDoc,
} from 'firebase/firestore';

export async function addDocument(nameCollection: string, data: DocumentData) {
	const docRef = await addDoc(collection(firestore, nameCollection), data);
	return docRef;
}

export async function getDocuments(nameCollection: string) {
	const querySnapshot = await getDocs(collection(firestore, nameCollection));
	return querySnapshot;
}

export async function getDocumentById(nameCollection: string, docId: string) {
	const docRef = doc(firestore, nameCollection, docId);
	const querySnapshot = await getDoc(docRef);
	return querySnapshot.exists()
		? querySnapshot.data
		: alert('No existe el documento que quiere obtener');
}

export async function updateDocument(
	nameCollection: string,
	docId: string,
	data: any
) {
	const docRef = doc(firestore, nameCollection, docId);
	await updateDoc(docRef, data);
}

export async function deleteDocument(nameCollection: string, docId: string) {
	await deleteDoc(doc(firestore, nameCollection, docId));
}
