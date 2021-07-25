import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

const drawerWidth = 240;


// export const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       display: 'flex',
//     },
//     toolbar: {
//       paddingRight: 24, // keep right padding when drawer closed
//     },
//     toolbarIcon: {
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'flex-end',
//       padding: '0 8px',
//       ...theme.mixins.toolbar,
//     },
//     appBar: {
//       zIndex: theme.zIndex.drawer + 1,
//       transition: theme.transitions.create(['width', 'margin'], {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.leavingScreen,
//       }),
//     },
//     appBarShift: {
//       marginLeft: drawerWidth,
//       width: `calc(100% - ${drawerWidth}px)`,
//       transition: theme.transitions.create(['width', 'margin'], {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//     },
//     menuButton: {
//       marginRight: 36,
//     },
//     hide: {
//       display: 'none',
//     },
//     title: {
//       flexGrow: 1,
//     },
//     drawerPaper: {
//       position: 'relative',
//       whiteSpace: 'nowrap',
//       width: drawerWidth,
//       transition: theme.transitions.create('width', {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//     },
//     drawerPaperClose: {
//       overflowX: 'hidden',
//       transition: theme.transitions.create('width', {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.leavingScreen,
//       }),
//       width: theme.spacing(7),
//       [theme.breakpoints.up('sm')]: {
//         width: theme.spacing(9),
//       },
//     },
//     appBarSpacer: theme.mixins.toolbar,
//     content: {
//       flexGrow: 1,
//       height: '100vh',
//       overflow: 'auto',
//     },
//     container: {
//       paddingTop: theme.spacing(4),
//       paddingBottom: theme.spacing(4),
//     },
//     paper: {
//       padding: theme.spacing(2),
//       display: 'flex',
//       overflow: 'auto',
//       flexDirection: 'column',
//     },
//     fixedHeight: {
//       height: 240,
//     },
//     footer: {
//       padding: theme.spacing(3, 2),
//       marginTop: 'auto',
//       backgroundColor:
//         theme.palette.type === 'light' ?
//           theme.palette.grey[200] : theme.palette.grey[800],
//     },
//   }),
// );

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
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
    title: {
      flexGrow: 1,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
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
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    footer: {
      padding: theme.spacing(3, 2),
      marginTop: 'auto',
      backgroundColor:
        theme.palette.type === 'light' ?
          theme.palette.grey[200] : theme.palette.grey[800],
    },
  }),
);
