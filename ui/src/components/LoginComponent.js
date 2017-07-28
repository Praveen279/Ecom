/*eslint-disable no-unused-vars */
import React from 'preact-compat'
/*eslint-enable no-unused-vars */
import '../styles/home.css'

const LoginComponent = (props) => ( //eslint-disable-line no-unused-vars
	<div class='loginBtnContainer'>
    <div><button class='loginUserBtn' onClick={() => props.login({ role: 'CONSUMER', id: 123 })}>Consumer</button></div>
    <div><button class='loginAdminBtn' onClick={() => props.login({ role: 'ADMIN', id: 111 })}>Admin</button></div>
	</div>
)

export default LoginComponent
