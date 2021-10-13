import React, { useContext } from 'react'
import useForm from './useForm'
import validate from './loginFormValidationRules'
import { useNavigate } from '@reach/router'
import { userDetailsContext  } from './UserDetailsProvider'

const Form = () => {
	const { values, errors, handleChange, handleSubmit } = useForm( login, validate)
	const navigate = useNavigate()
	const [userDetails, setUserDetails]  = useContext(userDetailsContext)

	async function login() {
		let loginDetails = {
			'username': values.username, 
			'password': values.password,
			'type': 'USER_PASSWORD_AUTH'
		}
		try {
			let result = await fetch("https://api.bybits.co.uk/auth/token", {
				method: 'POST',
				headers: {
					'environment': 'mock',
					'Content-type': 'application/json'
				},
				body: JSON.stringify(loginDetails)
			})
			let accessToken = await result.json()
			setUserDetails(accessToken.access_token)
			navigate(`/details`)
		} catch (e) {
			console.log(e)
		}
	}

	return (
		<div className='container'>
			<div className='column is-6 is-offset-3'>
				<div className='box'>
					<h1>Sign In</h1>
					<form onSubmit={handleSubmit} noValidate>
						<div className='field'>
							<label className='label'>Username</label>	
							<div className='control'>
								<input
									autoComplete='off'
									className={`input ${errors.username && 'is-danger'}`}
									type='username'
									name='username'
									onChange={handleChange}
									value={values.username || ''}
									required
								/>
								{errors.username && (
									<p className='help is-danger'>{errors.username}</p>
								)}
							</div>
						</div>
						<div className='field'>
							<label className='label'>Password</label>	
							<div className='control'>
								<input
									className={`input ${errors.password && 'is-danger'}`}
									type='password'
									name='password'
									onChange={handleChange}
									value={values.password || ''}
									required
								/>
								{errors.password && (
									<p className='help is-danger'>{errors.password}</p>
								)}
							</div>	
						</div>
						<button
							type='submit'
							className='button is-block is-info is-fullwidth'
						>
							Login
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Form
