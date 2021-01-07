import { combineReducers } from "redux";
import KeycloakReducer from "./KeycloakReducer";

const allReducers = combineReducers({
  keycloak: KeycloakReducer,
});

export default allReducers;
