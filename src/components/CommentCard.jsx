import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";

export default function MediaCard({ setStateItem, sendComment }) {
  const handleChange = (e) => {
    const { value } = e.target;
    setStateItem(value);
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      {/* <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      /> */}
      <CardContent>
        <TextField
          id="standard-multiline-static"
          multiline
          rows={4}
          onChange={handleChange}
        />
      </CardContent>
      <CardActions>
        <Button size="small">Cancel</Button>
        <Button size="small" onClick={sendComment}>
          Send
        </Button>
      </CardActions>
    </Card>
  );
}
