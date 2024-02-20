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

export default function MediaCard({ item }) {
  const dispatch = useDispatch();
  const { _id, comment, userId, updatedAt } = item || {};
  const { firstName, lastName, username } = userId || {};
  const blogUserId = useSelector((state) => state.auth._id);
  const params = useParams();
  const { id } = params || {};

  const dateString = new Date(updatedAt).toLocaleDateString("tr-TR");
  const handleDeleteComment = () => {
    dispatch(deleteComment({ _id, blogId: id }));
    console.log(_id);
  };
//   const handleEditComment=()=>{
//     dispatch(putComment({_id,blogId: id, values}))
//   }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <Typography variant="h6">
        {firstName} {lastName}
      </Typography>

      <Typography sx={{ fontSize: "10px" }}>{dateString}</Typography>
      <Typography mt={3}>{comment}</Typography>

      <CardActions>
      {userId?._id === blogUserId && (
        <div>
            <Button size="small" onClick={handleDeleteComment}>
          Delete
        </Button> 
        {/* <Button size="small" onClick={handleEditComment}>
            Edit
        </Button> */}
        </div>
       )}
        
      </CardActions>
    </Card>
  );
}
