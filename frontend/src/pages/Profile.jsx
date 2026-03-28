import React from "react";
import BlogCard from "../components/BlogCard";
import { useState, useEffect } from "react";
import * as jwt_decode from "jwt-decode";
import { getPosts } from "../api";

const Profile = () => {
  const [user, setUser] = useState({});
  const [posts, setPost] = useState([]);

  useEffect(() => {
    async function loadUserData() {
      const token = sessionStorage.getItem("token");
      const decodedUser = jwt_decode.jwtDecode(token);
      const allPosts = await getPosts();
      const filteredPosts = allPosts.filter((post) => post.author == decodedUser._id)      
      setPost(filteredPosts);
      setUser(decodedUser);
    }
    loadUserData();
  }, []);

  return (
    <div>
      <lavel>Name:</lavel>
      <h2>{user.name}</h2>
      <lavel>Email:</lavel>
      <h2>{user.email}</h2>
      <lavel>Join Date:</lavel>
      <h2>{user.joinDate}</h2>
      {posts.map((post) => {
        return <BlogCard post={post} />;
      })}
    </div>
  );
};

export default Profile;
