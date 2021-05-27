import React, { useState, useContext } from 'react';
import IconButton from '@material-ui/core/IconButton';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import AddCircle from '@material-ui/icons/AddCircle';
import { Link, useHistory } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuid } from "uuid";
import {
    Form,
    FormGroup,
    Row,
    Input,
    Button
} from "reactstrap";
import Col from 'reactstrap/lib/Col';


export const AddUser = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        meetname: "",
        meetpin: ""
    });
    const [inputFields, setInputFields] = useState([
        { id: uuid(), pname: '', pemail: '' },
    ]);
    const { addUser } = useContext(GlobalContext);
    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            id: uuid(),
            user,
            inputFields
        }
        console.log(newUser);
        addUser(newUser);
        history.push("/user");
    }
    const { name, email, meetname, meetpin } = user;
    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const { pname, pemail } = inputFields;
    const handleChangeInput = (id, event) => {
        const newInputFields = inputFields.map(i => {
            if (id === i.id) {
                i[event.target.name] = event.target.value
            }
            return i;
        })

        setInputFields(newInputFields);
    }
//for add participant
    const handleAddFields = () => {
        setInputFields([...inputFields, { id: uuid(), pname: '', pemail: '' }])
    }
//for remove participant
    const handleRemoveFields = id => {
        const values = [...inputFields];
        values.splice(values.findIndex(value => value.id === id), 1);
        setInputFields(values);
    }

    return (
        <div className="container d-flex align-items-center flex-column mt-4">
            <div className="card col-12 col-lg-6 login-card m-2 hv-center">

                <Form className="m-4" onSubmit={onSubmit}>
                    <h4>Add User</h4>
                    <FormGroup>
                        <Input type="text" value={name} onChange={onChange} name="name" placeholder="Your name" required></Input>
                    </FormGroup>
                    <FormGroup>
                        <Input type="text" value={email} onChange={onChange} name="email" placeholder="Your email" required></Input>
                    </FormGroup>
                    <Row>
                        <Col>
                            <FormGroup>
                                <Input type="text" value={meetname} onChange={onChange} name="meetname" placeholder="Meeting Name" required></Input>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Input type="text" value={meetpin} onChange={onChange} name="meetpin" placeholder="Meeting pin" ></Input>
                            </FormGroup>
                        </Col>
                    </Row>
                    <h4>Add Participants</h4>
                    <IconButton
                        onClick={handleAddFields}
                    >
                        <AddCircle />
                    </IconButton>
                    {inputFields.map(inputField => (
                        <div key={inputField.id}>
                            <Row>
                                <Col>
                                    <FormGroup>
                                        <Input type="text" value={pname} onChange={event => handleChangeInput(inputField.id, event)} name="pname" placeholder="Participant Name" required></Input>
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup>
                                        <Input type="text" value={pemail} onChange={event => handleChangeInput(inputField.id, event)} name="pemail" placeholder="Participants Email" ></Input>
                                    </FormGroup>
                                </Col>
                                <IconButton disabled={inputFields.length === 1} onClick={() => handleRemoveFields(inputField.id)}>
                                    <HighlightOffIcon />
                                </IconButton>
                            </Row>
                        </div>
                    ))}
                    <Button type="submit" >Submit</Button>
                    <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
                </Form>
            </div>
        </div>
    );
}
