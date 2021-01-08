import React, { useState } from "react";
import { useAxiosGet } from "../../Hooks/HttpRequest_Protected";

function PostsPage() {
  const url = "http://84.86.167.197:5016/posts";
  let PostData = useAxiosGet(url);

  let Post = <option>loading</option>;
  if (PostData.data) {
    if (PostData.data.length > 0) {
      console.log(PostData.data);
      Post = PostData.data.map((item) => (
        <div>
          <div>{item.title}</div>
          <div>{item.description}</div>
          <img src={item.fileURL}></img>
        </div>
      ));
    }
  }

  return <div>{Post}</div>;
}

export default PostsPage;
