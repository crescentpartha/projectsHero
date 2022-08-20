import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    }
    return (
        <>
            <Navbar bg="primary" variant="dark" fixed="top" >
                <Container className='d-flex flex-row justify-content-evenly align-items-center p-2'>
                    {/* <Navbar.Brand href="#home">
                        <img src={logo} height='30' alt='' />
                    </Navbar.Brand> */}
                    <Navbar.Brand>
                        <Link to='/home'><img src={logo} height='30' alt='' /></Link>
                    </Navbar.Brand>
                    <Nav className="me-auto d-flex flex-row justify-content-evenly align-items-center">
                        {/* <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                        <Link className='text-white text-decoration-none mx-2' to='/home'>Home</Link>
                        <Link className='text-white text-decoration-none mx-2' to='/about'>About</Link>
                        {
                            user ?
                                <input className='signOut-button' onClick={logout} type="button" value="Sign Out" />
                                :
                                <Link className='text-white text-decoration-none mx-2' to='/login'>SignIn</Link>
                        }
                        {user ? '' : <Link className='text-white text-decoration-none mx-2' to='/signup'>SignUp</Link>}
                        <Link className='text-white text-decoration-none mx-2' to='/notFound'>Not Found</Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;