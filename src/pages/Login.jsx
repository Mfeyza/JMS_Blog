import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Stack } from "@mui/material";
import img1 from "../assets/3b22bd37e20ce993d52e4c3b242b73a3.gif";
import img from "../assets/—Pngtree—unique tree with roots useful_8831990.png"
import { useNavigate } from "react-router-dom";

const defaultTheme = createTheme();

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
 const navigate=useNavigate()
  return (
    <Stack
    display={"flex"}
      justifyContent={"space-between"}
      flexDirection={"row"}
      color={"white"}
      sx={{ backgroundColor: "black"}}
      minHeight={"100vh"}
      flexWrap={"wrap"}
      
    >
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs" flex={1} >
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              flex:1,
              
            }}
          >
            <img src={img} style={{ m: 1, bgcolor: "secondary.main" ,height:"4rem", Width:"4rem" }}>
              
            </img>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                className="loginInput"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                className="loginInput"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  backgroundColor: "green",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "darkgreen",
                  },
                }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Typography onClick={()=>{navigate('/Register')}} variant="body2" sx={{cursor:"pointer"}}>
                    Don't have an account? Sign Up
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
      <Box flex={1} display={"flex"} justifyContent={"center"} style={{ maxWidth: '100%', height: 'auto' }}>
        <img src={img1} />
      </Box>
    </Stack>
  );
}
