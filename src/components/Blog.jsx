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
  const [savedBlogs, setSavedBlogs] = React.useState([]);
  const [save, setSave] = React.useState(false);

  const { createdAt } = item || {};

  const dateString = new Date(createdAt).toLocaleDateString("tr-TR");

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
        isProfile,
      })
    );
  };
  React.useEffect(() => {
    const blogs = sessionStorage.getItem("savedBlogs");
    setSave(blogs && JSON.parse(blogs)?.find((x) => x._id === item._id));
    setSavedBlogs(blogs ? JSON.parse(blogs) : []);
  }, []);

  const handleSave = () => {
    const currentSavedBlogs = sessionStorage.getItem("savedBlogs");
    const savedBlogsArray = currentSavedBlogs
      ? JSON.parse(currentSavedBlogs)
      : [];
    const blogIndex = savedBlogsArray.findIndex(
      (blog) => blog._id === item._id
    );

    if (blogIndex !== -1) {
      savedBlogsArray.splice(blogIndex, 1);
    } else {
      savedBlogsArray.push(item);
    }

    sessionStorage.setItem("savedBlogs", JSON.stringify(savedBlogsArray));

    setSave(blogIndex === -1);
  };
  return (
    <Card
      sx={{
        display: { sm: "flex", xs: "block" },
        maxWidth: "100%",
        mt: 2,
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
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            className="line-clamp"
            dangerouslySetInnerHTML={{ __html:item.content }}
          />

          <Typography color="text.secondary" sx={{ fontSize: "10px", pt: 1 }}>
            {dateString}
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
              onClick={!isProfile ? handleLike : undefined}
              sx={{
                display: "flex",
                gap: "0.3rem",
                cursor: isProfile ? "not-allowed" : "pointer",
              }}
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
          {!isProfile && (
            <Tooltip title="save" arrow>
              <Button size="small">
                <BookmarkAddedOutlinedIcon
                  onClick={handleSave}
                  sx={{
                    width: "1rem",
                    color: save ? " #e0d451" : " #3cb97f",
                  }}
                />
              </Button>
            </Tooltip>
          )}

          <Button className="btn" size="small">
            <FontAwesomeIcon icon={faComments} />
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
}
