import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Avatar from "@mui/material/Avatar"
import LockIcon from "@mui/icons-material/Lock"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import { Link } from "react-router-dom"
import RegisterForm, { registerSchema } from "../components/RegisterForm"
import { Formik } from "formik"
import {  useDispatch } from "react-redux"
import {register} from "../thunks/auththunk"
import {  useNavigate } from "react-router-dom";
const Register = () => {

const dispatch=useDispatch()
const navigate = useNavigate();
  return (
    <Container maxWidth="100%" sx={{backgroundColor:"black",overflow:"hidden"}}>
      

        <Grid >

          <Formik
            initialValues={{
              username: "",
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              city:"",
              image:"",
              bio:""
            }}
            validationSchema={registerSchema}
            onSubmit={(values, actions) => {
              console.log(values)
              dispatch(register({values,navigate}))
              actions.resetForm()
              actions.setSubmitting(false)
            }}
            component={(props) => <RegisterForm   {...props} />}
          ></Formik>

        </Grid>
  
    </Container>
  )
}

export default Register

