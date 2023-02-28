import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BlueButton from '../../components/BlueButton/BlueButton';
import InputContainer from '../../components/InputContainer/InputContainer';
import useAuth from '../../hooks/useAuth';
import { getUser } from '../../services/auth.service';
import './styles/Login.css';

const Login = () => {

	const navigate = useNavigate();

	const { userAuth, setUserAuth } = useAuth();

	useEffect(() => {
		if (userAuth) return navigate("/dashboard");
	}, [userAuth])

	const [username, setUsername] = useState();
	const [password, setPassword] = useState();

	const login = async e => {
		try {

			e.preventDefault();

			const response = await getUser({
				user: username,
				password
			});

			if ('nombre' in response) {
				localStorage.setItem('user', JSON.stringify(response));
				setUserAuth(response)
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
								<label className='label-side' htmlFor='email'>Correo Electronico</label>
								<input
									type='email'
									name='email'
									id='email'
									value={username}
									onChange={e => setUsername(e.target.value)} />
							</InputContainer>
							<InputContainer>
								<label className='label-side' htmlFor='password'>Contraseña</label>
								<input
									type='password'
									name='password'
									id='password'
									value={password}
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
