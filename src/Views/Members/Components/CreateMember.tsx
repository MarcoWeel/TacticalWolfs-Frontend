import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

//aanpassen
function CreateUserPage() {
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [submitMessage, setSubmitMessage] = useState(<div></div>);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    var bodyFormData = new FormData();
    bodyFormData.append("Event.Description", description);
    bodyFormData.append("Event.Name", name);
    axios({
      method: "post",
      url: "http://localhost:5006/posts/",
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
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
  return (
    <div>
      <Form onSubmit={(e: any) => handleSubmit(e)}>
        <Form.Label>Image</Form.Label>
        <Form.Group controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter name"
            onChange={(e: any) => setName(e.target.value)}
            className="textarea"
            required
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="formBasicDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter description"
            onChange={(e: any) => setDescription(e.target.value)}
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

export default CreateUserPage;
