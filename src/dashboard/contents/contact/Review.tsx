import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import {Props} from './type';


export const Review = (props: Props) => {
  const classes = useStyles();
  const {contactInfo} = props;
  const ContactContents = () => {
    const contents = [];
    for (const [key, val] of Object.entries(contactInfo)) {
      contents.push(
          <ListItem className={classes.listItem} key={key}>
            <ListItemText primary={`${key}:`} secondary={<Typography>{val}</Typography>}/>
          </ListItem>,
      );
    }
    return (
      <List disablePadding>
        {contents}
      </List>
    );
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Contact contents
      </Typography>
      <ContactContents/>
    </React.Fragment>
  );
};


const useStyles = makeStyles((theme) => (
  {
    listItem: {
      padding: theme.spacing(1, 0),
    },
    total: {
      fontWeight: 700,
    },
    title: {
      marginTop: theme.spacing(2),
    }
    ,
  }
));
