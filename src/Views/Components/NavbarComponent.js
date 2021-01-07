import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import { withKeycloak } from "@react-keycloak/web";

const NavbarComponent = ({ keycloak, keycloakInitialized }) => {
  return (
    <Navbar bg="dark" variant="dark" sticky="top">
      <Navbar.Brand href="/">TacticalWolves</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Posts</Nav.Link>
        <Nav.Link href="/protected">Events</Nav.Link>
        <Nav.Link href="/event/create">Members</Nav.Link>
      </Nav>
      {keycloak && !keycloak.authenticated && (
        <Nav>
          <Nav.Link onClick={() => keycloak.login()}>Login</Nav.Link>
        </Nav>
      )}
      {keycloak && keycloak.authenticated && (
        <Nav>
          <Nav.Link onClick={() => keycloak.logout()}>
            Logout ({keycloak.tokenParsed.preferred_username})
          </Nav.Link>
        </Nav>
      )}
    </Navbar>
  );
};
export default withKeycloak(NavbarComponent);
