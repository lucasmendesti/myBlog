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
    <article className="max-w-3xl mx-auto bg-white rounded-2xl p-8 md:p-12 border border-gray-100 shadow-sm">
    <header className="border-b border-gray-100 pb-6 mb-8">
    <time className="text-xs font-semibold text-indigo-600 uppercase tracking-wider block mb-2">
      {post.dateCreated}
    </time>
      <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 mb-4">{post.title}</h1>
      <h2 className="text-lg text-gray-500 font-normal leading-relaxed">{post.description}</h2>
    </header>
    {/*corpo do texto*/}

      <p className="text-gray-700 leading-amber-relaxed whitespace-pre-line text-base md:text-lg">{post.content}</p>
    </article>
  );
};

export default ReadBlog;
