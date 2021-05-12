import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav, NavDropdown, } from 'react-bootstrap'

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">React-Blog</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <NavLink to="/" className="nav-link">Home</NavLink>
                        <NavLink to={{
                            pathname: "/blog",
                            hash: "#star",
                            search: "?page=1&sort=top",
                        }} className="nav-link">Blog</NavLink>
                        <NavLink to="/posts/add-post" className="nav-link" >Add Post</NavLink>


                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header
