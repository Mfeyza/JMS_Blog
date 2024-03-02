import React, { useState } from "react";
import { Avatar, TextField, Box, ToggleButtonGroup, ToggleButton, Card, CardActions, CardContent, Button, Typography } from "@mui/material";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import { useSelector } from "react-redux";

export default function MediaCard({ setStateItem, sendComment }) {
  const userInfo = useSelector((state) => state.auth);
  const { firstName, lastName, image } = userInfo;
  const [formats, setFormats] = useState([]);

  const handleChange = (e) => {
    const { value } = e.target;
    setStateItem(value);
  };

  const handleFormatChange = (event, newFormats) => {
    setFormats(newFormats);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <Avatar src={image} alt={`${firstName} ${lastName}`}>{firstName.substring(0, 1)}</Avatar>
          <Typography>{firstName} {lastName}</Typography>
        </Box>

        <Box sx={{ my: 2 }}>
          <ToggleButtonGroup
            value={formats}
            onChange={handleFormatChange}
            aria-label="text formatting"
          >
            <ToggleButton value="bold" aria-label="bold">
              <FormatBoldIcon />
            </ToggleButton>
            <ToggleButton value="italic" aria-label="italic">
              <FormatItalicIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>

        <TextField
          id="standard-multiline-static"
          multiline
          rows={4}
          onChange={handleChange}
          variant="filled"
          placeholder="Add a comment.."
          fullWidth
          InputProps={{
            disableUnderline: true,
            style: {
              border: 'none',
              backgroundColor: 'transparent',
            },
          }}
        />
      </CardContent>
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Button className="btn" size="small">Cancel</Button>
        <Button className="btn" size="small" onClick={sendComment}>
          Respond
        </Button>
      </CardActions>
    </Card>
  );
}
