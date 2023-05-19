import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);

  const [user, setUser] = useState([]);

  const googleProvider = new GoogleAuthProvider();

  const GoogleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const LogOut = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      setUser(loggedUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = { user, setUser, GoogleSignIn, LogOut };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
