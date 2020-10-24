import React from 'react';
import { Typography } from '@material-ui/core';

export default (props) => {
  return <Typography variant={'h1'}>Product ID: {props.id}</Typography>;
};
