import {AppBar, IconButton, Toolbar, Typography} from '@material-ui/core';
import clsx from 'clsx';
import {Menu as MenuIcon} from '@material-ui/icons';
import React from 'react';
import {
  createStyles,
  makeStyles,
  Theme,
  useTheme,
} from '@material-ui/core/styles';

import {DrawerWidth} from './type';

type Props = {
  toggleOpen(): void,
  isOpen: boolean,
}

export const TitleBar = (props: Props) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <AppBar
      position="fixed"
      className={clsx(
          classes.appBar,
          props.isOpen && classes.appBarShift,
      )}
    >
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={props.toggleOpen}
          className={clsx(
              classes.menuButton,
              props.isOpen && classes.hide,
          )}
        >
          <MenuIcon/>
        </IconButton>
        <Typography variant="h5" noWrap>
          Eight Bloom, Inc.
        </Typography>
      </Toolbar>
    </AppBar>
  );
};


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: DrawerWidth,
      width: `calc(100% - ${DrawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
  }),
);
