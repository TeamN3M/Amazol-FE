import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import InfoIcon from "@mui/icons-material/Info";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import MainTheme from "../themes/MainTheme";

const InfoPop = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <Button
        startIcon={<InfoIcon />}
        size="large"
        aria-owns={open ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
        style={{
          color: MainTheme.palette.text.primary,
          mt: 15,
          justifyContent: "left",
        }}
        // onClick={handleClick}
      />
      <Popover
        sx={{
          pointerEvents: "none",
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography
          style={{
            color: MainTheme.palette.primary.main,
          }}
        >
          <List
            dense={true}
            style={{
              backgroundColor: "rgba(0,0,0,0.3)",
            }}
          >
            <ListItem>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="The name must contain at least 2 letters in English only" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <AlternateEmailIcon />
              </ListItemIcon>
              <ListItemText primary="Email must meet the required formats" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <VpnKeyIcon />
              </ListItemIcon>
              <ListItemText>
                * A password must contain at least one letter and one number
                <br /> * The password must be at least 6 characters long
              </ListItemText>
            </ListItem>
          </List>
        </Typography>
      </Popover>
    </>
  );
};
export default InfoPop;
