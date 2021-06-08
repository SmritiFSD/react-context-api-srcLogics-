import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme)=>({
    root: {
      marginTop: theme.spacing(3),
      minWidth: 275,
    },
    title: {
      fontSize: 14,
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
      },
  }));

const MeetingConfirmation = () => {
    const { meetingDetails} = useContext(GlobalContext);
    const { participants} = useContext(GlobalContext);
    const classes = useStyles();
    const history = useHistory();
    const handleUpdate=()=>{
        history.push("/");

        
    }
    return (
        <Container component="main" maxWidth="xs">
       <Card className={classes.root} variant="outlined">
       <CardContent>
         <Typography className={classes.title} color="textSecondary" gutterBottom>
           Meeting Confirmation
         </Typography>
         <Typography variant="body2" component="p">
         Name: {meetingDetails.name}
         </Typography>
         <Typography variant="body2" component="p">
         Email: {meetingDetails.email}
         </Typography>
         <Typography variant="body2" component="p">
         Meeting Name: {meetingDetails.meetname}
         </Typography>
         <Typography variant="body2" component="p">
         Meeting Pin: {meetingDetails.meetpin}
         </Typography>
       </CardContent>
       {participants.map((participant) => (
       <CardContent>
         <Typography variant="body2" component="p">
         Participant Name: {participant.pname}
         </Typography>
         <Typography variant="body2" component="p">
         Participant Email: {participant.pemail}
         </Typography>
       </CardContent>
       ))}
       <CardActions>
         <Button fullWidth
            variant="contained"
            color="primary" onClick={handleUpdate} className={classes.submit}>Update</Button>
       </CardActions>
     </Card>
     </Container>
    )
}

export default MeetingConfirmation
