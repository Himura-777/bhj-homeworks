const clickerCount = document.getElementById('clicker__counter')
const clickerCookie = document.getElementById('cookie')

let isBig = false

clickerCookie.onclick = function () {
	clickerCount.textContent = parseInt(clickerCount.textContent) + 1

	if (isBig) {
		clickerCookie.style.width = '200px'
		clickerCookie.style.height = '200px'
	} else {
		clickerCookie.style.width = '250px'
		clickerCookie.style.height = '250px'
	}

	isBig = !isBig
}
