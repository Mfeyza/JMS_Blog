import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { deleteComment, putComment } from "../thunks/commentthunk";
import { useParams } from "react-router-dom";
import { Avatar, Box, Stack } from "@mui/material";

export default function MediaCard({ item }) {
  const dispatch = useDispatch();
  const { _id, comment, userId, updatedAt } = item || {};
  const { firstName, lastName,image } = userId || {};
  const blogUserId = useSelector((state) => state.auth._id);
  const params = useParams();
  const { id } = params || {};

  const dateString = new Date(updatedAt).toLocaleDateString("tr-TR");
  const handleDeleteComment = () => {
    dispatch(deleteComment({ _id, blogId: id }));
   
  };

  return (
    <Card sx={{ maxWidth: 345,  mt:3 , marginLeft:2, border:"none"}}>
      <Box sx={{display:"flex",alignItems:"center",gap:1}}>
      <Avatar src={image}>
                    {!image && firstName
                      ? firstName.substring(0, 1)
                      : null}
                  </Avatar>
      <Typography  variant="h6">
        {firstName} {lastName}
      </Typography>
      </Box>
     

      <Typography mt={2} sx={{ fontSize: "10px" }}>{dateString}</Typography>
      <Typography  mt={3}>{comment}</Typography>

      <CardActions sx={{justifyContent:"flex-end"}}>
      {userId?._id === blogUserId && (
     
            <Button className="btn" size="small" onClick={handleDeleteComment}>
          Delete
        </Button> 
        
       
       )}
        
      </CardActions>
    </Card>
  );
}
