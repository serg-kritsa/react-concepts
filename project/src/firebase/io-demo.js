import { getFirestore, collection, doc, getDocs, addDoc, writeBatch} from "firebase/firestore"

export const db = getFirestore();

const readDocuments = async () => {
    const querySnapshot = await getDocs(collection(db, 'users'));
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
}
const writeDocument = async () => {
  try {
    const docRef = await addDoc(collection(db, 'users'), {
      first: 'Ada',
      last: 'Lovelace',
      born: 1815
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}

// //                select props
// //                                    return selected
// collections.map( ({prop1, prop2}) => ({prop1, prop2}) )
const writeManyDocuments = async (objectsToAdd) => {
  const collectionRef =  collection(db, collectionKey);
  const batch = writeBatch(db);
  objectsToAdd.forEach(obj => {
    // console.log(obj);
    const newDocRef = doc(collectionRef);
    // console.log(newDocRef);
    batch.set(newDocRef, obj);
  });
  await batch.commit();
}