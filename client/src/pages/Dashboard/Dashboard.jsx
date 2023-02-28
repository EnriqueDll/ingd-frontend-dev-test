import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Dashboard.css';

const Dashboard = () => {

	/* const navigate = useNavigate();
	const handleLogout = () => {
		localStorage.removeItem("user");
		localStorage.removeItem("password");
		navigate('/');
	  }; */

	return (
		<div className='dashboard'>
			Dashboard
			<button>Salir</button>
		</div>
	);
};

export default Dashboard;
