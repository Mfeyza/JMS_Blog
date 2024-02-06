import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Grid, Stack } from "@mui/material";
import img1 from "../assets/3b22bd37e20ce993d52e4c3b242b73a3.gif";
import img from "../assets/—Pngtree—unique tree with roots useful_8831990.png";
import {  useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm"
import { useDispatch} from "react-redux";
import { object, string } from "yup"
import { Formik } from "formik"
import { login } from "../thunks/auththunk"
const defaultTheme = createTheme();

export default function Login() {
  const navigate = useNavigate();
  const dispatch=useDispatch()
  const loginSchema = object({
    email: string()
      .email("Lütfen geçerli bir email giriniz")
      .required("Email girişi zorunludur"),
    password: string()
      .required("Şifre zorunludur.")
      .min(8, "Şifre en az 8 karakter içermelidir")
      .max(16, "Şifre en falza 16 karakter içermelidir")
      .matches(/\d+/, "Şifre en az bir rakam içermelidir")
      .matches(/[a-z]/, "Şifre en az bir küçük harf içermelidir")
      .matches(/[A-Z]/, "Şifre en az bir büyük harf içermelidir")
      .matches(
        /[@$!%*?&]+/,
        "Şifre en az bir özel karakter (@$!%*?&) içermelidir"
      ),
  })
  return (
    <Stack
      display={"flex"}
      justifyContent={"space-between"}
      flexDirection={"row"}
      color={"white"}
      sx={{ backgroundColor: "black" }}
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
              src={img}
              style={{
                m: 1,
                bgcolor: "secondary.main",
                height: "4rem",
                Width: "4rem",
              }}
            ></img>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginSchema}
            onSubmit={(values, actions) => {
              console.log(values)
              dispatch(login({ values, navigate }))
              actions.resetForm()
              actions.setSubmitting(false) 
            }}
           
            component={(props) => LoginForm({ ...props })}
          ></Formik>
        
          </Box>
        </Container>
      </ThemeProvider>
      <Box
        flex={1}
        display={"flex"}
        justifyContent={"center"}
        style={{ maxWidth: "100%", height: "auto" }}
      >
        <img src={img1} />
      </Box>
    </Stack>
  );
}

  
  