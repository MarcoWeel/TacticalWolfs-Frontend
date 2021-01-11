import React, { useState } from "react";
import { useAxiosGet } from "../../../Hooks/HttpRequest";
import "../Posts.css";

function DashboardPostsPage() {
  let url = "http://84.86.167.197:5016/posts";
  let Post = useAxiosGet(url);
  let PostOne = <div>No posts</div>;
  let PostTwo;
  if (Post.data) {
    if (Post.data.length > 0) {
      let sortedPosts = Post.data.reverse();
      PostOne = (
        <div>
          {sortedPosts[0].title}
          {sortedPosts[0].description}
          <img src={sortedPosts[0].fileURL}></img>
        </div>
      );
      if (Post.data.length >= 2) {
        PostTwo = (
          <div>
            {sortedPosts[1].title}
            {sortedPosts[1].location}
            <img src={sortedPosts[1].fileURL}></img>
          </div>
        );
      } else {
        PostTwo = null;
      }
    }
  }
  return (
    <div className="col-4">
      <div>Posts</div>
      <div>{PostOne}</div>
      <div>{PostTwo}</div>
    </div>
  );
}

export default DashboardPostsPage;
