import {Box} from '@material-ui/core';
import {Copyright} from '../components/Copyright';
import React from 'react';
import {useStyles} from './styles';
import clsx from 'clsx';

export const FooterBar = ()=> {
  const classes = useStyles();
  return (
    <footer className={clsx(classes.footer)}>
      <Box pt={4}>
        <Copyright />
      </Box>
    </footer>
  );
};
