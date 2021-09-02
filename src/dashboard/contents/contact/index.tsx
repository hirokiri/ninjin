import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {AddressForm} from './AddressForm';
import {MessageForm} from './MessageForm';
import {Review} from './Review';
import {ThankYou} from './ThankYou';
import {ContactInfo} from './type';
import {sendReplyContent} from '../../../scripts/emailjs';
import {config} from '../../../scripts/config';

const initContactInfo: ContactInfo = {
  contactId: 0,
  firstName: '',
  lastName: '',
  country: '',
  zipcode: '',
  address1: '',
  address2: '',
  tel: '',
  email: '',
  organization: '',
  position: '',
  isOrganizationAddress: false,
  message: '',
};


const steps = [
  'Your address', 'Contact contents', 'Review your message'];

const getStepContent = (
    step: number, contactInfo: ContactInfo, setContactInfo) => {
  const props = {
    setContactInfo: setContactInfo,
    contactInfo: contactInfo,
  };
  switch (step) {
    case 0:
      return <AddressForm
        setContactInfo={setContactInfo}
        contactInfo={contactInfo}
      />;
    case 1:
      return <MessageForm
        setContactInfo={setContactInfo}
        contactInfo={contactInfo}
      />;
    case 2:
      return <Review
        setContactInfo={setContactInfo}
        contactInfo={contactInfo}
      />;
    case 3:
      return <ThankYou
        setContactInfo={setContactInfo}
        contactInfo={contactInfo}
      />;
    default:
      throw new Error('Unknown step');
  }
};

export const Contact = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState<number>(0);
  const [contactInfo, setContactInfo] = React.useState<ContactInfo>(initContactInfo);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSendAndNext = () => {
    const data = {
      contact_id: contactInfo.contactId,
      message: contactInfo.message,
      to_name: `${contactInfo.firstName} ${contactInfo.lastName}`,
      from_name: config.our.name,
      to_email: contactInfo.email,
      from_email: config.our.email,
      reply_email: config.our.email,
    };
    sendReplyContent(data);
    setActiveStep(activeStep + 1);
  };

  React.useEffect(() => {
    setContactInfo({
      ...contactInfo,
      contactId: Math.random() * 100000 | 0,
    });
  }, []);

  return (
    <React.Fragment>
      <CssBaseline/>
      <Paper className={classes.paper}>
        <Typography component="h1" variant="h4" align="center">
          Contact
        </Typography>
        <Stepper activeStep={activeStep} className={classes.stepper}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <React.Fragment>
          {activeStep === steps.length ? (
            <React.Fragment>
              <ThankYou
                setContactInfo={setContactInfo}
                contactInfo={contactInfo}
              />
            </React.Fragment>
          ) : (
            <React.Fragment>
              {
                getStepContent(activeStep, contactInfo, setContactInfo)
              }
              <div className={classes.buttons}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} className={classes.button}>
                    Back
                  </Button>
                )}
                <Button
                  variant="contained"
                  color="primary"
                  onClick={
                    activeStep === steps.length - 1 ?
                      handleSendAndNext : handleNext}
                  className={classes.button}
                >
                  {activeStep === steps.length - 1 ? 'Send message.' : 'Next'}
                </Button>
              </div>
            </React.Fragment>
          )}
        </React.Fragment>
      </Paper>
    </React.Fragment>
  );
};


const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));
