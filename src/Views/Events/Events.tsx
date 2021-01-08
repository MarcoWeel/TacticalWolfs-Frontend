import React, { useState } from "react";
import { useAxiosGet } from "../../Hooks/HttpRequest_Protected";

function EventsPage() {
  const url = "http://84.86.167.197:5014/events/";
  let EventsData = useAxiosGet(url);

  let Events = <option>loading</option>;
  if (EventsData.data) {
    if (EventsData.data.length > 0) {
      console.log(EventsData.data);
      Events = EventsData.data.map((item) => (
        <div>
          <div>{item.name}</div>
          <div>{item.dateTime.split("T")[0]}</div>
          <div>{item.location}</div>
          <img src={item.locationUrl}></img>
        </div>
      ));
    }
  }

  return <div>{Events}</div>;
}

export default EventsPage;
