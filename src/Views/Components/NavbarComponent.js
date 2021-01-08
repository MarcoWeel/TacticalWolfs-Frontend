import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import { withKeycloak } from "@react-keycloak/web";

const NavbarComponent = ({ keycloak, keycloakInitialized }) => {
  let isAdmin = false;
  let isMember = false;
  if (keycloak.hasRealmRole("ROLE_ADMIN")) {
    isAdmin = true;
  } else if (keycloak.hasRealmRole("ROLE_MEMBER")) {
    isMember = true;
  }
  return (
    <Navbar bg="dark" variant="dark" sticky="top">
      <Navbar.Brand href="/">TacticalWolves</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/posts">Posts</Nav.Link>
        <Nav.Link href="/events">Events</Nav.Link>
        <Nav.Link href="/members">Members</Nav.Link>
      </Nav>
      {isAdmin && (
        <Nav>
          <Nav.Link href="/admin">AdminControl</Nav.Link>
        </Nav>
      )}

      {isMember && (
        <Nav>
          <Nav.Link href="/member">Control</Nav.Link>
        </Nav>
      )}

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
