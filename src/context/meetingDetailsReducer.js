export default (state, action) => {
  switch (action.type) {
    case 'addMeetingDetails':
      return {
        ...state,
        meetingDetails: action.payload
      }
    case 'updateName':
      console.log('nameee' , action.payload.name)
      return {
        ...state,
        name: action.payload.name
      }

    case 'updateEmail':
      return {
        ...state,
        email: action.payload.email
      }

    case 'updateMeetName':
      return {
        ...state,
        meetname: action.payload.meetname
      }

    case 'updateMeetPin':
      return {
        ...state,
        meetpin: action.payload.meetpin
      }


    default:
      return state;
  }
}