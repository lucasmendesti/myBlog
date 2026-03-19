import { useState, useEffect } from 'react'
import { getPosts, getPost, updatePost, deletePost, createPost } from '../api'
import './App.css'

function App() {

  const [posts, setPosts] = useState()


  function makePost(){
    let postObject = {
      title: "ZZZ",
      description: "XXX",
      content: "CCC",
      author: "VVV",
      dateCreated: new Date()
      }
      createPost(postObject)
  }

   /*useEffect(() => {
    async function loadAllPosts(){
      let data = await getPosts()
      if (data) {
        setPosts(data)
      }
    }
      
   
    loadAllPosts()
  }, [])
*/
  return (
    <>
      <button onClick={makePost}>
        Create Post
      </button>
    </>
  )
}

export default App
