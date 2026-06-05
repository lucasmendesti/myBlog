import React from "react";
import { verifyUser } from "../api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    let response = await verifyUser(user);
    if (response) {    
      //console.log("O que o backend respondeu:", response);
      sessionStorage.setItem("token", response.token)
      sessionStorage.setItem("userRole", response.role)
      //sessionStorage.setItem("userRole", response.data.user.role);
      axios.defaults.headers.common["Authorization"] = `Bearer ${response}`
      navigate("/home");
    } else {
      alert("Login failed");
    }
  }

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  return (
  <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
    <div className="w-full max-w-md space-y-8 p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
      
      {/* Cabeçalho do Formulário */}
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">
          Bem-vindo de volta
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          Faça login para acessar sua conta
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div className="space-y-4 rounded-md">
          
          {/* Campo de Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              placeholder="seu@email.com"
              onChange={handleChange}
              name="email"
              required
              maxLength={40}
              className="relative block w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all text-sm"
            />
          </div>

          {/* Campo de Senha */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Senha
            </label>
            <input
              id="password"
              placeholder="••••••••"
              type="password"
              onChange={handleChange}
              name="password"
              required
              maxLength={20}
              className="relative block w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all text-sm"
            />
          </div>
        </div>

        {/* Botão de Submit */}
        <button
        type="submit"
        className="group relative flex w-full justify-center rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all active:scale-[0.98]"
      >
        Entrar
      </button>

      </form>
    </div>
  </div>
);
};

export default Login;
