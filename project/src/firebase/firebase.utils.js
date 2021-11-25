import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, getDocs } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();

export const loadShopData = async () => {
  let formattedCollection = {};
  const querySnapshot = await getDocs(collection(db, 'collections'));
  querySnapshot.forEach((doc) => {
      const id = doc.id;
      const { title, items } = doc.data();
      const routeName = encodeURI(title.toLowerCase());
      formattedCollection[routeName] = { id, routeName, title, items };
  });
  return formattedCollection;
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const auth = getAuth();
const provider = new GoogleAuthProvider();
provider.addScope('profile');
provider.addScope('email');
export const signInWithGoogle = async () => {
  const result = await signInWithPopup(auth, provider);
  // The signed-in user info.
  // const user = result.user;
  // // This gives you a Google Access Token.
  // const credential = GoogleAuthProvider.credentialFromResult(result);
  // const token = credential.accessToken;
};
export const signUpWithEmailAndPasswordForm = async (auth, email, password) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  return userCredential; 
};
export const signInWithEmailAndPasswordForm = async (auth, email, password) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  return userCredential; 
};

export default app;