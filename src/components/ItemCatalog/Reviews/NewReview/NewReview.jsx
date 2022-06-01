import React from 'react';
import {
  Card,
  // CardContent
  // Typography,
  Grid,
} from '@material-ui/core';
import Chip from '@mui/material/Chip';
import { addReviewById, updateItemById } from '../../../../Services/services';
import TextField from '@mui/material/TextField';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import MySnackBar from '../../../Alerts/MySnackBar';

import { Divider, Rating } from '@mui/material';

const NewReview = ({ user, CloseModal, item, reviews }) => {
  //   const classes = useStyles(); //Style
  const item_id = item._id;
  //user state
  const name = ' ' + user.first_name + ' ' + user.last_name;
  //Current Date
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = today.getFullYear();
  const datestring = dd + '/' + mm + '/' + yyyy;

  //States
  const [missinginput, setMissinginput] = React.useState(false);
  const [submited, setSubmited] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setMissinginput(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [missinginput]);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setSubmited(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [submited]);

  const [text, setText] = React.useState('');
  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const [rating, setRating] = React.useState(0);
  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleSubmit = () => {
    if (rating === 0 || text === '') {
      setMissinginput(true);
    } else {
      handleAddReview();
      setSubmited(true);
      CloseModal();
      updateItemRating();
    }
  };

  const handleAddReview = async () => {
    const newreview = {
      item_id: item_id,
      customer_name: name,
      date: datestring,
      text: text,
      rating: rating * 2,
    };
    const res = await addReviewById(item_id, newreview);
    return res;
  };

  const updateItemRating = async () => {
    let ratingSum = 0;
    let rateCount = 0;
    for (const r of reviews) {
      ratingSum += r.rating;
      rateCount++;
    }
    const ratingAvg = (ratingSum + rating * 2) / (rateCount + 1);
    const updatedItem = {
      item_name: item.name,
      item_description: item.item_description,
      item_price: item.item_price,
      item_rating: ratingAvg,
      item_quantity: item.item_quantity,
      isAvailable: item.isAvilable,
      item_pictures: item.item_pictures,
    };
    const res = await updateItemById(item._id, updatedItem);
    return res;
  };
  return (
    <>
      <MySnackBar
        open={submited}
        timeout={2000}
        severity='success'
        message='Submited review succesfuly'
      />
      <MySnackBar
        open={missinginput}
        timeout={2000}
        severity='warning'
        message='Missing input (Text / Rating)'
      />
      <Card sx={{ display: 'flex' }}>
        <Grid container>
          <Grid item xs={12}>
            <Grid container direction='row' justifyContent='space-between'>
              <Grid item sm={6}>
                <b>{name + ':'}</b>
                <i>{' (' + datestring + ')'}</i>
              </Grid>

              <Grid
                item
                xl={3}
                lg={3}
                sm={10}
                justifyContent='flex-end'
                sx={{ margin: '0', padding: '0', borderColor: 'grey.500' }}
              >
                <Rating
                  value={rating}
                  precision={0.5}
                  onChange={handleRatingChange}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Divider
              variant='middle'
              flexItem
              color='gray'
              sx={{
                borderBottomWidth: 1,
              }}
            />
          </Grid>
          <Grid item sm={12}>
            <TextField
              // className={classes.textField}
              margin='normal'
              required
              fullWidth
              label='Review'
              id='text'
              value={text}
              onChange={handleTextChange}
              multiline
              rows={4}
              autoFocus
              sx={{ marginLeft: '5%' }}
              style={{ maxWidth: '90%', padding: 'auto' }}
            />
          </Grid>
          <Grid item sm={12}>
            <Grid container direction='row' justifyContent='flex-end'>
              <Grid item xl={3} lg={3}>
                <Chip
                  variant='outlined'
                  type='submit'
                  label='Submit'
                  fullWidth
                  onClick={handleSubmit}
                  sx={{ mt: 3, mb: 2 }}
                  icon={<AddCircleOutlineOutlinedIcon />}
                  style={{
                    maxWidth: '20%',
                    maxHeight: '70px',
                    minWidth: '100px',
                    marginBottom: '10px',
                    textTransform: 'capitalize',
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default NewReview;
