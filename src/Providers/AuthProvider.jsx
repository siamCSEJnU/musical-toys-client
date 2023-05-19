import { createContext, useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);

  const [user, setUser] = useState([]);

  const googleProvider = new GoogleAuthProvider();

  const GoogleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const authInfo = { user, setUser, GoogleSignIn };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
