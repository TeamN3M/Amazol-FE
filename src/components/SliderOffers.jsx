/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { keyframes } from '@emotion/react';
import { Box, styled, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ArrowLeft, ArrowRight } from '@mui/icons-material';
import paths from '../constants/paths';
import MainTheme from '../themes/MainTheme';
import { SALE } from '../constants/strings';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    position: 'relative',
    overflow: 'hidden',
  },
  imgContainer: {
    height: '100%',
    flex: 1,
  },
  img: {
    height: '80%',
    marginTop: MainTheme.spacing(10),
    marginLeft: MainTheme.spacing(5),
    borderRadius: MainTheme.spacing(4),
  },
  infoContainer: {
    flex: 1,
    padding: '50px',
  },
  title: {
    fontSize: '70px !important',
    fontFamily: 'Courier New !important',
  },
  description: {
    margin: '30px 0px !important',
    fontSize: '20px !important',
    fontWeight: 500,
    fontFamily: 'Courier New !important',
    letterSpacing: '3px !important',
  },
  btn: {
    padding: '10px',
    fontSize: '20px',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    textTransform: 'capitalize',
    borderColor: '#9edeaf',
    color: '#9edeaf',
  },
}));

const left = 'left';
const right = 'right';

const RGB = keyframes`
    0% { color: red; }
  33% { color: blue; }
  66% { color: green; }
  100% { color: red; }
`;

const StyledWrapper = styled(Box)(({ index }) => ({
  height: '100%',
  display: 'flex',
  transition: 'all 1.5s ease',
  transform: `translateX(${index * -100}vw)`,
}));

const StyledSlide = styled(Box)({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#212121 !important',
});

const StyledArrow = styled(Box)(({ direction }) => ({
  width: '50px',
  height: '50px',
  backgroundColor: '#c5cae9',
  color: 'black',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: direction === left && 10,
  right: direction === right && 10,
  margin: 'auto',
  cursor: 'pointer',
  opacity: 0.5,
  zIndex: 3,
}));

const StyledContainer = styled(Box)({
  width: '100%',
  height: '100vh',
  display: 'flex',
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: '#212121 !important',
});

const SliderOffers = ({ sliderItems }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  const handleSliderClicked = (direction) => {
    if (direction === left) {
      setIndex((prevState) => (prevState > 0 ? prevState - 1 : 3));
    } else {
      setIndex((prevState) => (prevState < 3 ? prevState + 1 : 0));
    }
  };

  const handleShowMoreClicked = (name) => {
    navigate(paths.search, { state: { value: name } });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleSliderClicked(right);
    }, 5000);
    return () => clearTimeout(timer);
  }, [handleSliderClicked]);

  return (
    <StyledContainer component='div'>
      <StyledArrow
        direction={left}
        component='div'
        onClick={() => handleSliderClicked(left)}
      >
        <ArrowLeft />
      </StyledArrow>
      <StyledWrapper component='div' index={index}>
        {sliderItems &&
          sliderItems.map((item) => (
            <StyledSlide bg={item.bg} key={item.id} component='div'>
              <Box component='div' className={classes.imgContainer}>
                <Box src={item.img} className={classes.img} component='img' />
              </Box>
              <Box component='div' className={classes.infoContainer}>
                <Typography
                  variant='h1'
                  style={{ fontFamily: 'cursive' }}
                  sx={{
                    animation: `${RGB} 2.5s infinite`,
                    alignItems: 'center',
                  }}
                >
                  {SALE}
                </Typography>
                <Typography className={classes.title} component='h1'>
                  {item.title}
                </Typography>
                <Typography className={classes.description} component='p'>
                  {item.description}
                </Typography>
                <Box
                  component='button'
                  className={classes.btn}
                  onClick={() => handleShowMoreClicked(item.name)}
                >
                  Show More
                </Box>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Box
                  component='button'
                  className={classes.btn}
                  onClick={() => handleShowMoreClicked('')}
                >
                  Show All Products
                </Box>
              </Box>
            </StyledSlide>
          ))}
      </StyledWrapper>
      <StyledArrow
        component='div'
        direction={right}
        onClick={() => handleSliderClicked(right)}
      >
        <ArrowRight />
      </StyledArrow>
    </StyledContainer>
  );
};

export default SliderOffers;
