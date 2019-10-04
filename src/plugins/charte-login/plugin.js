(()=>{
let loginSplash = document.createElement('div')
loginSplash.classList.add('splash')

let loginHeader = document.createElement('h1')
loginHeader.innerHTML = 'Open Charte Login'

let usernameField = document.createElement('input')
usernameField.type = 'text'
usernameField.id = 'plugin--charte-login_user'
usernameField.hint = 'plugin--charte-login_user'

let passwordField = document.createElement('input')
passwordField.type = 'password'
passwordField.id = 'plugin--charte-login_password'

let loginButton = document.createElement('button')
loginButton.innerHTML = 'Login'

loginSplash.appendChild(loginHeader)
loginSplash.appendChild(usernameField)
loginSplash.appendChild(passwordField)
loginSplash.appendChild(loginButton)

document.querySelector('#splash').innerHTML = loginSplash.innerHTML

document.querySelector('#splash button').onclick = ()=> {
	let usrField = document.querySelector('#plugin--charte-login_user')
	let pwdField = document.querySelector('#plugin--charte-login_password')
	if (usrField.value == '' || pwdField.value == '') {
		alert('Invalid Username or Password')
		usrField.classList.add('error')
		pwdField.classList.add('error')
		return
	}
	usrField.classList.remove('error')
	pwdField.classList.remove('error')
	splash.classList.add('hidden')
}
document.querySelector('.logout').onclick = ()=> {
	document.querySelector('#splash').classList.remove('hidden')
}
})()
