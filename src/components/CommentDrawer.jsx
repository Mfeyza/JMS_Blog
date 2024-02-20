import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { IconButton, TextField, Tooltip, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import CloseIcon from "@mui/icons-material/Close";
import CommentCard from "../components/CommentCard";
import CommentAll from "./CommentAll";
import { useDispatch, useSelector } from "react-redux";
import { postComment } from "../thunks/commentthunk";
import { useParams } from "react-router-dom";

export default function CommentDriver({ toggleDrawer, state }) {
  const dispatch = useDispatch()
  const currentBlog = useSelector((state) => state.blogs.currentBlog);
  console.log(currentBlog)
  const { comments } = currentBlog?.data || {};
  const [stateItem, setStateItem] = React.useState();
  const params = useParams();
  const { id } = params || {};
  const sendComment = () => {
    const values= {comment: stateItem , blogId: id }
  dispatch(postComment({values}))
  };

  const list = (anchor) => (
    <Box sx={{ width: 350 }} role="presentation">
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography sx={{ padding: 2 }}>Comments</Typography>
        <IconButton onClick={toggleDrawer(anchor, false)}>
          <CloseIcon />
        </IconButton>
      </Box>

      <Divider />
      <CommentCard setStateItem={setStateItem} sendComment={sendComment} />
      {comments?.map((item) => {
        return <CommentAll item={item} />;
      })}
    </Box>
  );
  return (
    <div>
      <Tooltip title="add comment" arrow>
        <IconButton
          onClick={toggleDrawer("right", true)}
          className="btn"
          size="small"
        >
          <FontAwesomeIcon icon={faComments} style={{ fontSize: "1.5rem" }} />
        </IconButton>
      </Tooltip>
      <Drawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        {list("right")}
      </Drawer>
    </div>
  );
}
