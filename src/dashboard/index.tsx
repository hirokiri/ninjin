// const path = require('path');
import React from 'react';
import {CssBaseline} from '@material-ui/core';
import {
  Adb as AdbIcon,
  Home as HomeIcon,
  Mail as MailIcon,
} from '@material-ui/icons';

import {useLocation, useRouteMatch} from 'react-router-dom';

import {SideBar} from './SideBar';
import {MainBody} from './MainBody';
import {Home} from './contents/Home';
import {SubComponent} from './contents/SubComponent';
import {Contact} from './contents/contact';

import {Content} from './type';
import {FooterBar} from './FooterBar';
import {TitleBar} from './TitleBar';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import clsx from 'clsx';
import {config} from '../scripts/config';


export const Dashboard = () => {
  console.log(config);
  const routeMatch = useRouteMatch();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [selectedContent, setSelectedContent] = React.useState('Home');
  const contents: Array<Content> = [
    {
      name: 'Home',
      // path: path.join(routeMatch.url, ''),
      path: `${routeMatch.path}`,
      isExact: true,
      icon: <HomeIcon/>,
      component: <Home/>,
    },
    {
      name: 'SubComponent',
      // TODO: path cannot be available.
      // path: path.join(routeMatch.url,'sub-component'),
      path: `${routeMatch.path}sub-component`,
      isExact: false,
      icon: <AdbIcon/>,
      component: <SubComponent name={'Unko'}/>,
    },
    {
      name: 'Contact',
      path: `${routeMatch.path}contact`,
      isExact: false,
      icon: <MailIcon/>,
      component: <Contact/>
    },
  ];
  const location = useLocation();
  React.useEffect(() => {
    // setSelectedContent(contents[0].name);
    contents.forEach((content) => {
      if (location.pathname == content.path) {
        setSelectedContent(content.name);
      }
    });
  }, [location]);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <CssBaseline/>
      <TitleBar
        isOpen={open}
        toggleOpen={toggleOpen}
      />
      <div className={classes.leftSide}>
        <SideBar
          isOpen={open}
          contents={contents}
          selectedContent={selectedContent}
          toggleOpen={toggleOpen}
        />
      </div>
      <div className={classes.centerBody}>
        <div className={classes.toolbar}/>
        <div className={classes.mainBody}>
          <MainBody
            isOpen={open}
            contents={contents}
          />
        </div>
        <div className={classes.footer}>
          <FooterBar/>
        </div>
      </div>
    </div>
  );
};


export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'row',
    },
    toolbar: {
      flexBasis: 'auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    leftSide: {
      flexBasis: 'auto',
    },
    centerBody: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
    },
    mainBody: {
      flexGrow: 1,
    },
    footer: {
      flexBasis: 'auto',
    },
  }),
);
