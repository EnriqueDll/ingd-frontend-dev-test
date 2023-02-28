import React from 'react';
import './styles/Sidebar.css';

import { NavLink } from 'react-router-dom';
import largeLogo from '../../assets/images/Logo-IngenieriaDigital.svg';

const Sidebar = () => {
	return (
		<div className='Sidebar'>
			<div className='Sidebar__Navigation'>
				<div className='Sidebar__Logo'>
					<img className='Sidebar__Logo__img' src={largeLogo} />
				</div>
				<div className='Sidebar__Brand'>
					Ingeniería Digital S.A. de C.V.
				</div>
			</div>

			<div className='Buttons-Section'>
				<div className='Buttons-Section__Dashboard'>
					<NavLink className='Link-Sidebar' to='/dashboard'>Dashboard</NavLink>
				</div>
				<div className='Buttons-Section__assistans'>

					<NavLink className='Link-Sidebar' to='/assistants'>Colaboradores</NavLink>
				</div>
			</div>

			<div className='Footer-Sidebar'>
				<div className='Footer-Sidebar__Help'>
					¿Necesitas ayuda?
				</div>
			</div>
		</div >
	);
};

export default Sidebar;