import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
//Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './state/actions/auth';
import setAuthToken from './utils/setAuthToken';
import './App.css';
import Routing from './components/routing/Routing';

if (localStorage.token) {
	setAuthToken(localStorage.token);
}

const App = () => {
	useEffect(() => {
		store.dispatch(loadUser());
	}, []);

	return (
		<Provider store={store}>
			<Router>
				<Navbar />
				<Alert />
				<Routing />
			</Router>
		</Provider>
	);
};

export default App;
