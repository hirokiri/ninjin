import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Props} from './type';

export const AddressForm = (props: Props) => {
  const setContactInfo = props.setContactInfo;
  const contactInfo = props.contactInfo;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Your contact address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required error
            id="firstName"
            name="firstName"
            label="First name"
            value={contactInfo.firstName}
            fullWidth
            autoComplete="given-name"
            onChange={(event) => {
              setContactInfo({
                ...contactInfo,
                firstName: event.target.value,
              });
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required error
            id="lastName"
            name="lastName"
            label="Last name"
            value={contactInfo.lastName}
            fullWidth
            autoComplete="family-name"
            onChange={(event) => {
              setContactInfo({
                ...contactInfo,
                lastName: event.target.value,
              });
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required error
            id="zip"
            name="zip"
            label="Zip / Postal code"
            value={contactInfo.zipcode}
            fullWidth
            autoComplete="shipping postal-code"
            onChange={(event) => {
              setContactInfo({
                ...contactInfo,
                zipcode: event.target.value,
              });
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required error
            id="country"
            name="country"
            label="Country"
            value={contactInfo.country}
            fullWidth
            autoComplete="shipping country"
            onChange={(event) => {
              setContactInfo({
                ...contactInfo,
                country: event.target.value,
              });
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required error
            id="address1"
            name="address1"
            label="Address line 1"
            value={contactInfo.address1}
            fullWidth
            autoComplete="shipping address-line1"
            onChange={(event) => {
              setContactInfo({
                ...contactInfo,
                address1: event.target.value,
              });
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            error
            id="address2"
            name="address2"
            label="Address line 2"
            value={contactInfo.address2}
            fullWidth
            autoComplete="shipping address-line2"
            onChange={(event) => {
              setContactInfo({
                ...contactInfo,
                address2: event.target.value,
              });
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            error
            id="email"
            name="email"
            label="Email address"
            fullWidth
            autoComplete="email"
            value={contactInfo.email}
            onChange={(event) => {
              setContactInfo({
                ...contactInfo,
                email: event.target.value,
              });
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            error
            id="tel"
            name="tel"
            label="Telephone number"
            fullWidth
            autoComplete="tel"
            value={contactInfo.tel}
            onChange={(event) => {
              setContactInfo({
                ...contactInfo,
                tel: event.target.value,
              });
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            error
            id="organization"
            name="organization"
            label="Organization"
            value={contactInfo.organization}
            fullWidth
            autoComplete="organization"
            onChange={(event) => {
              setContactInfo({
                ...contactInfo,
                organization: event.target.value,
              });
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            error
            id="position"
            name="position"
            label="Position"
            value={contactInfo.position}
            fullWidth
            autoComplete="organization-title"
            onChange={(event) => {
              setContactInfo({
                ...contactInfo,
                position: event.target.value,
              });
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                color="secondary"
                name="saveAddress"
                checked={contactInfo.isOrganizationAddress}
                // checked={true}
                onChange={(event) => {
                  setContactInfo({
                    ...contactInfo,
                    isOrganizationAddress: event.target.checked,
                  });
                }}
              />
            }
            label="This is organization's address"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

