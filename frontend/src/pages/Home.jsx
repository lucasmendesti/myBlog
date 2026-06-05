import React, { useEffect, useState } from 'react'
import { getPosts } from '../api'
import BlogCard from '../components/BlogCard'

const Home = () => {

  const [posts, setPosts] = useState([])
  useEffect(()=>{
    async function loadAllPosts(){
      const data = await getPosts()
      data.sort((d1, d2) => new Date(d2.dateCreated).getTime() - new Date(d1.dateCreated).getTime())
      setPosts(data)
    }
  loadAllPosts()
  }, [])

  return (
    <div className='space-y-8'>

    {/*titulo da pagina*/}
    <div>
      <h1 className='text-3xl font-bold text-gray-900 tracking-tight'>Feed do Blog</h1>
      <p className='text-gray-500 text-sm mt-1'>Confira as últimas publicações</p>
    </div>
    {/*grid responsiva*/}
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
      {posts.map((post)=>{
        return (
          <BlogCard key={post._id} post={post}/>
        )
      })}
      </div>
    </div>
    
  )
}

export default Home