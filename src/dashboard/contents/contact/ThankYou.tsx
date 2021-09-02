import Typography from '@material-ui/core/Typography';
import React from 'react';
import {Props} from './type';

export const ThankYou = (props: Props) => {
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Thank you for your message.
      </Typography>
      <Typography variant="subtitle1">
        Your contact number is #{props.contactInfo.contactId}. We have emailed your contact
        message, and will
        contact you from our staff.
      </Typography>
    </>
  );
};

