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

      let date = new Date(user.joinDate).toLocaleDateString('pt-BR', {
        year: 'numeric',
      month: 'short',
      day: 'numeric'
    })

  return (
  <div className="space-y-10">
    {/* Card com Informações do Perfil */}
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm max-w-2xl">
      <h2 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-50 pb-3">Seu Perfil</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div>
          <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider">Nome</label>
          <h2 className="text-base font-medium text-gray-800 mt-1">{user.name}</h2>
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider">E-mail</label>
          <h2 className="text-base font-medium text-gray-800 mt-1">{user.email}</h2>
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider">Membro desde</label>
          <h2 className="text-base font-medium text-gray-800 mt-1">{date}</h2>
        </div>
      </div>
    </div>

    {/* Listagem de Posts do Usuário */}
    <div>
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-900">Suas Publicações</h3>
        <p className="text-sm text-gray-500 mt-0.5">Gerencie os artigos que você escreveu.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => {
          return <BlogCard key={post._id} post={post} />;
        })}
      </div>
    </div>
  </div>
);
};

export default Profile;
