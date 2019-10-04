(()=> {
let pluginScripts = [
	'clock'
]

for (let scripts_i in pluginScripts) {
	let pluginName = `plugins/${pluginScripts[scripts_i]}`

	let scriptName = `${pluginName}.js`
	let script = document.createElement('script')
	script.src = scriptName

	let styleName = `${pluginName}.css`
	let style = document.createElement('link')
	style.href = styleName
	style.rel = 'stylesheet'
	style.type='text/css'

	document.body.appendChild(script)
	document.head.appendChild(style)
	}
})()
