

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


var firebaseConfig = {
    apiKey: "AIzaSyCIa2NxW237k1ro6pgiJBjyxzlZqAk4SlM",
    authDomain: "vendor-99091.firebaseapp.com",
    databaseURL: "https://vendor-99091.firebaseio.com",
    projectId: "vendor-99091",
    storageBucket: "vendor-99091.appspot.com",
    messagingSenderId: "916798232562",
    appId: "1:916798232562:web:dca0b2709d712afc2afd6b",
    measurementId: "G-F53C2N6FS6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

  export const createUserProfileDoc = async (userAuth, additionalData) => {
    if(!userAuth) return;

    //create a reference to this users location
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    //get whatever data is located at reference
    const snapShot = await userRef.get();
    
    //checks if the user doesn't already exist
    if (!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        //if the user doesn't already exist, then create one with the data above
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (e) {
            console.log('error creating user', e.message);
        }
    }
    //allways return user ref in case we want o use it later
    return userRef;
  };

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => {
      auth.signInWithPopup(provider);
  }

  export default firebase;