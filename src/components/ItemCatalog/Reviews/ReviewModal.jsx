import React from 'react';
import { IconButton } from '@mui/material';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import useStyles from './styles';
import { Modal } from '@mui/material';
import RateReviewIcon from '@mui/icons-material/RateReview';
import { getReviewByOrderId } from '../../../Services/services';
import Review from './Review/Review';
import NewReview from './NewReview/NewReview';
import { Grid } from '@mui/material';
import { getUser } from '../../../store/StateUser';
import { useSelector } from 'react-redux';

const ReviewModal = ({ item }) => {
  //States
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //Redux - State (User)
  const state = useSelector((s) => s);
  const user = getUser(state);

  //Server Reviews Request by item ID
  const [reviews, setReviews] = React.useState([]);
  const getreviews = async () => {
    //const res = await getReviewByOrderId(item._id);
    const res = await getReviewByOrderId(item._id);
    if (res.status == 200) {
      console.log('got reviews');
      console.log(res.data);
      setReviews(res.data);
    } else {
      console.log('no sexes fuck u');
    }
  };
  if (!reviews.length && open) getreviews();

  return (
    <>
      <IconButton aria-label='Example' onClick={handleOpen}>
        <RateReviewIcon />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box className={classes.modal} maxHeight={400}>
          <Typography></Typography>

          <Grid
            coontainer
            direction={'column'}
            columns={16}
            spacing={2}
            className={classes.grid}
          >
            <Grid item key={0}>
              <NewReview
                review={reviews[0]}
                user={user}
                CloseModal={handleClose}
                item={item}
                reviews={reviews}
              />
            </Grid>
            {reviews.map((review) => (
              <Grid item key={review._id} className={classes.review}>
                <Review review={review} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Modal>
    </>
  );
};

export default ReviewModal;
