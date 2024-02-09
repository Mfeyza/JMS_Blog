import React, { useEffect, useRef } from 'react'
import { UseSelector, useDispatch, useSelector } from 'react-redux'
import {getBlogs} from "../thunks/blogsthunk"
import Blog from "../components/Blog"
import { Grid, Stack } from '@mui/material'
import Categories from '../components/Categories'
import { getCategories } from '../thunks/categoriesthunk'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {  Typography, IconButton, Box , Container} from '@mui/material';
const Blogs = () => {

  const blog=useSelector((state)=>state.blogs)
  const dispatch=useDispatch()

  
  const {categories}=useSelector((state)=>state.categories)
  useEffect(()=>{
      dispatch(getCategories())
      dispatch(getBlogs())
  },[dispatch])
  console.log({categories})
  console.log("xxx")
  
  console.log(blog)

  const scrollRef = useRef(null);
  
  const handleScroll = (direction) => {
    const { current: container } = scrollRef;
    const containerWidth = container.clientWidth;
    const scrollAmount = direction === 'left' ? -containerWidth : containerWidth;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };
  return (
    <Grid container spacing={2}>
   <Grid item xs={0} md={3}>
 <Typography>1.div</Typography>

   </Grid>


   <Grid item xs={12} md={9}>
    <Stack flexDirection={'column'} flexWrap={'wrap'} width={"100%"}>
      <Stack flexDirection={"row"} gap={4} width={"100%"} justifyContent={"center"}>
      <Box  sx={{ display: 'flex',justifyContent:"center", alignItems: 'center', width:"500px", maxWidth:"90%"}}>
        <IconButton className='btn' onClick={() => handleScroll('left')} aria-label="scroll left">
          <ArrowBackIosNewIcon sx={{width:"1rem"}} />
        </IconButton>
        <Box
          ref={scrollRef}
          sx={{
            overflowX: 'auto',
            display: 'flex',
            flexWrap: 'nowrap',
            width: '100%',
            '&::-webkit-scrollbar': { display: 'none' },
          }}
        >
         
            <Box  sx={{ display:"flex", p: 2 ,gap:"5rem", alignItems:"center"  }}>
     
      {categories?.map((category)=>{
        return <Categories category={category}/>
      })
         
      
      }
        </Box>
         
         </Box>
         <IconButton className='btn' onClick={() => handleScroll('right')} aria-label="scroll right">
           <ArrowForwardIosIcon sx={{width:"1rem"}}/>
         </IconButton>
       </Box>

      
      
      </Stack>
      <Stack width={"100%"}>
        <Container>
      {blog?.blogs?.map((item)=>{
        return <Blog item={item}/>
        
      })} 
      </Container>
      </Stack>
      
    </Stack>
    </Grid>
    
    </Grid>
  )
}

export default Blogs