import { useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase.init";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const signInWithGoogle = () => {
        // console.log('signing in soon');
        signInWithPopup(auth, googleProvider)
        .then( result => {
            const user = result.user;
            setUser(user);
            console.log(user);
        })
        .catch( error => {
            console.error(error);
        })
    }

    const handleSignOut = () => {
        signOut(auth)
        .then( () => {})
    }

    // Only one time we need to tell that set the state if user is changed (Result: toggle LogIn to SignOut)
    useEffect( () => {
        onAuthStateChanged(auth, user => {
            setUser(user);
        })
    }, []);

    // return [user, setUser];
    // return {user, setUser, signInWithGoogle};
    return {
        user, 
        setUser, 
        handleSignOut,
        signInWithGoogle
    };
}

export default useFirebase;