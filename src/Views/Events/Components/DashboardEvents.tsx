import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAxiosGet } from "../../../Hooks/HttpRequest_Protected";
import "../Events.css";

function EventsPage() {
  let url = "http://localhost:5014/events";
  let Event = useAxiosGet(url);
  let EventOne = <div>No Events</div>;
  let EventTwo;

  if (Event.data) {
    let sortedEvents = Event.data.sort((a, b) => b.dateTime - a.dateTime);
    console.log(sortedEvents);
    EventOne = (
      <div>
        {Event.data[0].name}
        {Event.data[0].location}
        <img src={Event.data[0].locationUrl}></img>
        {console.log(Event.data[0].locationUrl)}
      </div>
    );
    if (Event.data.length >= 2) {
      EventTwo = (
        <div>
          {Event.data[1].name}
          {Event.data[1].location}
          {/* {Event.data[1].URL} */}
        </div>
      );
    } else {
      EventTwo = null;
    }
  }

  return (
    <div>
      <div>tekst</div>
      <div>{EventOne}</div>
      <div>{EventTwo}</div>
    </div>
  );
}

export default EventsPage;
