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
import AllBookings from './Component/Dashboard/Admin/AllBookings/AllBookings';
import AddHouse from './Component/Dashboard/Admin/AddHouse/AddHouse';
import MyRent from './Component/Dashboard/Admin/MyRent/MyRent';

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
					<Route path="/apartment/:apartmentId">
						<Apartment />
					</Route>
					<Route path="/admin/allBooking/">
						<AllBookings />
					</Route>
					<Route path="/admin/addHouse/">
						<AddHouse />
					</Route>
					<Route path="/admin/myRent">
						<MyRent />
					</Route>
				</Switch>

			</Router>
		</userContext.Provider>
	);
}

export default App;
