import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { pageData } from './PageData'

const Navbar = () => {
    const navigate = useNavigate()
    const userRole = sessionStorage.getItem("userRole") || "guest";
    function handleLogout(){
        sessionStorage.removeItem("token")
        sessionStorage.removeItem("userRole"); // Limpa o cargo ao sair
        navigate("/")
    }

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
    <div className='max-w-5xl mx-auto px-4 h-16 flex items-center justify-between'>
    <div className='flex items-center gap-8'>
    <span className='font-bold text-xl text-indigo-600 tracking-tight'>
      🚀 myblog
    </span>

      <div className="flex gap-5">
        {pageData
              // FILTRO: Só deixa passar os links que aceitam o 'userRole' atual
              .filter((page) => page.role.includes(userRole))
              .map((page) => (
          <Link key={page.path} to={page.path}
          className='text-sm font-medium text-gray-600 hover:text-indigo-600 transiction-colors'
          >
            {page.name}
          </Link>
        ))}
      </div>
      </div>

      <button onClick={handleLogout}
      className='text-sm font-medium text-red-500 hover:text-red-700 bg-red-50 hover:bg-red-100 px-4 py-2 rounded-xl transiction-all active:scale-95'
      >
        Logout
      </button>
</div>
    </nav>
  )
}

export default Navbar