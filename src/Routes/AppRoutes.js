import { useKeycloak } from "@react-keycloak/web";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { PrivateRoute } from "../Utilities/PrivateRoute";
import PostsPage from "../Views/Posts/Posts";
import NavbarComponent from "../Views/Components/NavbarComponent";
import Eventspage from "../Views/Events/Events";
import AddEventPage from "../Views/Events/Components/AddEvent";
import AddLocationsPage from "../Views/Events/Components/AddLocation";
import CreatePostsPage from "../Views/Posts/Components/CreatePosts";
import AdminPage from "../Views/Admin/Admin";
import MemberPage from "../Views/Admin/Member/Components/Member";
import DashboardPage from "../Views/Components/Dashboard";
import AddLoadoutPage from "../Views/Loudout/Components/CreateLoadout";
import MembersPage from "../Views/Loudout/Members";
import LoadoutPage from "../Views/Loudout/Loadout";

export const AppRouter = () => {
  const { initialized } = useKeycloak();
  if (!initialized) {
    return <h3>Loading ...</h3>;
  }
  return (
    <>
      <NavbarComponent />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={DashboardPage} />
          <Route exact path="/events" component={Eventspage} />
          <Route exact path="/posts" component={PostsPage} />
          <Route exact path="/members" component={MembersPage} />
          <Route exact path="/loadout/:id" component={LoadoutPage} />
          <PrivateRoute
            roles={["ROLE_ADMIN", "ROLE_MEMBER"]}
            path="/event/create"
            component={AddEventPage}
          />
          <PrivateRoute
            roles={["ROLE_ADMIN", "ROLE_MEMBER"]}
            path="/event/location/create"
            component={AddLocationsPage}
          />
          <PrivateRoute
            roles={["ROLE_ADMIN", "ROLE_MEMBER"]}
            path="/loadout/create/form"
            component={AddLoadoutPage}
          />
          <PrivateRoute
            roles={["ROLE_ADMIN", "ROLE_MEMBER"]}
            path="/posts/create"
            component={CreatePostsPage}
          />
          <PrivateRoute
            roles={["ROLE_ADMIN"]}
            path="/admin"
            component={AdminPage}
          />
          <PrivateRoute
            roles={["ROLE_MEMBER"]}
            path="/member"
            component={MemberPage}
          />
        </Switch>
      </BrowserRouter>
    </>
  );
};
