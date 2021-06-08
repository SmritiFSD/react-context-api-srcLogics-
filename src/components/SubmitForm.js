import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SubmitForm = () => {
  const { meetingDetails } = useContext(GlobalContext);
  const { participants } = useContext(GlobalContext);
  const classes = useStyles();
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    const newMeetingDetails = {

      meetingDetails,
      participants
    }
    console.log(newMeetingDetails)
    history.push("/confirmationPage");

  }


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <form className={classes.form} noValidate>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={onSubmit}
          >
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default SubmitForm;
