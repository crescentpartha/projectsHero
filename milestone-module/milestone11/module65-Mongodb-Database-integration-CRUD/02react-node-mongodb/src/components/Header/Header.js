import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" sticky="top" bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">CRUD Operations</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Read</Nav.Link>
                            <Nav.Link as={Link} to="/user/add">Create</Nav.Link>
                            {/* <Nav.Link as={Link} to="/update/:id">Update</Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;