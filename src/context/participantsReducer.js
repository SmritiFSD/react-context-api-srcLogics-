export default (state, action) => {
    switch (action.type) {
      case 'addParticipant':
        return [
          ...state,
          action.payload
        ]
      case 'removeParticipant':
        return state.filter((participant)=> participant.id !== action.payload.id)

        case 'updateParticipantName':
          return state.map((participant) =>{
            console.log(action.payload.pname)
            if(participant.id === action.payload.id) {
             return{...participant,
              pname:action.payload.pname,
              // pemail:action.payload.pemail,
            }
            }
            else {
              return participant
            }
          })
          case 'updateParticipantEmail':
            return state.map((participant)=>{
              console.log(action.payload.pemail)
              if (participant.id=== action.payload.id){
                return{
                  ...participant,
                  pemail:action.payload.pemail
                }
              }
              else{
                return participant
              }
            })
          
      default:
        return state;
    }
  }