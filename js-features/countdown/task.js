const time = document.getElementById('timer')

let timeLeft = parseInt(time.textContent, 10)

const remainingTime = setInterval(() => {
	if (timeLeft > 0) {
		timeLeft--
		time.textContent = timeLeft
	} else {
		clearInterval(remainingTime)
		alert('Вы победили в конкурсе!')
	}
}, 1000)
