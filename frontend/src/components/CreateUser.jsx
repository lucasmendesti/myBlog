import React from 'react'
import { createUser } from '../api'
import { useState } from 'react'

const CreateUser = () => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    })

async function handleSubmit(e){
    e.preventDefault()
    let response = await createUser(user)
    if (response.status != 200){
        alert("User accounut could not be created!")
    }
}

function handleChange(e){
    setUser({ ...user, [e.target.name]: e.target.value })
}


  return (
    <div className='max-w-2xl mx-auto bg-white rounded-2xl p-8 border border-gray-100 shadow-sm'>
    <div className='mb-6'>
      <h1 className='text-2xl font-semibold text-gray-900'>Criar Novo Usuário</h1>
    </div>
    <form onSubmit={handleSubmit} className='mt-8 space-y-6'>
    {/*Campo Nome*/}
              <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nome
            </label>
            <input
              id="name"
              type="text"
              placeholder="Nome"
              onChange={handleChange}
              name="name"
              required
              maxLength={30}
              className="relative block w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all text-sm"
            />
          </div>
        
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
                {/* Botão de Submit */}
        <button
        type="submit"
        className="group relative flex w-full justify-center rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all active:scale-[0.98]"
      >
        Create Account
      </button>
    </form>
    </div>
  )
}

export default CreateUser