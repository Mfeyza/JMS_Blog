import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { object, string } from "yup";
import { Stack } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import img from "../assets/3b22bd37e20ce993d52e4c3b242b73a3.gif";
import img1 from "../assets/—Pngtree—unique tree with roots useful_8831990.png";
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import city  from "../helper/data";
import { useState } from "react";

export const registerSchema = object({
  username: string()
    .max(20, "Username must be less than 20 characters.")
    .required("Username is required"),
  firstName: string()
    .max(20, "First name must be less than 20 characters.")
    .required("First name is required"),
  lastName: string()
    .max(20, "Last name must be less than 30 characters.") // Bu satırda bir tutarsızlık var. Max 20 yazılmış, fakat mesaj 30 diyor. Doğrusu hangisi olmalı?
    .required("Last name is required"),

  email: string()
    .email("Please enter a valid email.")
    .required("Email is required"),
  password: string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .max(20, "Password must be no more than 20 characters long")
    .matches(/\d+/, "Password must contain a number")
    .matches(/[a-z]/, "Password must contain a lowercase letter")
    .matches(/[A-Z]/, "Password must contain an uppercase letter")
    .matches(/[!/[@$!%*?&]+/, "Password must contain a special character"),

  bio: string()
    .max(50, "Bio must be less than 50 characters.")
    .required("Bio is required"),
});
const defaultTheme = createTheme();

const RegisterForm = ({
  values,
  handleChange,
  errors,
  touched,
  handleBlur,
  handleSubmit,
}) => {
  const navigate = useNavigate();


 
  return (
    <Stack
      justifyContent={"space-between"}
      flexDirection={"row"}
      color={"white"}
      sx={{ backgroundColor: "black", Width: "100%",mb:"8rem" }}
      minHeight={"100vh"}
      flexWrap={"wrap"}
      
    >
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs" flex={1}>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              flex: 1,
            }}
          >
            <img
              src={img1}
              style={{
                m: 1,
                bgcolor: "secondary.main",
                height: "4rem",
                Width: "4rem",
              }}
            ></img>

            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{
                mt: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <TextField
                className="loginInput"
                label="User Name"
                name="username"
                id="userName"
                type="text"
                variant="outlined"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.username && Boolean(errors.username)}
                helperText={errors.username}
                InputLabelProps={{
                  style: { color: "white" },
                }}
              />
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}
              >
                <TextField
                  className="loginInput"
                  label="First Name"
                  name="firstName"
                  id="firstName"
                  type="text"
                  variant="outlined"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.firstName && Boolean(errors.firstName)}
                  helperText={errors.firstName}
                  InputLabelProps={{
                    style: { color: "white" },
                  }}
                />
                <TextField
                  className="loginInput"
                  label="Last Name"
                  name="lastName"
                  id="lastName"
                  type="text"
                  variant="outlined"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.lastName && Boolean(errors.lastName)}
                  helperText={errors.lastName}
                  InputLabelProps={{
                    style: { color: "white" },
                  }}
                />
              </Box>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}
              >
                <TextField
                  className="loginInput"
                  label="Email"
                  name="email"
                  id="email"
                  type="email"
                  variant="outlined"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.email && Boolean(errors.email)}
                  helperText={errors.email}
                  InputLabelProps={{
                    style: { color: "white" },
                  }}
                />
                <TextField
                  className="loginInput"
                  label="password"
                  name="password"
                  id="password"
                  type="password"
                  variant="outlined"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.password && Boolean(errors.password)}
                  helperText={errors.password}
                  InputLabelProps={{
                    style: { color: "white" },
                  }}
                />
              </Box>
              <Box
                className="loginInput"
                sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}
              >
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel
                      sx={{
                        color: "white",
                        "&.Mui-focused": { color: "white" },
                      }}
                    >
                      City
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      name="city"
                      id="city"
                      value={values.city}
                      label="City"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      sx={{
                        color: "white",
                        "&.Mui-focused": { color: "white" },
                      }}
                    >
                      {city.map((item) => {
                       return <MenuItem key={item.id}   value={item.name}>{item.name}</MenuItem>;
                      })}
                    </Select>
                  </FormControl>
                </Box>
                <TextField
                  className="loginInput"
                  name="image"
                  type="url"
                  label="İmage"
                  value={values.image}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  InputLabelProps={{
                    style: { color: "white" },
                  }}
                />
              </Box>
              <TextField
                className="loginInput"
                label="Bio"
                name="bio"
                type="text"
                variant="outlined"
                value={values.bio}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.bio && Boolean(errors.bio)}
                helperText={errors.bio}
                InputLabelProps={{
                  style: { color: "white" },
                }}
                fullWidth
                multiline
                sx={{ mt: 2 }}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  backgroundColor: " #3586ff",
                  color: "white",
                  "&:hover": {
                    backgroundColor: " #3586ff",
                  },
                }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                  <Typography
                    onClick={() => {
                      navigate("/Register");
                    }}
                    variant="body2"
                    sx={{ cursor: "pointer" }}
                  >
                    Already have an account? Sign In
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
      <Box
        flex={1}
        display={"flex"}
        justifyContent={"center"}
        style={{ maxWidth: "100%", height: "auto" }}
      >
        <img src={img} />
      </Box>
    </Stack>
  );
};

export default RegisterForm;
