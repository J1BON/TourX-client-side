import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Header.css";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  // console.log(user)
  return (
    <Navbar
      bg="light"
      variant="light"
      collapseOnSelect
      expand="lg"
      sticky="top"
    >
      <Container>
        <Navbar.Brand as={Link} to="/home">
          <a href="https://imgbb.com/">
            <img
              src="https://i.ibb.co/KVHjSrD/download.png"
              alt="download"
              border="0"
            />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto  nav fs-5">
            <Nav.Link className="" as={Link} to="/home">
              Home
            </Nav.Link>

            <Nav.Link className="" as={Link} to="/about">
              About Us
            </Nav.Link>
            <Nav.Link className="" as={Link} to="/contact">
              Contact
            </Nav.Link>
            <Navbar.Text className="user-name me-3">
              <a href="#login">{user?.displayName}</a>
            </Navbar.Text>
            {user.email ? (
              <NavDropdown title="Dashboard" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/myorder">
                  My Booking
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/manageorders">
                  Manage All Booking
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/add">
                  Add New Package
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link
                className="text-white btn btn-warning rounded p-2"
                as={Link}
                to="/login#login"
              >
                Login
              </Nav.Link>
            )}
            {user.email ? (
              <button onClick={logOut} className="btn btn-warning">
                Logout
              </button>
            ) : (
              <span></span>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
