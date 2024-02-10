import { Container, Stack, TextField } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

const BlogDetails = () => {
    const currentBlog=useSelector((state)=>state.blogs.currentBlog)
  return (
    <Stack sx={{minHeight:"100vh"}}>
      <Container sx={{display:"flex",justifyContent:"center" }}>
      
      <Stack >
        <TextField
          id="filled-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
         
        />
        <TextField
          id="filled-multiline-static"
          label="Multiline"
          multiline
          rows={15}
          cols={10}
         
          
        />
      </Stack>
        
      </Container>
    </Stack>
  )
}

export default BlogDetails