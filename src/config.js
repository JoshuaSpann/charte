let config = {
	api_targets: [
		{ url: window.location.href.substring(0, window.location.href.lastIndexOf('/'))+'/model.json' },
		{ port: 8080, url: null }
	],
	check_for_updates: false,
	plugins: { enabled: true }
}
