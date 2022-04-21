import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import paths from '../../constants/paths';
import { useNavigate } from 'react-router-dom';
import { LOGO } from '../../constants/urls';
import { Button } from '@mui/material';
//import MainTheme from "../../themes/MainTheme";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const ITEM_HEIGHT = 48;

const CustomerNavBar = () => {
  const options = [
    ['Profile', paths.profile],
    ['Orders', paths.login],
    ['Cart', paths.login],
    ['Delivery', paths.login],
    ['Wishlist', paths.login],
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

        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder='Search…'
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>

        <Typography variant='h6' noWrap sx={{ flexGrow: 1, ml: 95 }}>
          Hello Customer
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
          <MoreVertIcon />
        </IconButton>
        <Menu
          id='long-menu'
          MenuListProps={{
            'aria-labelledby': 'long-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: '20ch',
            },
          }}
        >
          {options.map((option) => (
            <MenuItem
              key={option[0]}
              style={{ color: 'black' }}
              selected={option === 'Pyxis'}
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
