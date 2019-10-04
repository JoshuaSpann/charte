(()=> {
let scripts = [
	'registration-key',
	'config',
	'model',
	'plugins',
	'app'
]

for (let scripts_i in scripts) {
	let scriptName = scripts[scripts_i]+'.js'
	let script = document.createElement('script')
	script.src = scriptName
	document.body.appendChild(script)
}
})()
