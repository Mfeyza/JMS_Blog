import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Box } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandsClapping } from '@fortawesome/free-solid-svg-icons'; 
import { faComments } from '@fortawesome/free-solid-svg-icons'; 
import RemoveRedEyeTwoToneIcon from '@mui/icons-material/RemoveRedEyeTwoTone';
import BookmarkAddedOutlinedIcon from '@mui/icons-material/BookmarkAddedOutlined';
import { Navigate, useNavigate } from 'react-router-dom';

export default function ImgMediaCard({item}) {
  console.log("item", item)
  const navigate=useNavigate()
  const handleClickBlog=()=>{
   
    navigate(`/blogs/${item._id}`)

  }
  return (
    <Card sx={{ display: {sm:'flex',xs:"block"}, maxWidth: "100%",cursor:"pointer" }} onClick={handleClickBlog} >
    <Box sx={{ display: 'flex', flexDirection: 'column',justifyContent:"center" }}>
      <CardMedia
        component="img"
        sx={{ width: 140 }}
        image={item.image}
        alt="React Router Dom"
      />
    </Box>
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <CardContent sx={{ flex: '1 0 auto' }}>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" className="line-clamp">
          {item.content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button className='btn' size="small"><FontAwesomeIcon icon={faHandsClapping} /> </Button>
        <Button className='btn' size="small"><RemoveRedEyeTwoToneIcon sx={{width:"1rem"}}/></Button>
        <Button className='btn' size="small"><BookmarkAddedOutlinedIcon sx={{width:"1rem"}}/></Button> 
        <Button className='btn' size="small"><FontAwesomeIcon icon={faComments} /></Button> 
      </CardActions>
    </Box>
  </Card>
  );
}
