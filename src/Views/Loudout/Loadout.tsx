import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAxiosGet } from "../../Hooks/HttpRequest_Protected";
import { useParams } from "react-router-dom";

function LoadoutPage() {
  const { id } = useParams();
  let url = "http://84.86.167.197:5012/loadout/" + id;
  let Loadout = useAxiosGet(url);
  let url2 = "http://84.86.167.197:8083/user/" + id;
  let MemberData = useAxiosGet(url2);

  let Loadouts;
  if (Loadout.data) {
    if (Loadout.data.length > 0) {
      Loadouts = Loadout.data.map((item) => (
        <div>
          {item.name}
          {item.location}
          <img src={item.fileURL}></img>
        </div>
      ));
    } else {
      Loadouts = <div>No loadouts found</div>;
    }
  }
  let Member;
  if (MemberData.data) {
    Member = (
      <div>
        <div>
          {MemberData.data.firstName} {MemberData.data.lastName}
        </div>
        <div>{MemberData.data.username}</div>
      </div>
    );
  }
  return (
    <div>
      <div>{Member}</div>
      <div>Loadouts</div>
      <div>{Loadouts}</div>
    </div>
  );
}

export default LoadoutPage;
