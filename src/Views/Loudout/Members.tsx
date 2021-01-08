import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAxiosGet } from "../../Hooks/HttpRequest";
import keycloak from "../../Keycloak";

function MembersPage() {
  let url = "http://84.86.167.197:8083/user/role/ROLE_MEMBER";
  let Member = useAxiosGet(url);
  let Members = <div></div>;
  if (Member.data) {
    console.log(Member);
    if (Member.data) {
      Members = Member.data.map((item) => (
        <li>
          <a>{item.username}</a>
          <a href={"/loadout/" + item.id}>View Loadout</a>
        </li>
      ));
    }
  }
  //Members = Members.data.map((item) => <div>{item.name}</div>);
  return <div>{Members}</div>;
}

export default MembersPage;
