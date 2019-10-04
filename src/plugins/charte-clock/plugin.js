(()=> {
let clock = document.createElement('div')
clock.classList.add('plugin--date-clock')
clock.innerHTML = '--:--:--'

let header = document.querySelector('header')
header.insertBefore(clock, header.querySelector('a'))

setInterval(()=>{
    let now = new Date()
    let h = now.getHours(), m = now.getMinutes(), s = now.getSeconds()
    let mm = now.getMonth()+1, dd = now.getDate(), yy = now.getFullYear()
	
	if (h < 10) h = `0${h}`
	if (m < 10) m = `0${m}`
	if (s < 10) s = `0${s}`
	
	let date = `${mm}/${dd}/${yy}`
	let time = `${h}:${m}:${s}`
    document.querySelector('.plugin--date-clock').innerHTML = `${date}&nbsp;&nbsp;&nbsp;${time}`
  }, 1000)

})()
