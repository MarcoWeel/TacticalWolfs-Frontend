const KeycloakReducers = (state = null, action) => {
  switch (action.type) {
    case "SETKEYCLOAK":
      return (state = action.payload);
    default:
      return state;
  }
};
export default KeycloakReducers;
