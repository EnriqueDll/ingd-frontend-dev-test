import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BlueButton from '../../components/BlueButton/BlueButton';
import InputContainer from '../../components/InputContainer/InputContainer';
import { getUser } from '../../services/auth.service';
import './styles/Login.css';

const Login = () => {

	const navigate = useNavigate();
	const [user, setUser] = useState();
	const [password, setPassword] = useState();

	const login = async e => {
		try {
			e.preventDefault();
			const response = await getUser({
				user,
				password
			});
			if ('nombre' in response) {
				localStorage.setItem('user', JSON.stringify(response['user']));
				localStorage.setItem('password', JSON.stringify(response['password']));
				navigate('/dashboard');
			}
		} catch (error) {
			return console.error(`Algo salio mal`, error);
		}
	}
	return (

		<div className='login'>
			<div className='parent'>
				<div className='parent-title'>
					<h1>
						Bienvenido a Ingeniería Digital
					</h1>
					<p className='p-style'>
						Ingresa tus datos para acceder a tu cuenta
					</p>
					<div className='section-form'>
						<form className='form-style' onSubmit={login}>
							<InputContainer>
								<label className='label-side'>Correo Electronico</label>
								<input
									type='email'
									name='email'
									id='email'
									onChange={e => setUser(e.target.value)} />
							</InputContainer>
							<InputContainer>
								<label className='label-side'>Contraseña</label>
								<input
									type='password'
									name='password'
									id='password'
									onChange={e => setPassword(e.target.value)} />
							</InputContainer>
							<div className='margin-button'>
								<BlueButton type="submit">Ingresar</BlueButton>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div >

	);
};

export default Login;
