import React from 'react';
import { Grid } from '@mui/material';
// import { ThemeProvider } from '@mui/material/styles';
// import MainTheme from '../../themes/MainTheme';
import { CssBaseline } from '@mui/material';
import Products from './Products/Products';
// import { keyframes } from '@emotion/react';
// import ImageList from '@mui/material/ImageList';
// import ImageListItemBar from '@mui/material/ImageListItem';
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
// import ImageListItemBar from '@mui/material/ImageListItemBar';
// import ListSubheader from '@mui/material/ListSubheader';
// import IconButton from '@mui/material/IconButton';
// import InfoIcon from '@mui/icons-material/Info';

const SearchResult = (props) => {
  return (
    <>
      <Grid>
        <Products props={props} />
      </Grid>

      <CssBaseline />
    </>
  );
};

export default SearchResult;
