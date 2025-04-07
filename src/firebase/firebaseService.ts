import {db} from "./firebaseConfig";
import {
    collection,
    addDoc,
    getDocs,
    Timestamp,
    DocumentData
} from "firebase/firestore";
import {PostData} from "../types/post";

const postsCollection = collection(db, "posts");

export const createPost = async (data: PostData) => {
    const newPost = {
        ...data,
        createdAt: Timestamp.now()
    };

    const docRef = await addDoc(postsCollection, newPost);
    return docRef.id;
};

export const getPosts = async (): Promise<(DocumentData & { id: string })[]> => {
    const snapshot = await getDocs(postsCollection);
    return snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
};
