import React, { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import keycloak from "../../../Keycloak";

function CreatePostPage() {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState();
  const [URL, setURL] = useState("");
  const [submitMessage, setSubmitMessage] = useState(<div></div>);

  const header1 =
    keycloak.token != null
      ? {
          Authorization: `Bearer ${keycloak.token}`,
          "Content-Type": "multipart/form-data",
        }
      : "";
  const header2 =
    keycloak.token != null
      ? {
          Authorization: `Bearer ${keycloak.token}`,
          "Content-Type": "application/json",
        }
      : "";

  const HandleChange = (event: any) => {
    if (event.target != undefined) {
      setImage(event.target.files[0]);
      var s = event.target.files[0].name;
      var filename = "http://84.86.167.197:9010/tacticalwolves/" + s;
      console.log(filename);
      setURL(filename);
    }
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    var bodyFormData = new FormData();
    bodyFormData.append("file", image);
    axios({
      method: "post",
      url: "http://84.86.167.197:5016/posts/files",
      data: bodyFormData,
      headers: header1,
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

    const Post = {
      title: title,
      fileURL: URL,
      description: description,
    };

    axios({
      method: "post",
      url: "http://84.86.167.197:5016/posts",
      data: Post,
      headers: header2,
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
        <Form.Group className="filearea" controlId="formBasicImage">
          <Form.File onChange={(e: any) => HandleChange(e)} />
        </Form.Group>
        <Form.Group controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="title"
            placeholder="Enter title"
            onChange={(e: any) => setTitle(e.target.value)}
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

export default CreatePostPage;
