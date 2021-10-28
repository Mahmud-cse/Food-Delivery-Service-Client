import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut,updateProfile } from "firebase/auth";
import initailizeAuthentication from '../Firebase/firebase.init';
initailizeAuthentication();


const GOprovider = new GoogleAuthProvider();
const useFirebase = () => {
    const [user,setUser]=useState({});
    const [isLoading,setIsLoading]=useState(true);
    const auth = getAuth();

    const signInUsingGoogle=()=>{
      setIsLoading(true);
      return  signInWithPopup(auth, GOprovider);
    }

    const signOutUsingGoogle=()=>{
      setIsLoading(true);
        signOut(auth).then(() => {
            setUser({});
          })
          .finally(()=>setIsLoading(false));
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
            }else{
              setUser({});
            }
            setIsLoading(false);
          });
    },[]);

    return {
        auth,
        user,
        setUser,
        isLoading,
        setIsLoading,
        updateProfile,
        signInUsingGoogle,
        signOutUsingGoogle,
    }
};

export default useFirebase;