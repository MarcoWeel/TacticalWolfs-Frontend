import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useAxiosGet } from "../../../Hooks/HttpRequest";
import keycloak from "../../../Keycloak";

function AddEventPage() {
  const [location, setLocation] = useState("");
  const [locationURL, setLocationURL] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [submitMessage, setSubmitMessage] = useState(<div></div>);

  const handleOnChange = (event: any) => {
    setLocation(event.target.options[event.selectedIndex].text);
    setLocationURL(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const header =
      keycloak.token != null
        ? {
            Authorization: `Bearer ${keycloak.token}`,
            "Content-Type": "application/json",
          }
        : "";
    const Event = {
      location: location,
      locationUrl: locationURL,
      name: name,
      dateTime: date,
    };
    console.log(Event);
    axios({
      method: "post",
      url: "http://84.86.167.197:5014/events/",
      data: Event,
      headers: header,
    })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setSubmitMessage(<div className="succes">Succes</div>);
      })
      .catch((error) => {
        console.log(error.response);
        console.log(error);
        setSubmitMessage(
          <div className="unsuccesfull">Unsuccesfull try again later</div>
        );
      });
  };

  const url = "http://84.86.167.197:5014/events/location";
  let Location = useAxiosGet(url);

  let Locations = <option>loading</option>;
  if (Location.data) {
    if (Location.data.length > 0) {
      Locations = Location.data.map((item) => (
        <option value={item.fileLocation}>{item.name}</option>
      ));
    }
  }

  if (Location.data) {
    if (Location.data.length > 0) {
      if (location == "") {
        setLocation(Location.data[0].name);
        setLocationURL(Location.data[0].fileLocation);
      }
    }
  }

  return (
    <div>
      <Form onSubmit={(e: any) => handleSubmit(e)}>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter Name"
            onChange={(e: any) => setName(e.target.value)}
            className="textarea"
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="FormBasicLocation">
          <Form.Label>Location</Form.Label>
          <Form.Control as="select" onChange={handleOnChange} required>
            {Locations}
          </Form.Control>
        </Form.Group>
        <a href="/event/location/create">Add new location </a>
        <Form.Group controlId="formBasicDate">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter description"
            onChange={(e: any) => setDate(e.target.value)}
            className="textarea"
            required
          ></Form.Control>
        </Form.Group>
        <div className="form-group">
          <Button type="submit" className="btn btnpos">
            Save
          </Button>
          {submitMessage}
        </div>
      </Form>
    </div>
  );
}

export default AddEventPage;
