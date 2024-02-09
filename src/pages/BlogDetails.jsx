import React from 'react'
import { useSelector } from 'react-redux'

const BlogDetails = () => {
    const currentBlog=useSelector((state)=>state.blogs.currentBlog)
  return (
    <div>BlogDetails</div>
  )
}

export default BlogDetails