import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    height: '60vh',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const PageNotFound = () => {
  const classes = useStyles();

  return (
    <Box className={classes.wrapper}>
      <SentimentDissatisfiedIcon color='error' style={{ fontSize: '10rem' }} />
      <Typography variant='h1' color='error'>
        OOPS! Page Not Found
      </Typography>
    </Box>
  );
};

export default PageNotFound;
