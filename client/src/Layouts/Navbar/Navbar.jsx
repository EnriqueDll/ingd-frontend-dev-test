import React from 'react';
import { Link } from 'react-router-dom';
import arrow from '../../assets/images/Icono-Flecha.svg';
import logo from '../../assets/images/Isologo-IngenieriaDigital.svg';
import BlueButton from '../../components/BlueButton/BlueButton';
import useAuth from '../../hooks/useAuth';

import './styles/Navbar.css';

const Navbar = () => {

	const { setUserAuth } = useAuth();

	const handleLogout = () => {
		localStorage.removeItem("user");
		setUserAuth(null);
	};

	return (

		<div className='Navbar'>
			<div className='Navbar__section'>
				<BlueButton className='Button-style'>+ Agendar</BlueButton>
				<img className='Navbar__logo' src={logo} />
			</div>
			<div className='Logout'>
				<li className='Dropdown-li'>
					<img className='Arrow-style' src={arrow} />
					<ul className='Dropdown' >
						<li>
							{/* <Link className='Link-style' to='/' onClick={handleLogout}> Salir </Link> */}
							<Link className='Link-style' onClick={handleLogout}> Salir </Link>
						</li>
					</ul>
				</li>
			</div>
		</div >

	);
};

export default Navbar;
