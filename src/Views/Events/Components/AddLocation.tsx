import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useAxiosGet } from "../../../Hooks/HttpRequest_Protected";
import keycloak from "../../../Keycloak";

function AddLocationsPage() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [imageName, setImageName] = useState("");
  const [submitMessage, setSubmitMessage] = useState(<div></div>);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const header =
      keycloak.token != null
        ? {
            Authorization: `Bearer ${keycloak.token}`,
            "Content-Type": "multipart/form-data",
          }
        : "";
    var bodyFormData = new FormData();
    bodyFormData.append("file", image);
    axios({
      method: "post",
      url: "http://84.86.167.197:5010/events/files",
      data: bodyFormData,
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
    const EventLocation = {
      name: name,
      fileLocation: imageName,
      DateTime: null,
    };
    var headers = {
      "Content-Type": "application/json",
    };
    axios({
      method: "post",
      url: "http://84.86.167.197:5010/events/location",
      data: EventLocation,
      headers: headers,
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

  const HandleChange = (event: any) => {
    if (event.target != undefined) {
      setImage(event.target.files[0]);
      var s = event.target.files[0].name;
      var filename = "http://84.86.167.197:9010/tacticalwolves/" + s;
      console.log(filename);
      setImageName(filename);
    }
  };

  return (
    <div>
      <Form onSubmit={(e: any) => handleSubmit(e)}>
        <Form.Group className="filearea" controlId="formBasicImage">
          <Form.File onChange={(e: any) => HandleChange(e)} />
        </Form.Group>
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

export default AddLocationsPage;
