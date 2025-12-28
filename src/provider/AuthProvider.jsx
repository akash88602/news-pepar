import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import app from '../frebase/firebase.config';


export const AuthContext = createContext(null);

const auth = getAuth(app);
export default function AuthProvider({ children }) {

  //   const [user, setUser] = useState({
  //     name: 'akash hossain',
  //     email: 'akashhossin88607@gmail.com'
  //   }); 
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  }
  const loginUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);



  const authData = {
    user,
    setUser,
    createUser,
    loginUser,
    logOut,
    loading,
    setLoading

  };

  return (
    <AuthContext.Provider value={authData}>
      {children}
    </AuthContext.Provider>
  );
}
