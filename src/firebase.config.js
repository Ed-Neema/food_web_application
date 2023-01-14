import {getApp,getApps,initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyB5HyVsCeDBwLhLK4JDASNn8Z3EaIj9SUI",
  authDomain: "foodapp-bac40.firebaseapp.com",
  databaseURL: "https://foodapp-bac40-default-rtdb.firebaseio.com",
  projectId: "foodapp-bac40",
  storageBucket: "foodapp-bac40.appspot.com",
  messagingSenderId: "668275722367",
  appId: "1:668275722367:web:f52a3d68810f2decabd74a",
};

const app = getApps > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore (app)
const storage = getStorage(app)

export {app, firestore,storage};