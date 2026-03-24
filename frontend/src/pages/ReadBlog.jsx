import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../api";

const ReadBlog = () => {
  const [post, setPost] = useState({});

  let params = useParams();
  let id = params.id;

  useEffect(() => {
    async function loadPost() {
      let data = await getPost(id);
      let date = new Date(data.dateCreated).toLocaleDateString("pt-BR", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
      setPost({
        ...data,
        dateCreated: date,
      });
    }
    loadPost();
  }, []);

  return (
    <div>
      <h1>{post.title}</h1>
      <h2>{post.description}</h2>
      <h3>{post.dateCreated}</h3>
      <p>{post.content}</p>
    </div>
  );
};

export default ReadBlog;
