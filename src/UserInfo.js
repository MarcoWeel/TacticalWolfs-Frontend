import React, { Component } from "react";

class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      id: "",
      token: "",
    };
    console.log(this.props.keycloak.token);
    this.props.keycloak.loadUserInfo().then((userInfo) => {
      this.setState({
        name: userInfo.name,
        email: userInfo.email,
        id: userInfo.sub,
        token: this.props.keycloak.token,
      });
    });
  }

  render() {
    return (
      <div className="UserInfo">
        <p>Name: {this.state.name}</p>
        <p>Email: {this.state.email}</p>
        <p>ID: {this.state.id}</p>
        <p>ID: {this.state.token}</p>
      </div>
    );
  }
}
export default UserInfo;
