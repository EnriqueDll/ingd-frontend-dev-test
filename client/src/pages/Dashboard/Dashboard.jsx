import React from 'react';
import BlueButton from '../../components/BlueButton/BlueButton';
import './styles/Dashboard.css';

const Dashboard = () => {

	const num = 100;
	const role = "Colaboradores";
	const month = "Febrero";

	return (
		<div className='Dashboard'>
			<div className='Large-Card'>
				<div className='card'>
					<div className='text-card'>
						<h3>
							Buenos días,
						</h3>
						<h2>
							Ingeniería Digital.
						</h2>
						<div className='text-card__letters'>
							<p>
								Bienvenido a Ingeniería Digital.
							</p>
							<p>
								Aquí toda la información de tu empresa
							</p>
						</div>
						<div>
							<BlueButton className='button-card'>Agendar</BlueButton>
						</div>
					</div>
				</div>
			</div>
			<div className='Small-Card'>
				<div className='Blue-Card'>
					<div className='Blue-Card__Content'>
						<div className='top-section'>
							<div className='top-section__button'>{month}</div>
						</div>
						<div className='bottom-section'>
							<h1>{num}</h1>
							<h3>{role}</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
