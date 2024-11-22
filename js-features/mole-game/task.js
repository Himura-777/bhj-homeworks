const deadCount = document.getElementById('dead');
const lostCount = document.getElementById('lost');

for (let index = 1; index <= 9; index++) {
	getHole(i).onclick = function () {
		if (getHole(i).classList.contains('hole_has-mole')) {
			deadCount.textContent++;
			if (deadCount === 10) {
				alert('Вы выиграли!');
			}
		} else {
			lostCount.textContent++;
			if (lostCount === 5) {
				alert('Игра окончена. Вы проиграли!');
			}
		}
	};
}
