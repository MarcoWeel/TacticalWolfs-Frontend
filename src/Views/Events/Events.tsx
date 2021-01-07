import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAxiosGet } from "../../Hooks/HttpRequest_Protected";

function EventsPage() {
  let url = "http://localhost:5006/locations";
  let Event = useAxiosGet(url);
  let Events;

  //Events = Events.data.map((item) => <div>{item.name}</div>);
  return <div>Events</div>;
}

export default EventsPage;
