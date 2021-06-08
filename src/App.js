import React from 'react';
import GlobalProvider from './context/GlobalState';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from './components/Main';
import MeetingConfirmation from './components/MeetingConfirmation';
const App = () => {
  return (
    <div >
      <GlobalProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/confirmationPage" component={MeetingConfirmation} />
          </Switch>
        </Router>
      </GlobalProvider>
    </div>
  )
}

export default App
