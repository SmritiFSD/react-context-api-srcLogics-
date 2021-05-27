import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { GlobalContext } from "../context/GlobalState";
import { Heading } from "./Heading";
import {
  Button
} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
const useStyles = makeStyles({
  table: {
    minWidth: 650,
    marginTop: 4,
  },
});

export const UserList = () => {
  const classes = useStyles();
  const { users, removeUser } = useContext(GlobalContext);

  return (
    <div style={{ maxWidth: "40rem", margin: "4rem auto" }}>
      <Heading />
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell><strong>Name</strong></TableCell>
              <TableCell align="center"><strong>Email</strong></TableCell>
              <TableCell align="right"><strong>Meeting Name</strong></TableCell>
              <TableCell align="right"><strong>Meeting Pin</strong></TableCell>
              {/* <TableCell align="right">Participant Name</TableCell>
            <TableCell align="right">Participant Email</TableCell> */}
              <TableCell align="right"><strong>Action</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map(user => (
              <TableRow key={user.id}>
                <TableCell component="th" scope="row">{user.user.name} </TableCell>
                <TableCell align="right">{user.user.email}</TableCell>
                <TableCell align="right">{user.user.meetname}</TableCell>
                <TableCell align="right">{user.user.meetpin}</TableCell>
                {/* {users.map(inputFields => ( 
                  <TableRow key={inputFields.id}>
                    <TableCell>{inputFields.pname}</TableCell>
                    <TableCell>{inputFields.pemail}</TableCell>
                  </TableRow>
                ))} */}

                <TableCell align="right"><Button onClick={() => removeUser(user.id)} color="danger"><FontAwesomeIcon icon={faTrash} /></Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )

}
