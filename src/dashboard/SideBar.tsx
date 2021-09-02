import React from 'react';
import clsx from 'clsx';
import {
  createStyles,
  makeStyles,
  Theme,
  useTheme,
} from '@material-ui/core/styles';
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@material-ui/core';
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Mail as MailIcon,
} from '@material-ui/icons';
import {Link} from 'react-router-dom';
// import {useStyles} from './styles';
import {Content, DrawerWidth} from './type';


interface Props {
  isOpen: boolean,

  toggleOpen(): void,

  contents: Array<Content>,
  selectedContent: string,
}

export const SideBar = (props: Props) => {
  const classes = useStyles();
  const theme = useTheme();
  const isOpen = props.isOpen;
  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer,
        isOpen && classes.drawerOpen,
        !isOpen && classes.drawerClose,
      )}
      classes={{
        paper: clsx(classes.drawer,
          isOpen && classes.drawerOpen,
          !isOpen && classes.drawerClose),
      }}
    >
      <div className={classes.toolbar}>
        <Typography variant="h6" align="left">
          Menu
        </Typography>
        <IconButton onClick={props.toggleOpen}>
          {
            (theme.direction === 'rtl' && props.isOpen) ||
            (theme.direction === 'ltr' && !props.isOpen) ?
              <ChevronRightIcon/> : <ChevronLeftIcon/>
          }
        </IconButton>
      </div>
      <Divider/>
      <List>
        {props.contents.map((content: Content) => (
          <Link to={content.path} key={content.name}>
            <ListItem
              button
              key={content.name}
              disabled={props.selectedContent == content.name}>
              <ListItemIcon>{content.icon}</ListItemIcon>
              <ListItemText primary={content.name}/>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider/>
      <List>
        <ListItem button key={'Contact'}>
          <ListItemIcon><MailIcon/></ListItemIcon>
          <ListItemText primary={'Contact'}/>
        </ListItem>
      </List>
    </Drawer>
  );
};


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: DrawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: DrawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    // content: {
    //   flexGrow: 1,
    //   padding: theme.spacing(3),
    // },

  }),
);
