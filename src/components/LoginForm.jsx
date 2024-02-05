import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Form } from "formik";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
const LoginForm = ({ values, handleChange, handleBlur, touched, errors }) => {
    const navigate=useNavigate()
  return (
    <Form>
        <Box
              sx={{ mt: 1  ,display: "flex",
              flexDirection: "column",
              alignItems: "center",}}
            >
              <TextField
              label="Email"
              name="email"
              id="email"
              type="email"
              className="loginInput"
              

              variant="outlined"
              value={values.email}
              onBlur={handleBlur}
              onChange={handleChange}
              error={touched.email && Boolean(errors.email)}
              helperText={errors.email}

                autoFocus
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
               onBlur={handleBlur}
               onChange={handleChange}
               error={touched.password}
               helperText={errors.password}
                InputLabelProps={{
                  style: { color: "white" },
                }}
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
                  <Typography
                    onClick={() => {
                      navigate("/Register");
                    }}
                    variant="body2"
                    sx={{ cursor: "pointer" }}
                  >
                    Don't have an account? Sign Up
                  </Typography>
                </Grid>
              </Grid>
            </Box>
            </Form>
            )
          }
          
export default LoginForm