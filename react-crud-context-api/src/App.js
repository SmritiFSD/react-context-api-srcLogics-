import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
// import { AddUser } from "./components/AddUser";
// import { EditUser } from "./components/EditUser";
import { GlobalProvider } from "./context/GlobalState";

import "bootstrap/dist/css/bootstrap.min.css";
import { UserList } from './components/UserList';

const App = () => {
  return (
    <div >
      <GlobalProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/user" component={UserList} />
          </Switch>
        </Router>
      </GlobalProvider>
    </div>
  )
}

export default App
