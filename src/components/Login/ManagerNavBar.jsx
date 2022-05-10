import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import paths from '../../constants/paths';
import { useNavigate } from 'react-router-dom';
import { LOGO } from '../../constants/urls';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { endLoginSession } from '../../constants/helpers';
import { logoutUser } from '../../store/StateUser';
import { useSelector } from 'react-redux';
import { getUser } from '../../store/StateUser';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import BallotIcon from '@mui/icons-material/Ballot';
import LogoutIcon from '@mui/icons-material/Logout';
import CategoryIcon from '@mui/icons-material/Category';
import TimelineIcon from '@mui/icons-material/Timeline';

const ITEM_HEIGHT = 48;

const ManagerNavBar = () => {
  const options = [
    {
      name: 'Profile',
      path: paths.mprofile,
      icon: <PersonIcon />,
    },
    {
      name: 'Product Managment',
      path: paths.prodmanage,
      icon: <CategoryIcon />,
    },
    {
      name: 'Financial Information',
      path: paths.login,
      icon: <TimelineIcon />,
    },
    {
      name: 'Order Managment',
      path: paths.login,
      icon: <BallotIcon />,
    },
    {
      name: 'Log Out',
      path: paths.index,
      icon: <LogoutIcon />,
    },
  ];

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
    <AppBar position='sticky' style={{ border: 'solid white 0.1px' }}>
      <Toolbar sx={{ justifyContent: 'flex-start' }}>
        <Button onClick={handleLogoClick}>
          <Box
            component='img'
            alt='logo'
            src={LOGO}
            sx={{ width: 150, height: 70 }}
          />
        </Button>

        <Typography variant='h6' noWrap sx={{ flexGrow: 1 }} align='right'>
          Hello Manager {userFisrtName}
        </Typography>

        <IconButton
          aria-label='more'
          id='long-button'
          aria-controls={open ? 'long-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup='true'
          onClick={handleClick}
          style={{ color: 'white' }}
        >
          <Avatar sx={{ bgcolor: 'white' }}>{FL}</Avatar>
        </IconButton>
        <Menu
          id='long-menu'
          MenuListProps={{
            'aria-labelledby': 'long-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          disableScrollLock={true}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 5,
              width: '25ch',
            },
          }}
        >
          {options.map((option, index) => (
            <MenuItem
              key={option}
              style={{ color: 'black', icon: option[2] }}
              selected={option === 'Pyxis'}
              onClick={() => {
                if (index == 4) {
                  handleLogoutClick();
                }
                handleClose();
                navigate(option.path);
              }}
              divider='true'
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
export default ManagerNavBar;
