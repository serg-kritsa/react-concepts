import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

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