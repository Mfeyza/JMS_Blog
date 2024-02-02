import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import { Form } from "formik"
import { object, string } from "yup"

export const registerSchema = object({
  username: string()
    .max(20, "Kullanıcı adı 10 karakterden az olmalıdır.")
    .required("Kullanıcı adı zorunludur"),
  firstName: string()
    .max(20, "İsim 20 karakterden az olmalıdır.")
    .required("İsim zorunludur"),
  lastName: string()
    .max(20, "Soyisim 30 karakterden az olmalıdır.")
    .required("Soyisim zorunludur"),

  email: string()
    .email("Lütfen geçerli bir email giriniz.")
    .required("Email zorunludur"),
  password: string()
    .required("Şifre zorunludur")
    .min(8, "Şifre en az 8 karakter olmalıdır")
    .max(20, "Şifre en fazla 20 karakter olmalıdır")
    .matches(/\d+/, "Şifre bir sayı içermelidir")
    .matches(/[a-z]/, "Şifre bir küçük harf içermelidir")
    .matches(/[A-Z]/, "Şifre bir büyük harf içermelidir")
    .matches(/[!/[@$!%*?&]+/, "Şifre bir özel karakter içermelidir"),
})

const RegisterForm = ({
  values,
  handleChange,
  errors,
  touched,
  handleBlur,
}) => {
  return (
    <Stack
    justifyContent={"space-between"}
    flexDirection={"row"}
    color={"white"}
    sx={{ backgroundColor: "black",Width:"100%"}}
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
            minWidth: '100%'
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
            />
            <Box sx={{display:"flex" ,justifyContent:"space-between"}}>
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
            />
            </Box>
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
  )
}

export default RegisterForm

