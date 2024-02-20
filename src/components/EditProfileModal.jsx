import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { Container, MenuItem, Select, TextField } from "@mui/material";
import data from "../helper/data";
import { updateUser } from "../thunks/auththunk";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({
  open,
  handleClose,
  setOpen,
  userInfo,
 
}) {
  const dispatch = useDispatch();
  const modalInfo = useSelector((state) => state.auth);
  const cityInfo = useSelector((state) => state.city);
  const { firstName, lastName, image, city, bio, _id } = modalInfo;
  const [info, setInfo] = React.useState({
    image: "",
    firstName: "",
    lastName: "",
    city: "",
    bio: "",
    username: "",
    password: "",
    email: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setInfo({
      ...info,
      [name]: value,
    });
  };
  const handleUpdate = () => {
    dispatch(updateUser({ _id, info }));
  };

  React.useEffect(() => {
    setInfo(userInfo);
  }, []);

  console.log(info);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Edit Profile
        </Typography>
        <Box sx={{ display: "flex", gap: "2rem", marginBottom: "2rem" }}>
          <TextField
            id="first-name"
            label="FirstName"
            value={info.firstName || ""}
            onChange={handleChange}
            name="firstName"
          />
          <TextField
            id="last-name"
            label="LastName"
            value={info.lastName || ""}
            onChange={handleChange}
            name="lastName"
          />
        </Box>
        <TextField
          id="image-url"
          label="Image/URL"
          fullWidth
          value={info.image || ""}
          onChange={handleChange}
          name="image"
          sx={{ marginBottom: "1rem" }}
        />
        <TextField
          id="biography"
          label="Biography"
          multiline
          rows={4}
          fullWidth
          value={info.bio || ""}
          onChange={handleChange}
          name="bio"
          sx={{ marginBottom: "1rem" }}
        />
        <Select
          labelId="city-select-label"
          id="city-select"
          value={info.city || ""}
          label="City"
          onChange={handleChange}
          name="city"
          displayEmpty
          fullWidth
        >
          <MenuItem value="" disabled>
            Select a city
          </MenuItem>
          {data.map((cityName) => (
            <MenuItem key={cityName.id} value={cityName.name}>
              {cityName.name}
            </MenuItem>
          ))}
        </Select>
        <Button onClick={handleUpdate}>Update Profile</Button>
      </Box>
    </Modal>
  );
}
