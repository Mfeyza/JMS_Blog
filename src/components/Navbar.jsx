// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import Container from "@mui/material/Container";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";
// import MenuItem from "@mui/material/MenuItem";
// import AdbIcon from "@mui/icons-material/Adb";
// import SearchIcon from "@mui/icons-material/Search";
// import { styled } from "@mui/material/styles";
// import InputBase from "@mui/material/InputBase";
// import RateReviewRoundedIcon from '@mui/icons-material/RateReviewRounded';
// import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
// import img2 from "../assets/—Pngtree—unique tree with roots useful_8831990.png"
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";


// const pages = [
//     {name:"Our Story", color:" rgb(22, 165, 98)", backgroundColor:"transparent"},
//     {name:"Write", color:" rgb(22, 165, 98)", backgroundColor:"transparent"},
//     {name:"Get Started", color:"white", backgroundColor:"rgb(85, 212, 81)"}
//  ];
// const settings = ["Profile", "Logout"];

// function Navbar() {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);
//   const user = useSelector((state) => state.auth.user);
//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };
//   const SearchIconWrapper = styled("div")(({ theme }) => ({
//     padding: theme.spacing(0, 2),
//     height: "100%",
//     position: "absolute",
//     pointerEvents: "none",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   }));
//   const StyledInputBase = styled(InputBase)(({ theme }) => ({
//     color: "inherit",
//     width: "100%",
//     "& .MuiInputBase-input": {
//       padding: theme.spacing(1, 1, 1, 0),
//       paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//       transition: theme.transitions.create("width"),
//       [theme.breakpoints.up("sm")]: {
//         width: "12ch",
//         "&:focus": {
//           width: "20ch",
//         },
//       },
//     },
//   }));
  
  
//   const navigate = useNavigate();
//   const handleGetStartedClick = () => {
//     navigate('/Login'); 
//   }
//   const handleIconClick=()=>{
//     navigate('/')
//   }

//     return (
//         <AppBar position="static" sx={{ backgroundColor: 'black', boxShadow: 'none', color: "black", borderBottom: '1px solid rgb(214, 201, 201)' }}>
//         <Container maxWidth="xxl">
//           <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'  }}>
//             <Box sx={{ display: 'flex', alignItems: 'center' }}>
//         <img src={img2} width={"50rem"} height={"50rem"} />
//               <IconButton
//                 size="large"
//                 aria-label="account of current user"
//                 aria-controls="menu-appbar"
//                 aria-haspopup="true"
//                 onClick={handleOpenNavMenu}
//                 color="inherit"
//                 sx={{ display: { xs: 'flex', md: 'none' } }}
//               >
//                 <MenuIcon />
//               </IconButton>
//               <Button sx={{ fontSize:"1.5rem", color:" rgb(22, 165, 98)"}} onClick={handleIconClick} >
//                 JMSDev
//               </Button>
//               <Menu
//                 id="menu-appbar"
//                 anchorEl={anchorElNav}
//                 anchorOrigin={{ vertical: 'bottom', horizontal: 'left', }}
//                 keepMounted
//                 transformOrigin={{ vertical: 'top', horizontal: 'left', }}
//                 open={Boolean(anchorElNav)}
//                 onClose={handleCloseNavMenu}
//               >
//                 {pages.map((page) => (
//                   <MenuItem key={page} onClick={handleCloseNavMenu}>
//                     <Typography textAlign="center">{page?.name}</Typography>
//                   </MenuItem>
//                 ))}
//               </Menu>
//             </Box>
//             <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, justifyContent: 'flex-end' }}>
//             {pages.map((page) => {
//               if (page.name === "Get Started" || "write") {
//                 return (
//                   <Button key={page.name} onClick={handleGetStartedClick} sx={{ color: page.color, mx: 2, backgroundColor: page.backgroundColor }}>
//                     {page.name}
//                   </Button>
//                 );
//               } else {
//                 return (
//                   <Button key={page.name} onClick={handleCloseNavMenu} sx={{ color: "white", mx: 2, backgroundColor: page.backgroundColor ? page.backgroundColor : 'white' }}>
//                     {page.name}
//                   </Button>
//                 );
//               }
//             })}
            
//             </Box>
//           </Toolbar>
//         </Container>
//       </AppBar>
//     );
//   }
  
//   export default Navbar;


import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import RateReviewRoundedIcon from '@mui/icons-material/RateReviewRounded';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

const pages = ["Products","Pricing", "Blog", ];
const settings = ["Profile", "Logout"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    width: "100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  return (
    <AppBar position="static"  sx={{ backgroundColor: 'transparent', boxShadow: 'none', color:"black", borderBottom: '1px solid rgb(214, 201, 201)'}}>
      <Container maxWidth="xxl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Box
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 400,
            }}
          >
           
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
        
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={() => {}}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Button 
            startIcon={<RateReviewRoundedIcon />}
            sx={{ color: "black", marginInlineEnd:"3rem"}}
          >
            Write
          </Button>
          
         < NotificationsActiveIcon sx={{
            marginInlineEnd:"1rem", cursor:"pointer" , color:"black"
         }}/>
      
         
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="UserPicture" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
