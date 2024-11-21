const deadCount = document.getElementById('dead');
const lostCount = document.getElementById('lost');

for (let index = 1; index <= 9; index++) {
	getHole(index).onclick = () => {
		if (getHole(i).classList.contains('hole_has-mole')) {
			deadCount.textContent++;
		} else {
			lostCount.textContent++;
		}

		if (deadCount === 10) {
			alert('Вы выиграли!');
		} else if (lostCount === 5) {
			alert('Игра окончена. Вы проиграли!');
		}
	};
}
