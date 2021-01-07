// import React from "react";
// import logo from "./logo.svg";
import "./App.css";
// import PostsPage from "./Views/Posts/Posts";
// import MembersPage from "./Views/Members/Member";
// import EventsPage from "./Views/Events/Events";
// import DashboardEvents from "./Views/Events/Components/DashboardEvents";
// import DashboardPosts from "./Views/Posts/Components/DashboardPosts";
// import NavbarComponent from "./Views/Components/NavbarComponent";
// import { BrowserRouter, Route, Link } from "react-router-dom";
// import Secured from "./Secured";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./Keycloak";
import { AppRouter } from "./Routes/AppRoutes";

function App() {
  return (
    <ReactKeycloakProvider authClient={keycloak}>
      <div className="App">
        <AppRouter />
      </div>
    </ReactKeycloakProvider>
  );
}

export default App;
