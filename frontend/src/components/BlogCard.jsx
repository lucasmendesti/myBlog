import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = ({post}) => {

    let date = new Date(post.dateCreated).toLocaleDateString('pt-BR', {
        year: 'numeric',
      month: 'short',
      day: 'numeric'
    })

  return (

    <Link to={`/readblog/${post._id}`}
    className='group flex flex-col justify-between p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:translate-y-1 transiction-all duration-200'
    >
      <div>
        {/*date*/}
        <span className='text-xs text-gray-400 font-medium block mb-2'>{date}</span>
        {/*title*/}
        <h1 className='text-xl font-bold text-gray-900 group-hover:text-indigo-600 transiction-colors line-clamp-2'>{post.title}</h1>
        {/*Description*/}
        <h2 className='mt-2 text-sm leading-relaxed text-gray-600 line-clamp-3'>{post.description}</h2>
      </div>

      {/*Link ler mais..*/}
      <div className='mt-4 pt-4 border-t border-gray-50 flex items-center justify-between text-xs font-semibold text-indigo-600'>
        <span>Ler artigo completo</span>
        <span className='transform group-hover:translate-x-1 transiction-transform'>→</span>
      </div>
    </Link>
    
  )
}

export default BlogCard