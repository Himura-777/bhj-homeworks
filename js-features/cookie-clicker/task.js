const clickerCount = document.getElementById('clicker__counter');
const clickerCookie = document.getElementById('clicker__cookie');
clickerCookie.onclick = function () {
	clickerCount.textContent += 1;
	clickerCookie.width = 300;
};
