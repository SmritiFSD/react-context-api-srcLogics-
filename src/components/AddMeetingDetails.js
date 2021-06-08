import React, { useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(3),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
}));


const AddMeetingDetails = () => {
    const classes = useStyles();

    const { meetingDetails, dispatchmeetingDetails } = useContext(GlobalContext);
    console.log('meetingDetails', meetingDetails)

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                <RecordVoiceOverIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Meeting Invitation
        </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="name"
                                label="Your name"
                                name="name"
                                autoComplete="name"
                                value={meetingDetails.name}
                                onChange={(event) => dispatchmeetingDetails({ type: 'updateName', payload: { name: event.target.value } })}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="email"
                                label="Your email"
                                type="email"
                                id="email"
                                autoComplete="email"
                                value={meetingDetails.email}
                                onChange={(event) => dispatchmeetingDetails({ type: 'updateEmail', payload: { email: event.target.value } })}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="meetname"
                                label="Meeting Name"
                                type="meetname"
                                id="meetname"
                                autoComplete="meetname"
                                value={meetingDetails.meetname}
                                onChange={(event) => dispatchmeetingDetails({ type: 'updateMeetName', payload: { meetname: event.target.value } })}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="meetpin"
                                label="Meeting Pin"
                                type="meetpin"
                                id="meetpin"
                                autoComplete="meetpin"
                                value={meetingDetails.meetpin}
                                onChange={(event) => dispatchmeetingDetails({ type: 'updateMeetPin', payload: { meetpin: event.target.value } })}
                            />
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}
export default AddMeetingDetails;