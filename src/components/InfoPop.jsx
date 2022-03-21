import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import InfoIcon from "@mui/icons-material/Info";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import VpnKeyIcon from "@mui/icons-material/VpnKey";

const InfoPop = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <Button startIcon={<InfoIcon />} size='large' onClick={handleClick} />
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
      >
        <Typography>
          <List dense={true}>
            <ListItem>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary='The name must contain at least 2 letters in English only' />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <AlternateEmailIcon />
              </ListItemIcon>
              <ListItemText primary='Email must meet the required formats' />
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
