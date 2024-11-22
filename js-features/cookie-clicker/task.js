const clickerCount = document.getElementById('clicker__counter');
const clickerCookie = document.getElementById('clicker__cookie');

let clickCount = parseInt(clickerCount.textContent);

clickerCookie.onclick = function () {
	clickCount++;
	clickerCount.textContent = clickCount;
	clickerCookie.width = 300;
};
