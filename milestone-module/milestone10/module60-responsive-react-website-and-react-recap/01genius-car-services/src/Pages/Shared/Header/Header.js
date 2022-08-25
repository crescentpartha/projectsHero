import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.png';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant="dark">
                <Container className='text-center'>
                    <Navbar.Brand as={Link} to="/">
                        <img height={35} width={120} src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="home#services">Services</Nav.Link>
                            <Nav.Link as={Link} to="home#experts">Experts</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user ? <button className='border border-light border-opacity-25 rounded text-light text-uppercase fw-normal bg-primary' onClick={logout}>Sign Out</button>
                                :
                                    <>
                                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                        {/* <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link> */}
                                    </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
            {/* Not Responsive Header */}

            {/* <Navbar bg="primary" variant="dark" fixed="top" >
                <Container className='d-flex flex-row justify-content-evenly align-items-center p-2'> */}

                    {/* <Navbar.Brand href="#home">
                        <img src={logo} height='30' alt='' />
                    </Navbar.Brand> */}

                    {/* <Navbar.Brand>
                        <Link to='/home'><img src={logo} height='30' alt='' /></Link>
                    </Navbar.Brand>
                    <Nav className="me-auto d-flex flex-row justify-content-evenly align-items-center"> */}

                        {/* <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link> */}

                        {/* <Link className='text-white text-decoration-none mx-2' to='/home'>Home</Link>
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
            </Navbar> */}
        </>
    );
};

export default Header;