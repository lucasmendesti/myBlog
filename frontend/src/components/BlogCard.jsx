import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = ({post}) => {

    let date = new Date(post.dateCreated).toLocaleDateString('pt-BR', {
        year: 'numeric',
      month: 'short',
      day: 'numeric'
    })

  return (
    <Link to={`/readblog/${post._id}`}>
        <h1>{post.title}</h1>
        <h2>{post.description}</h2>
        <h3>{date}</h3>
    </Link>
  )
}

export default BlogCard