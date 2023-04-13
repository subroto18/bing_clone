import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Hamburger.module.css";
import MenuSettings from "./MenuSetting";

const pages = ["Chat", "Images", "Videos", "Maps", "..."];

const toggleMenu = [
  "Translate",
  "News",
  "Travel",
  "MSN",
  "Start.gg",
  "TakeLessons",
  "Health",
  "Office",
];

function Hamburger() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [screenWidth,setScreenWidth] = React.useState(null);


  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const toggleDropDownMenu = (e, page) => {
    if (page === "...") {
      setAnchorElNav(e.currentTarget);
    }
  };

  // dynamic menu postion based on screen size

  React.useEffect(()=>{
    window.addEventListener('resize', ()=>{
      setScreenWidth(window.innerWidth);
    });
  },[])

  React.useEffect(()=>{
    window.addEventListener('resize', ()=>{
      setScreenWidth(window.innerWidth);
    });
    return () => window.removeEventListener('resize', ()=>{
      setScreenWidth(null);
    });
  })

  

  return (
    <AppBar className={styles.appbar} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="">
            <Box
            className={styles.logo}
              component="img"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Microsoft_Bing_logo.svg/1280px-Microsoft_Bing_logo.svg.png"
              alt="Logo"
            />
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                onClick={(e) => toggleDropDownMenu(e, page)}
                key={page}
                sx={{
                  my: 2,
                  fontSize: ".8rem",
                  textTransform: "capitalize",
                  color: "white",
                  display: "block",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

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
              display: { xs: "block", md: "block", lg: "block" },
            }}
          >
            {toggleMenu.map((menu, index) => (
              <MenuItem key={menu} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{menu}</Typography>
              </MenuItem>
            ))}
          </Menu>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "block" } }}></Box>

          <Box sx={{ flexGrow: 0 }}>
            <Box>
              <Button>
                <Typography variant="p" noWrap component="a" href="">
                  Sing in
                </Typography>
              </Button>

              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircleIcon className="userSiginIcon" />
              </IconButton>

              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={handleOpenUserMenu}
              >
                <MenuIcon />
              </IconButton>
            </Box>

            <Menu
              sx={{ mt: "45px" }}
              
              keepMounted
    
              getContentAnchorEl={null}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuSettings></MenuSettings>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Hamburger;
