import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import SearchBar from "../search/SearchBar";
import paths from "../../constants/paths";
import { useNavigate } from "react-router-dom";
import { LOGO } from "../../constants/urls";
import { Button, Grid } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { useDispatch } from "react-redux";
import { endLoginSession } from "../../constants/helpers";
import { logoutUser } from "../../store/StateUser";
import { useSelector } from "react-redux";
import { getUser } from "../../store/StateUser";
import CartIcon from "../Cart/CartIcon";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";

const ITEM_HEIGHT = 48;

const CustomerNavBar = () => {
  const options = [
    {
      name: "Profile",
      path: paths.profile,
      icon: <PersonIcon />,
    },
    {
      name: "Wishlist",
      path: paths.wishList,
      icon: <FeaturedPlayListIcon />,
    },
    {
      name: "Orders",
      path: paths.cusomerorders,
      icon: <ShoppingBasketIcon />,
    },

    {
      name: "Affiliate",
      path: paths.affiliate,
      icon: <PeopleOutlineIcon />,
    },
    {
      name: "Log Out",
      path: paths.index,
      icon: <LogoutIcon />,
    },
  ];
  // const itempath = [paths.login];
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleLogoClick = () => {
    navigate(paths.index);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogoutClick = () => {
    console.log("sss");
    endLoginSession();
    dispatch(logoutUser());
    navigate(paths.index);
  };
  const state = useSelector((s) => s);
  const user = getUser(state);
  const userFisrtName = user.first_name;
  const userLastName = user.last_name;
  const FL =
    userFisrtName.substring(0, 1).toUpperCase() +
    userLastName.substring(0, 1).toUpperCase();

  return (
    <AppBar position="sticky" style={{ border: "solid white 0.1px" }}>
      <Toolbar sx={{ justifyContent: "flex-start" }}>
        <Button onClick={handleLogoClick}>
          <Box
            component="img"
            alt="logo"
            src={LOGO}
            sx={{ width: 150, height: 70 }}
          />
        </Button>

        <SearchBar />

        <Typography
          variant="h6"
          noWrap
          sx={{ flexGrow: 1 }}
          align="right"
          textTransform="capitalize"
        >
          Hello {userFisrtName}
        </Typography>
        <Grid sx={{ display: "flex" }}>
          <CartIcon />
        </Grid>

        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={open ? "long-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
          style={{ color: "white" }}
        >
          <Avatar sx={{ bgcolor: "white" }}>{FL}</Avatar>
        </IconButton>
        <Menu
          id="long-menu"
          MenuListProps={{
            "aria-labelledby": "long-button",
          }}
          anchorEl={anchorEl}
          open={open}
          disableScrollLock={true}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 5,
              width: "20ch",
            },
          }}
        >
          {options.map((option, index) => (
            <MenuItem
              key={option}
              style={{ color: "black" }}
              selected={option === "Pyxis"}
              divider="true"
              disabled={option.name === "Delivery" ? true : false}
              onClick={() => {
                if (index == 4) {
                  handleLogoutClick();
                }
                handleClose();
                navigate(option.path);
              }}
            >
              <ListItemIcon>{option.icon}</ListItemIcon>
              {option.name}
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};
export default CustomerNavBar;
