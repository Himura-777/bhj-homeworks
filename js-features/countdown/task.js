const remainingTime = function () {
	const time = document.getElementById('timer');
	time.TextContent -= 1;
	if (time.TextContent === 0) {
		alert('Вы победили в конкурсе!');
	}
};

setInterval(remainingTime, 1000);
