import "./App.css";
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
