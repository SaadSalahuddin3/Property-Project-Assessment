// // src/firebase/config.js
// import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';
// import { getAuth } from 'firebase/auth';
// import { getStorage } from 'firebase/storage';

// const firebaseConfig = {
//   apiKey: "AIzaSyDAPGiZoLQBruMS-xiZxPI61-rarkSAV8Y",
//   authDomain: "property-listing-89a85.firebaseapp.com",
//   databaseURL: "https://property-listing-89a85-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "property-listing-89a85",
//   storageBucket: "property-listing-89a85.firebasestorage.app",
//   messagingSenderId: "1084768761906",
//   appId: "1:1084768761906:web:176bc0bd20df7aa6b2642b",
//   measurementId: "G-9YS0V0N6QW"
// };

// const app = initializeApp(firebaseConfig);

// const db = getFirestore(app);
// const auth = getAuth(app);
// const storage = getStorage(app);

// export { db, auth, storage };


// export { database };



// src/firebase/config.js
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDAPGiZoLQBruMS-xiZxPI61-rarkSAV8Y",
  authDomain: "property-listing-89a85.firebaseapp.com",
  databaseURL: "https://property-listing-89a85-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "property-listing-89a85",
  storageBucket: "property-listing-89a85.firebasestorage.app",
  messagingSenderId: "1084768761906",
  appId: "1:1084768761906:web:176bc0bd20df7aa6b2642b",
  measurementId: "G-9YS0V0N6QW"
}
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Realtime Database
const database = getDatabase(app);

// ✅ Named export
export { database };

