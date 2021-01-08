import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useAxiosGet } from "../../../Hooks/HttpRequest_Protected";
import keycloak from "../../../Keycloak";

function AddEventPage() {
  const [location, setLocation] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [submitMessage, setSubmitMessage] = useState(<div></div>);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const header =
      keycloak.token != null
        ? { Authorization: `Bearer ${keycloak.token}` }
        : "";
    var bodyFormData = new FormData();
    bodyFormData.append("Event.Location", location);
    bodyFormData.append("Event.Name", name);
    bodyFormData.append("Event.Date", date);
    axios({
      method: "post",
      url: "http://84.86.167.197:5010/events/",
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data", header },
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

  const url = "http://84.86.167.197:5010/events/location";
  let Location = useAxiosGet(url);

  const [dropDownValue, setdropDownValue] = useState("Loading");
  const [isLoading, setisLoading] = useState(true);

  let Locations = <option>loading</option>;
  if (Location.data) {
    if (isLoading == true) {
      setdropDownValue(Location.data[0].name);
      setisLoading(false);
    }
    Locations = Location.data.map((item) => <option>{item.name}</option>);
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
          <Form.Control
            as="select"
            onChange={(e: any) => setLocation(e.target.value)}
            required
          >
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
