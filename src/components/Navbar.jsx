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
import RateReviewRoundedIcon from "@mui/icons-material/RateReviewRounded";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import img2 from "../assets/—Pngtree—unique tree with roots useful_8831990.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { logout } from "../thunks/auththunk";
import { useDispatch } from "react-redux";
import { getBlogs } from "../thunks/blogsthunk";
import debounce from "../helper/methods";

const pages = [
  {
    name: "Our Story",
    color: " #3cb97f",
    backgroundColor: "transparent",
    path: "/our-story",
  },
  {
    name: "Write",
    color: " #3cb97f",
    backgroundColor: "transparent",
    path: "/login",
  },
  {
    name: "Get Started",
    color: "white",
    backgroundColor: "#3cb97f",
    path: "/login",
  },
];
const pages2 = [
  {
    name: "Our Story",
    color: " #3cb97f",
    backgroundColor: "transparent",
    path: "/our-story",
  },
];
const settings = ["Profile", "Logout"];

function Navbar() {
  const dispatch = useDispatch();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const user = useSelector((state) => state.auth.user);
  const image = useSelector((state) => state.auth.image);
  console.log(image);
  const currentPage = user ? pages2 : pages;
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
  const navigate = useNavigate();
  const handleMenuClick = (setting) => {
    if (setting === "Logout") {
      dispatch(logout());
      navigate("/");
    } else if (setting === "Profile") {
      navigate("/blogs/profile");
    }
    handleCloseUserMenu();
  };

  const handlePageClick = (page) => {
    if (user && page.name === "Our Story") {
      navigate(page.path);
    } else if (!user && page.name === "Get Started") {
      navigate(page.path);
    } else {
      navigate(page.path);
    }
  };

  const handleSearch = React.useCallback(
    debounce((e) => dispatch(getBlogs({ keyword: e.target.value })), 1000),
    []
  );
  const handleIconClick = () => {
    user ? navigate("/blogs") : navigate("/");
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: user ? "transparent" : "black",
        boxShadow: "none",
        color: "black",
        borderBottom: "1px solid rgb(214, 201, 201)",
      }}
    >
      <Container maxWidth="xxl">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img src={img2} width={"50rem"} height={"50rem"} />
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ display: { xs: "flex", md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Button
              sx={{ fontSize: "1.5rem", color: "   #3cb97f" }}
              onClick={handleIconClick}
            >
              JMSDev
            </Button>

            {user && (
              <Box
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  ml: 2,
                }}
              >
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                  onChange={handleSearch}
                />
              </Box>
            )}

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {currentPage.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page?.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              flexGrow: 1,
              justifyContent: "flex-end",
            }}
          >
            {user && (
              <Button
                startIcon={<RateReviewRoundedIcon sx={{ color: " #3cb97f" }} />}
                sx={{ color: " #3cb97f", marginInlineEnd: "1rem" }}
                onClick={() => navigate("/blogs/newBlog")}
              >
                Write
              </Button>
            )}
            {currentPage.map((page) => (
              <Button
                key={page.name}
                onClick={() => handlePageClick(page)}
                sx={{
                  color: page.color,
                  mx: 2,
                  backgroundColor: page.backgroundColor,
                }}
              >
                {page.name}
              </Button>
            ))}

            {user && (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="UserPicture" src={image} />
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
                    <MenuItem
                      key={setting}
                      onClick={() => handleMenuClick(setting)}
                    >
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
