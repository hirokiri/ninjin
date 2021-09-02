import React from 'react';
import {
  Typography,
  Grid,
  TextareaAutosize,
} from '@material-ui/core';
import {Props} from './type';

export const MessageForm = (props: Props) => {
  const {contactInfo, setContactInfo} = props;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Contact content message
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextareaAutosize
            required
            id="message" name="Message"
            defaultValue="Whatever you would like to."
            value={contactInfo.message}
            onChange={(event) => {
              setContactInfo({
                ...contactInfo,
                message: event.target.value,
              });
            }}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

