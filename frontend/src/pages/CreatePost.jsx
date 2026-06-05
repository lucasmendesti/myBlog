import React, { useState } from 'react'
import { createPost } from '../api'

const CreateBlog = () => {

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [content, setContent] = useState("")

  async function handlesubmit(){
    let submitObject = {
      title: title,
      description: description,
      content: content,
      author: null,
      dateCreated: new Date()
    }
    await createPost(submitObject)
  }
  

  return (
    <div className='max-w-2xl mx-auto bg-white rounded-2xl p-8 border border-gray-100 shadow-sm'>
    <div className='mb-6'>
      <h1 className='text-2xl font-semibold text-gray-900'>Criar Nova Publicação</h1>
      <p className='text-sm text-gray-500 mt-1'>Escreva o título, resumo e o conteúdo completo do seu post.</p>
    </div>
    <form onSubmit={handlesubmit} className='space-y-5'>
    {/*input do titulo*/}
    <div>
    <label className='block text-sm font-medium text-gray-700 mb-1'>Título</label>
    <input onChange={(e) => setTitle(e.target.value)} required maxLength={100} name='title' placeholder='Um título chamativo para o seu post'
      className='w-full rounded-xl border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all text-sm'
    />
    </div>
    {/*input descrição*/}
    <div>
    <label className='block text-sm font-medium text-gray-700 mb-1'>Descrição</label>
    <input onChange={(e) => setDescription(e.target.value)} required maxLength={200} name='description' placeholder='Um breve resumo que aparecerá no card da página inicial'
      className='w-full rounded-xl border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all text-sm'
    />
    </div>
    {/*textarea de conteudo*/}
    <div>
    <label className='block text-sm font-medium text-gray-700 mb-1'>Conteúdo</label>
    <textarea onChange={(e) => setContent(e.target.value)} required maxLength={5000} rows={8} name='content' placeholder='Comece a escrever a sua história aqui...'
      className='w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholde-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transiction-all text-sm resize-y'
    />
    </div>
    {/*botao enviar*/}
    <div className='flex justify-end pt-2'>
    <button className="rounded-xl bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500 shadow-sm transition-all active:scale-95" type='submit'>Publicar Post</button>
    </div>
    </form>
    </div>
  )
}

export default CreateBlog