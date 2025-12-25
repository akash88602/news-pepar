import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut,signInWithEmailAndPassword } from "firebase/auth";
import app from '../frebase/firebase.config';


export const AuthContext = createContext(null);
 const auth = getAuth(app);
export default function AuthProvider({ children }) {
   
//   const [user, setUser] = useState({
//     name: 'akash hossain',
//     email: 'akashhossin88607@gmail.com'
//   }); 
const [user,setUser]=useState(null)
const createUser=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password);
}
 const loginUser = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

const logOut =()=>{
    return signOut(auth)
}

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    console.log("Auth State Changed:", currentUser);
    setUser(currentUser);
  });

  return () => unsubscribe();
}, []);


  const authData = {
    user,
    setUser,
    createUser,
      loginUser,
    logOut,
  
  };

  return (
    <AuthContext.Provider value={authData}>
      {children}
    </AuthContext.Provider>
  );
}
