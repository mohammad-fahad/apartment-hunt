import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Component/HomePage/Home';
import { createContext, useState } from 'react';
import Login from './Component/HomePage/Login/Login';
import Apartment from './Component/HomePage/Apartmetn/Apartment';

export const userContext = createContext();

function App() {
  const [user, setUser] = useState({
    isSignIn: false,
    name: '',
    Fname: '',
    Lname: '',
    email: '',
    photo: '',
    password: '',
  })
  return (
    <userContext.Provider value={[user, setUser]}>
      <Router >
        <Switch>
          <Route exact path="/">
          <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/apartment/:houseId">
            <Apartment />
          </Route>
        </Switch>

      </Router>
    </userContext.Provider>
  );
}

export default App;
