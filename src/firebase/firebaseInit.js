import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBvDKiHsLLx3KE-MgF8uiIRFlX5Ost-Gpc",
    authDomain: "vuefireblog-2cd7c.firebaseapp.com",
    projectId: "vuefireblog-2cd7c",
    storageBucket: "vuefireblog-2cd7c.appspot.com",
    messagingSenderId: "966950675357",
    appId: "1:966950675357:web:b1a99daea3f0d0eed54574"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
