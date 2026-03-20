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
    <form onSubmit={handlesubmit}>
    <input onChange={(e) => setTitle(e.target.value)} required maxLength={100} name='title' placeholder='Title'/>
    <input onChange={(e) => setDescription(e.target.value)} required maxLength={200} name='description' placeholder='Description'/>
    <textarea onChange={(e) => setContent(e.target.value)} required maxLength={5000} name='content' placeholder='Content..'/>
    <button type='submit'>Submit</button>
    </form>
  )
}

export default CreateBlog