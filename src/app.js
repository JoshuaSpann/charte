let patients = localModel.patients
let htmContent = document.querySelector('#content')

function calculateDOB(patient) {
	if (patient.dob == undefined || patient.age == undefined) return '--/--/----'

	let birthMonth = patient.dob.split('/')[0]
	let birthDay = patient.dob.split('/')[1]
	let birthYear = new Date().getFullYear() - patient.age

	let curDate = new Date()
	let curDay = curDate.getDate()
	let curMonth = curDate.getMonth()+1
	let curYear = curDate.getFullYear()

	if (curMonth <= birthMonth && curDay < birthDay) birthYear++

	return `${patient.dob}/${birthYear}`
}

function generatePatientChartingPage(patient) {
	let section = document.createElement('section')
	let aside = document.createElement('aside')

	for (charts_key in patient.charts) {
		let imgPath = `img/ui_${charts_key.toLowerCase().replace(/ /g,'-').replace("'",'')}.svg`
		let title = document.createElement('h1')
		title.innerHTML = charts_key
		title.id = encodeURI(charts_key)
		section.appendChild(title)

		let chartLink = document.createElement('a')
		chartLink.innerHTML = `<img src='${imgPath}'/>${charts_key}`
		chartLink.href = `#${title.id}`
		aside.appendChild(chartLink)

		let divChartContent = document.createElement('div')
		divChartContent.innerHTML = patient.charts[charts_key]
		section.appendChild(divChartContent)
	}
	if (section.innerHTML == '') section.innerHTML = `No Data to Display for patient #${patient.id}: ${patient.name}`
	section.appendChild(aside)

	return section
}
function generatePatientHeader(patient) {
}

function generatePatientListingTable() {
	let patientsTable = document.createElement('table')
	let patientsTableHeader = document.createElement('tr')
	patientsTable.classList.add('patient-listing')
	patientsTableHeader.innerHTML = `<th/>MRN<th/>Name<th/>DOB`
	patientsTable.appendChild(patientsTableHeader)

	for (let patientes_i in patients) {
		let patient = patients[patientes_i]
		let curPatientRow = document.createElement('tr')
		curPatientRow.innerHTML = `<td/>${patient.id}<td/>${patient.name}<td/>${calculateDOB(patient)}`
		curPatientRow.onclick = ()=>{ loadPatientData(patient) }
		patientsTable.appendChild(curPatientRow)
	}

	return patientsTable
}

function loadPatientData(patient) {
	htmContent.innerHTML = ''
	htmContent.appendChild(generatePatientChartingPage(patient))
}

function populatePatientList() {
	htmContent.innerHTML = ''
	htmContent.appendChild(generatePatientListingTable())
}

function webRequest(reqType, reqEndpoint, reqBody, callback) {
	let xhr = new XMLHttpRequest()
	xhr.onreadystateCchanged = () => {
		callback(xhr.responseText)
	}
	xhr.open(reqType.toUpperCase(), reqEndpoint, true)
	xhr.send(reqBody)
}

populatePatientList()
