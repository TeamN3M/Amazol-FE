import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import paths from "../../constants/paths";
import { useNavigate } from "react-router-dom";
import { LOGO } from "../../constants/urls";
import { Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";
// import { alignProperty } from '@mui/material/styles/cssUtils';

const ITEM_HEIGHT = 48;

const CustomerNavBar = () => {
  const options = [
    ["Profile", paths.profile],
    ["Product Managment", paths.login],
    ["Financial Information", paths.login],
    ["Order Managment", paths.login],
  ];
  // const itempath = [paths.login];
  const navigate = useNavigate();
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

        <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} align="right">
          Hello Manager
        </Typography>

        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={open ? "long-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
          style={{ color: "white" }}
        >
          <Avatar sx={{ bgcolor: "white" }}>MM</Avatar>
        </IconButton>
        <Menu
          id="long-menu"
          MenuListProps={{
            "aria-labelledby": "long-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 5,
              width: "20ch",
            },
          }}
        >
          {options.map((option) => (
            <MenuItem
              key={option[0]}
              style={{ color: "black" }}
              selected={option === "Pyxis"}
              onClick={() => {
                handleClose;
                navigate(option[1]);
              }}
            >
              {option[0]}
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};
export default CustomerNavBar;
