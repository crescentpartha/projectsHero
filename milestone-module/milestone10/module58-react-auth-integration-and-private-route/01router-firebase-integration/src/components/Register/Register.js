import React from 'react';

const Register = () => {
    return (
        <div style={{margin: "50px 20%", borderRadius: "20px", padding: "20px 0", boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)"}}>
            <h3>Please Register Now!!!</h3>
            <form>
                <input type="text" placeholder='Your Name' />
                <br />
                <input type="email" placeholder='Your Email' />
                <br />
                <input type="password" placeholder='Your Password' />
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;