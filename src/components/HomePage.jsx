import React from "react";
import { Grid, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import MainTheme from "../themes/MainTheme";
import { CssBaseline } from "@mui/material";
import { keyframes } from "@emotion/react";
import SliderOffers from "./SliderOffers";
import { sliderItems } from "../constants/items";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

const RGB = keyframes`
    0% { color: red; }
  33% { color: blue; }
  66% { color: green; }
  100% { color: red; }
`;

const offersItemData = [
  {
    img: "../images/home page/promoted_items/item_1.jpg",
    title: "offer_1",
    author: "@Maor",
    rows: 2,
    cols: 2,
    featured: true
  },
  {
    img: "../images/home page/promoted_items/item_2.jpg",
    title: "offer_2",
    author: "@bkristastucchio",
    rows: 2,
    cols: 2,
    featured: true
  },
  {
    img: "../images/home page/promoted_items/item_3.jpg",
    title: "offer_3",
    author: "@bkristastucchio",
    rows: 2,
    cols: 2,
    featured: true
  },
  {
    img: "../images/home page/promoted_items/item_4.jpg",
    title: "offer_4",
    author: "@bkristastucchio",
    rows: 2,
    cols: 2,
    featured: true
  },
  {
    img: "../images/home page/promoted_items/item_5.jpg",
    title: "offer_1",
    author: "@bkristastucchio",
    rows: 2,
    cols: 2,
    featured: true
  },
  {
    img: "../images/home page/promoted_items/item_6.jpg",
    title: "offer_2",
    author: "@bkristastucchio",
    rows: 2,
    cols: 2,
    featured: true
  },
  {
    img: "../images/home page/promoted_items/item_7.jpg",
    title: "offer_3",
    author: "@bkristastucchio",
    rows: 2,
    cols: 2,
    featured: true
  },
  {
    img: "../images/home page/promoted_items/item_8.jpg",
    title: "offer_4",
    author: "@bkristastucchio",
    rows: 2,
    cols: 2,
    featured: true
  },
  // duplicate
  {
    img: "../images/home page/promoted_items/item_1.jpg",
    title: "offer_1",
    author: "@Maor",
    rows: 2,
    cols: 2,
    featured: true
  },
  {
    img: "../images/home page/promoted_items/item_2.jpg",
    title: "offer_2",
    author: "@bkristastucchio",
    rows: 2,
    cols: 2,
    featured: true
  },
  {
    img: "../images/home page/promoted_items/item_3.jpg",
    title: "offer_3",
    author: "@bkristastucchio",
    rows: 2,
    cols: 2,
    featured: true
  },
  {
    img: "../images/home page/promoted_items/item_4.jpg",
    title: "offer_4",
    author: "@bkristastucchio",
    rows: 2,
    cols: 2,
    featured: true
  },
  {
    img: "../images/home page/promoted_items/item_5.jpg",
    title: "offer_1",
    author: "@bkristastucchio",
    rows: 2,
    cols: 2,
    featured: true
  },
  {
    img: "../images/home page/promoted_items/item_6.jpg",
    title: "offer_2",
    author: "@bkristastucchio",
    rows: 2,
    cols: 2,
    featured: true
  },
  {
    img: "../images/home page/promoted_items/item_7.jpg",
    title: "offer_3",
    author: "@bkristastucchio",
    rows: 2,
    cols: 2,
    featured: true
  },
  {
    img: "../images/home page/promoted_items/item_8.jpg",
    title: "offer_4",
    author: "@bkristastucchio",
    rows: 2,
    cols: 2,
    featured: true
  },
  // duplicate
  {
    img: "../images/home page/promoted_items/item_1.jpg",
    title: "offer_1",
    author: "@Maor",
    rows: 2,
    cols: 2,
    featured: true
  },
  {
    img: "../images/home page/promoted_items/item_2.jpg",
    title: "offer_2",
    author: "@bkristastucchio",
    rows: 2,
    cols: 2,
    featured: true
  },
  {
    img: "../images/home page/promoted_items/item_3.jpg",
    title: "offer_3",
    author: "@bkristastucchio",
    rows: 2,
    cols: 2,
    featured: true
  },
  {
    img: "../images/home page/promoted_items/item_4.jpg",
    title: "offer_4",
    author: "@bkristastucchio",
    rows: 2,
    cols: 2,
    featured: true
  }
];

const HomePage = () => {
  return (
    <>
      <SliderOffers sliderItems={sliderItems} />
      <Grid container spacing={2} justifyContent='space-around'>
        <Grid item xs={12}>
          <Typography variant='h1' sx={{ alignItems: "center" }} align='center'>
            <br />
          </Typography>
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            backgroundImage: `url("../images/home page/offer_1.jpg")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "fit",
            backgroundPosition: "center",
            height: "800px",
            width: "0.2vw"
          }}
        >
          <Typography
            variant='h1'
            sx={{ animation: `${RGB} 2.5s infinite`, alignItems: "center" }}
            align='center'
          >
            Sale!
          </Typography>
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            backgroundImage: `url("../images/home page/offer_2.jpg")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "fit",
            backgroundPosition: "center"
          }}
        >
          <Typography
            variant='h1'
            sx={{ animation: `${RGB} 2.5s infinite`, alignItems: "center" }}
            align='center'
          >
            Sale!
          </Typography>
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            backgroundImage: `url("../images/home page/offer_3.jpg")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "fit",
            backgroundPosition: "center"
          }}
        >
          <Typography
            variant='h1'
            sx={{ animation: `${RGB} 2.5s infinite`, alignItems: "center" }}
            align='center'
          >
            Sale!
          </Typography>
        </Grid>
      </Grid>
      <ListSubheader
        component='div'
        sx={{
          fontSize: "69px",
          fontStyle: "oblique",
          animation: `${RGB} 2.5s infinite`,
          alignItems: "center",
          alignSelf: "center",
          backgroundColor: "transparent"
        }}
      >
        Hot right now! Hot right now!
        <br />
      </ListSubheader>
      <ImageList sx={{}} cols={5}>
        {offersItemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=150&fit=crop&auto=format`}
              srcSet={`${item.img}?w=150&fit=crop&auto=format&dpr=4 4x`}
              alt={item.title}
              loading='lazy'
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.author}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${item.title}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
      {/* 
      <ImageList sx={{}} cols={4} rowHeight={400}>
        {itemData.map((item) => (
          <ImageListItemBar key={item.img}>
            <img
              src={`${item.img}?w=400&h=400&fit=crop&auto=format`}
              srcSet={`${item.img}?w=400&h=400&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading='lazy'
            />
          </ImageListItemBar>
        ))}
      </ImageList> */}

      <ThemeProvider theme={MainTheme}>
        <CssBaseline />
      </ThemeProvider>
    </>
  );
};

export default HomePage;
