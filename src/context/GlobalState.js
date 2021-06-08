import React, { createContext, useReducer } from 'react';
import meetingDetailsReducer from './meetingDetailsReducer';
import participantsReducer from './participantsReducer';
import notificationReducer from './notificationReducer';
import { v4 as uuidv4 } from "uuid";

//initial state
const notifications = [
  {
    id: uuidv4(),
    type: "SUCCESS",
    title: "Successfuly fetched data",
    message: "Successfully retrieved all posts",
  },
  {
    id: uuidv4(),
    type: "INFO",
    title: "Informational title",
    message: "This is for your info",
  },
  {
    id: uuidv4(),
    type: "WARNING",
    title: "warning title",
    message: "This is a warning message",
  },
  {
    id: uuidv4(),
    type: "DANGER",
    title: "Error title",
    message: "This is an error message",
  },
];

//create context
export const GlobalContext = createContext();

//provider
const GlobalProvider = ({ children }) => {
  const [meetingDetails, dispatchmeetingDetails] = useReducer(meetingDetailsReducer, {
    name:'',
    email:'',
    meetname:'',
    meetpin:''
  });
  const [participants, dispatchparticipants] = useReducer(participantsReducer, []);
  const [notification, dispatchnotification] = useReducer(notificationReducer, notifications);

  const context = {
    meetingDetails,
    dispatchmeetingDetails,
    participants,
    dispatchparticipants,
    notification,
    dispatchnotification
  }
  return (

      <GlobalContext.Provider value={ context }>
        {children}
      </GlobalContext.Provider>

  )
}

export default GlobalProvider;