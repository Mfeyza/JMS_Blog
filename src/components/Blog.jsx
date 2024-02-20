import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Box, Tooltip } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandsClapping } from "@fortawesome/free-solid-svg-icons";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import RemoveRedEyeTwoToneIcon from "@mui/icons-material/RemoveRedEyeTwoTone";
import BookmarkAddedOutlinedIcon from "@mui/icons-material/BookmarkAddedOutlined";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postLike } from "../thunks/blogsthunk";

export default function ImgMediaCard({ item, isProfile }) {
  const blogUserId = useSelector((state) => state.auth._id);
  console.log("blogUserId", blogUserId);

  const navigate = useNavigate();
  const handleClickBlog = () => {
    navigate(`/blogs/${item._id}`);
  };
  const dispatch = useDispatch();
  const handleLike = () => {
    dispatch(
      postLike({
        id: item._id,
        detail: false,
        blogUserId,
        isProfile
      })
    );
  };
  return (
    <Card
      sx={{
        display: { sm: "flex", xs: "block" },
        maxWidth: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: 140 }}
          image={item.image}
          alt="React Router Dom"
        />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            className="line-clamp"
          >
            {item.content}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="outlined"
            className="btnSeeDetails"
            onClick={handleClickBlog}
          >
            See Details
          </Button>
          <Tooltip title="like" arrow>
            <Button
              className="btn"
              size="small"
              onClick={handleLike}
              sx={{ display: "flex", gap: "0.3rem" }}
            >
              <FontAwesomeIcon icon={faHandsClapping} />{" "}
              {item.likes?.length !== 0 && item.likes?.length}
            </Button>
          </Tooltip>
          <Button
            className="btn"
            size="small"
            sx={{ display: "flex", gap: "0.3rem" }}
          >
            <RemoveRedEyeTwoToneIcon sx={{ width: "1rem" }} />
            {item.countOfVisitors !== 0 && item.countOfVisitors}
          </Button>
          <Tooltip title="save" arrow>
            <Button className="btn" size="small">
              <BookmarkAddedOutlinedIcon sx={{ width: "1rem" }} />
            </Button>
          </Tooltip>
          <Button className="btn" size="small">
            <FontAwesomeIcon icon={faComments} />
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
}
