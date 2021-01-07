import { useKeycloak } from "@react-keycloak/web";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Menu from "../Views/Components/Menu";
import { PrivateRoute } from "../Utilities/PrivateRoute";
import PostsPage from "../Views/Posts/Posts";
import DashboardEvents from "../Views/Events/Components/DashboardEvents";
import NavbarComponent from "../Views/Components/NavbarComponent";
import Eventspage from "../Views/Events/Events";
import AddEventPage from "../Views/Events/Components/AddEvent";
import AddLocationsPage from "../Views/Events/Components/AddLocation";

export const AppRouter = () => {
  const { initialized } = useKeycloak();
  if (!initialized) {
    return <h3>Loading ... !!!</h3>;
  }
  return (
    <>
      <NavbarComponent />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={DashboardEvents} />
          <Route exact path="/events" component={Eventspage} />
          <PrivateRoute
            roles={["ROLE_ADMIN", "ROLE_USER"]}
            path="/protected"
            component={PostsPage}
          />
          <PrivateRoute
            roles={["ROLE_ADMIN"]}
            path="/event/create"
            component={AddEventPage}
          />
          <PrivateRoute
            roles={["ROLE_ADMIN"]}
            path="/event/location"
            component={AddLocationsPage}
          />
        </Switch>
      </BrowserRouter>
    </>
  );
};
