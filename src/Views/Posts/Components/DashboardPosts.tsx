import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAxiosGet } from "../../../Hooks/HttpRequest_Protected";
import "../Posts.css";

function DashboardPostsPage() {
  let url = "http://84.86.167.197:5010/posts";
  let Post = useAxiosGet(url);
  let PostOne = <div>No Events</div>;
  let PostTwo;

  if (Post.data) {
    PostOne = (
      <div>
        {Post.data[0].name}
        {Post.data[0].location}
        <img src={Post.data[0].locationUrl}></img>
      </div>
    );
    if (Post.data.length >= 2) {
      PostTwo = (
        <div>
          {Post.data[1].name}
          {Post.data[1].location}
          <img src={Post.data[1].locationUrl}></img>
        </div>
      );
    } else {
      PostTwo = null;
    }
  }

  return (
    <div className="box">
      <div>tekst</div>
      <div>{PostOne}</div>
      <div>{PostTwo}</div>
    </div>
  );
}

export default DashboardPostsPage;
