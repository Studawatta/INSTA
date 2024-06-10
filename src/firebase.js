// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: 'insta-next-6b637.firebaseapp.com',
  projectId: 'insta-next-6b637',
  storageBucket: 'insta-next-6b637.appspot.com',
  messagingSenderId: '230788884326',
  appId: '1:230788884326:web:460916059b166c61a94aa7',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
