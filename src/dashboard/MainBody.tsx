import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Content, DrawerWidth} from './type';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import clsx from 'clsx';

type Props = {
  contents: Array<Content>,
  isOpen: boolean,
}

export const MainBody = (props: Props) => {
  const classes = useStyles();
  return (
    <main className={clsx(
      classes.content,
    )}>
      <Switch>
        {
          props.contents.map((content) => (
            <Route
              exact={content.isExact} path={content.path}
              key={content.name}>
              {content.component}
            </Route>
          ))
        }
      </Switch>
    </main>
  );
};


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      // flexGrow: 1,
      padding: theme.spacing(3),
    },
  }),
);
