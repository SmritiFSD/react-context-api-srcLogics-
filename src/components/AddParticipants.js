import React, { useContext } from 'react';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import AddCircle from '@material-ui/icons/AddCircle';
import { GlobalContext } from "../context/GlobalState";
import uuid from 'react-uuid'
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
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
    },
}));

const AddParticipants = () => {

    const { participants, dispatchparticipants } = useContext(GlobalContext);
    const classes = useStyles();

    console.log("participants", participants);

    const handleAdd = () => {

        dispatchparticipants({ type: 'addParticipant', payload: { id: uuid(), pame: '', pemail: '' } });
    }

    function handleRemove(participantId) {
        console.log("removeeee", participantId);

        dispatchparticipants({ type: 'removeParticipant', payload: { id: participantId } });
    }
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Add Participants
        </Typography>
                <Avatar className={classes.avatar} onClick={handleAdd}>
                    <AddCircle />
                </Avatar>
                <form className={classes.form} noValidate>
                    {participants.map((participant) => (
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={5}>
                                <TextField
                                    autoComplete="fname"
                                    name="pname"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="pname"
                                    label="Participant Name"
                                    autoFocus
                                    value={participant.pname}
                                    onChange={
                                        (event) => dispatchparticipants(
                                            {
                                                type: 'updateParticipantName',
                                                payload: {
                                                    id: participant.id,
                                                    pname: event.target.value
                                                }
                                            })}
                                />
                            </Grid>
                            <Grid item xs={12} sm={5}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="pemail"
                                    label="Participants Email"
                                    name="pemail"
                                    autoComplete="pemail"
                                    value={participant.pemail}
                                    onChange={
                                        (event) => dispatchparticipants(
                                            {
                                                type: 'updateParticipantEmail',
                                                payload: {
                                                    id: participant.id,
                                                    pemail: event.target.value
                                                }
                                            })}
                                />
                            </Grid>
                            <Grid item xs={12} sm={2}>
                                <Avatar className={classes.avatar} disabled={participants.length === 1} onClick={() => handleRemove(participant.id)}>
                                    <HighlightOffIcon />
                                </Avatar>
                            </Grid>
                        </Grid>
                    ))}
                </form>
            </div>
        </Container>
    );
}


export default AddParticipants;

