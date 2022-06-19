import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import './Style/particles.css';
import LandingPage from './Pages/LandingPage';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import { SideContext } from './Context/SideContext';
import Dashboard from './Pages/Dashboard';
import Manage from './Pages/Manage';
import Create from './Pages/Create';
import { AuthContext } from './Config/Auth';
import { PrivateRoute, RestrictedRoute } from './Config/PrivateRoute';

function App() {
	const [count, setCount] = useState(0);

	const [id, setId] = useState(JSON.parse(localStorage.getItem('id')));
	const [token, setToken] = useState(JSON.parse(localStorage.getItem('token')));

	const SetAndGetToken = (token, id) => {
		localStorage.setItem('token', JSON.stringify(token));
		localStorage.setItem('id', JSON.stringify(id));
		setToken(token);
		setId(id);
	};

	const SideContextItem = {
		home: true,
		dashboard: false,
		manage: false,
		profile: false,
	};

	return (
		<AuthContext.Provider value={{ token, id, SetAndGetToken }}>
			<SideContext.Provider value={SideContextItem}>
				<Routes>
					<Route
						path='/login'
						element={
							<RestrictedRoute>
								<Login />
							</RestrictedRoute>
						}
					/>
					<Route
						path='/signup'
						element={
							<RestrictedRoute>
								<Signup />
							</RestrictedRoute>
						}
					/>
					<Route path='/' element={<LandingPage />} />
					<Route
						path='/home'
						element={
							<PrivateRoute>
								<Home />
							</PrivateRoute>
						}
					/>
					<Route
						path='/dashboard'
						element={
							<PrivateRoute>
								<Dashboard />
							</PrivateRoute>
						}
					/>
					<Route
						path='/manage-it'
						element={
							<PrivateRoute>
								<Manage />
							</PrivateRoute>
						}
					/>
					<Route
						path='/manage-it/create'
						element={
							<PrivateRoute>
								<Create />
							</PrivateRoute>
						}
					/>
					<Route
						path='/profile'
						element={
							<PrivateRoute>
								<Profile />
							</PrivateRoute>
						}
					/>
				</Routes>
			</SideContext.Provider>
		</AuthContext.Provider>
	);
}

export default App;
