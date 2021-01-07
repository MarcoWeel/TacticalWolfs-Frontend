import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAxiosGet } from "../../Hooks/HttpRequest_Protected";

function MembersPage() {
  let url = "http://localhost:5006/locations";
  let Member = useAxiosGet(url);
  let Members;

  //Members = Members.data.map((item) => <div>{item.name}</div>);
  return <div>Members</div>;
}

export default MembersPage;
