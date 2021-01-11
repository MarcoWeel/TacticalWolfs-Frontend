import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAxiosGet } from "../../../Hooks/HttpRequest_Protected";

function DashboardLoadoutsPage() {
  let url = "http://84.86.167.197:5012/loadout";
  let Loadout = useAxiosGet(url);
  let LoadoutOne = <div>No loadouts</div>;
  let LoadoutTwo;

  if (Loadout.data) {
    if (Loadout.data.length > 0) {
      let sortedLoadouts = Loadout.data.sort((a, b) => b.dateTime - a.dateTime);
      LoadoutOne = (
        <div>
          {sortedLoadouts[0].name}
          {sortedLoadouts[0].location}
          <img src={sortedLoadouts[0].fileURL}></img>
        </div>
      );
      if (Loadout.data.length >= 2) {
        LoadoutTwo = (
          <div>
            {sortedLoadouts[1].name}
            {sortedLoadouts[1].location}
            <img src={sortedLoadouts[1].fileURL}></img>
          </div>
        );
      } else {
        LoadoutTwo = null;
      }
    }
  }
  return (
    <div className="col-4">
      <div>Loadouts</div>
      <div>{LoadoutOne}</div>
      <div>{LoadoutTwo}</div>
    </div>
  );
}

export default DashboardLoadoutsPage;
