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
import { createStore } from 'redux';
import allReducers from './Reducer/CombineReducer';
import { Provider } from 'react-redux';
import Dashboard from './Component/Dashboard/Dashboard';


export const userContext = createContext();
const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

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
      <Provider store={store}>
        <Router >
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/apartment/:apartmentId">
              <Apartment />
            </Route>
            <Route path="/admin">
              <Dashboard />
            </Route>
          </Switch>

        </Router>
      </Provider>
    </userContext.Provider>
  );
}

export default App;
