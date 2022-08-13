import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
// import useFirebase from '../../hooks/useFirebase';

const auth = getAuth(app);

const Products = () => {
    // const {user} = useFirebase();
    const [user] = useAuthState(auth);
    return (
        <div style={{margin: "50px 20%", borderRadius: "20px", padding: "20px 0", boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)"}}>
            <h2>Knock knock!! who is there</h2>
            <h5>{user ? user.displayName : 'Vooooooooooot'}</h5>
        </div>
    );
};

export default Products;