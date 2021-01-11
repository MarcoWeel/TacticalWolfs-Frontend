import React, { useState } from "react";
import { useAxiosGet } from "../../../Hooks/HttpRequest";
import "../Events.css";

function DashboardEventsPage() {
  let url = "http://84.86.167.197:5014/events/";
  let Event = useAxiosGet(url);
  let EventOne = <div>No Events</div>;
  let EventTwo;

  if (Event.data) {
    if (Event.data.length > 0) {
      let sortedEvents = Event.data.sort((a, b) => b.dateTime - a.dateTime);
      EventOne = (
        <div>
          {sortedEvents[0].name} <br />
          {sortedEvents[0].location} <br />
          <img className="Image" src={sortedEvents[0].locationUrl}></img>
        </div>
      );
      if (Event.data.length >= 2) {
        EventTwo = (
          <div>
            {sortedEvents[1].name} <br />
            {sortedEvents[1].location} <br />
            <img className="Image" src={sortedEvents[1].locationUrl}></img>
          </div>
        );
      } else {
        EventTwo = null;
      }
    }
  }
  return (
    <div className="col-4">
      <div>Events</div>
      <div>{EventOne}</div>
      <div>{EventTwo}</div>
    </div>
  );
}

export default DashboardEventsPage;
