import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const  googleProvider = new GoogleAuthProvider();
 // eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading,setLoading]=useState(true);


  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

   // 4. Google Signin
   const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

 //6. Login with Password
 const signin = (email, password) => {
  setLoading(true);
  return signInWithEmailAndPassword(auth, email, password);
};

 // 5. Logout
 const logOut = () => {
  setLoading(true);
  // localStorage.removeItem("access-Token");
  return signOut(auth);
};

  useEffect(() => {
    //this part will execute once the component is mounted.
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("current-user",currentUser)
      setLoading(false);
    });

    return () => { 
      unsubscribe();
    };
  }, []);


  const authInfo = {
    user,
    loading,
    createUser,
    signInWithGoogle,
    signin,
    logOut
    
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
