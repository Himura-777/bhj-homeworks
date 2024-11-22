const time = document.getElementById('timer');

let timeLeft = parseInt(time.TextContent);

const remainingTime = function () {
	if (timeLeft > 0) {
		time.TextContent = timeLeft;
		timeLeft--;
	} else {
		alert('Вы победили в конкурсе!');
	}
};

setInterval(remainingTime, 1000);
