/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Logo from "../Assets/Logo.svg";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { Link } from "react-router-dom";
import bird from "../Assets/WhatsApp Image 2024-04-25 at 10.07.31 PM.jpeg";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "About",
      icon: <InfoIcon />,
    },
  ];
  return (
    <nav>
      <div className="nav-logo-container py-3">
        <img src={bird} alt="" id="bird" />
      </div>
      <div className="navbar-links-container ">
        <Link to="/" style={{ textDecoration: "none" }}>
          <button className="primary-button" style={{ marginRight: "1px" }}>
            {" "}
            Home
          </button>
        </Link>
        <Link to="/about" style={{ textDecoration: "none" }}>
          <button className="primary-button" style={{ marginRight: "5px" }}>
            {" "}
            About Us
          </button>
        </Link>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            <Link to="/">
              <ListItem key={"Home"} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{<HomeIcon />}</ListItemIcon>
                  <ListItemText primary={"Home"} />
                </ListItemButton>
              </ListItem>
            </Link>
            <Link to="/about">
              <ListItem key={"About Us"} disableUnderline disablePadding>
                <ListItemButton>
                  <ListItemIcon>{<InfoIcon />}</ListItemIcon>
                  <ListItemText primary={"About Us"} />
                </ListItemButton>
              </ListItem>
            </Link>
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
