import Keycloak from "keycloak-js";

// Setup Keycloak instance as needed
// Pass initialization options as required or leave blank to load from 'keycloak.json'
const keycloak = Keycloak({
  url: "https://84.86.167.197:8082/auth",
  realm: "TacticalWolves",
  clientId: "TacticalWolves-App",
});

export default keycloak;
