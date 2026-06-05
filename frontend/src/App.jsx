import './App.css'
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import About from './pages/About'
import Contact from './pages/Contact'
import CreatePost from './pages/CreatePost'
import Home from './pages/Home'
import Landing from './pages/Landing'
import Profile from './pages/Profile'
import ReadBlog from './pages/ReadBlog'
import Navbar from './components/Navbar'
import Layout from './components/Layout'
import { useEffect } from 'react'
import axios from 'axios'
import CreateUser from './components/CreateUser'
import ProtectedRoute from './components/ProtectedRoute' // Importando o nosso guarda-costas
import Login from './components/Login'

function App() {

  useEffect(() => {
    let token = sessionStorage.getItem("token")
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
    }
  }, [])

return (
  <Router>
    <Routes>
      {/* 1. Raiz redireciona direto para a Home */}
      <Route path="/" element={<Navigate to="/home" replace />} />
      
      {/* 2. A ROTA QUE ESTAVA FALTANDO! Cadastrando o caminho /login */}
      <Route path="/login" element={<Login />} /> 
      {/* Se o seu login na verdade for o componente <Landing />, mude para: element={<Landing />} */}

      {/* Todas as rotas abaixo utilizam a Navbar e a estrutura do Layout */}
      <Route element={<Layout />}>
        
        {/* Rotas Públicas */}
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />

        {/* Rotas de Usuários Logados (User e Admin) */}
        <Route element={<ProtectedRoute allowedRoles={['user', 'admin']} />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/readblog/:id" element={<ReadBlog />} />
        </Route>

        {/* Rotas Administrativas (Apenas Admin) */}
        <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/createuser" element={<CreateUser />} />
        </Route>

      </Route>
    </Routes>
  </Router>
);
}

export default App