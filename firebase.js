import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBoglOAtKub8YoZ1ppQcZIwAyLUo0xkGs0",
  authDomain: "bee-music-player-1242f.firebaseapp.com",
  projectId: "bee-music-player-1242f",
  storageBucket: "bee-music-player-1242f.appspot.com",
  messagingSenderId: "273430435912",
  appId: "1:273430435912:web:3ef7a920301c06d826a07d"
};


const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)