import React, { useEffect } from 'react'
import { UseSelector, useDispatch, useSelector } from 'react-redux'
import {getBlogs} from "../thunks/blogsthunk"
import Blog from "../components/Blog"
const Blogs = () => {
  const blog=useSelector((state)=>state.blogs)
  const dispatch=useDispatch()

  useEffect(() => {
    dispatch(getBlogs())
  }, [dispatch])
  
  console.log(blog)
  return (
    <div>
      {blog?.blogs?.map((item)=>{
        return <Blog item={item}/>
        
      })} 
    </div>
  )
}

export default Blogs