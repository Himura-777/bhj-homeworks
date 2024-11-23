;(() => {
	let deadCount = 0
	let lostCount = 0

	const updateStats = () => {
		document.getElementById('dead').textContent = deadCount
		document.getElementById('lost').textContent = lostCount
	}

	const resetGame = () => {
		deadCount = 0
		lostCount = 0
		updateStats()
	}

	for (let i = 1; i <= 9; i++) {
		const hole = document.getElementById(`hole${i}`)

		hole.onclick = () => {
			if (hole.className.includes('hole_has-mole')) {
				deadCount++
			} else {
				lostCount++
			}

			updateStats()

			if (deadCount >= 10) {
				alert('Победа! Вы убили 10 кротов!')
				resetGame()
			} else if (lostCount >= 5) {
				alert('Игра окончена. Вы промахнулись 5 раз.')
				resetGame()
			}
		}
	}
})()
