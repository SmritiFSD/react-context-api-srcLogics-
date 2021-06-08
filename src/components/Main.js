import React from 'react'
import AddMeetingDetails from "./AddMeetingDetails";
import AddParticipants from "./AddParticipants";
import SubmitForm from "./SubmitForm";
function Main() {
    return (
        <div>
            <AddMeetingDetails />
            <AddParticipants />
            <SubmitForm />
        </div>
    )
}

export default Main
