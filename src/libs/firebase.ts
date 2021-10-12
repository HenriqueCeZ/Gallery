import {initializeApp} from 'firebase/app';
import {getStorage} from 'firebase/storage';
const firebaseConfig = {
    apiKey: "AIzaSyAENGjGHM4GLIZxTZfzKiujv0JV6r5V2Hg",
    authDomain: "d5reactgallery-f2904.firebaseapp.com",
    projectId: "d5reactgallery-f2904",
    storageBucket: "d5reactgallery-f2904.appspot.com",
    messagingSenderId: "981840341528",
    appId: "1:981840341528:web:bde84f50d0a04450d4f16d"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  export const storage = getStorage(firebaseApp);