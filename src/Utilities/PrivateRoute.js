import { useKeycloak } from "@react-keycloak/web";
import React from "react";
import { Redirect, Route } from "react-router-dom";

export function PrivateRoute({ component: Component, roles, ...rest }) {
  const { keycloak } = useKeycloak();

  const isAuthorized = (roles) => {
    let HasRole = false;
    roles.forEach((r) => {
      if (keycloak.hasRealmRole(r)) {
        HasRole = true;
        return;
      }
    });
    return HasRole;
  };

  return (
    <Route
      {...rest}
      render={(props) => {
        return isAuthorized(roles) ? <Component {...props} /> : Redirect("/");
      }}
    />
  );
}
