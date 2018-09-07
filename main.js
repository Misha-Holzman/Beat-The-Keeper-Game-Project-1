


const leftGoalBtn = document.querySelector('.leftGoal');
const rightGoalBtn = document.querySelector('.middleGoal');
const middleGoalBtn = document.querySelector('.rightGoal');
const leftGoalNumber = 1;
const rightGoalNumber = 2;
const middleGoalNumber = 2;
let userScore = 0
let goalieScore = 0


function startGame() {
	document.querySelector(".leftGoal").addEventListener("click", kickBallLeft);
	document.querySelector(".middleGoal").addEventListener("click", kickBallMiddle);
	document.querySelector(".rightGoal").addEventListener("click", kickBallRight);

	function kickBallLeft() {
		const keeperNumber = Math.floor(Math.random() * 2) + 1;
		if (leftGoalNumber !== keeperNumber) {
			console.log('GOAL!!')
			userScore += 1;
			if (userScore === 5) {
				alert('You won')
			}
		} else {
			console.log('Save :(')
			goalieScore += 1;
			if (goalieScore === 5) {
				alert('You lost')
			}
		}
	}

	function kickBallMiddle() {
		const keeperNumber = Math.floor(Math.random() * 2) + 1;
		if (middleGoalNumber !== keeperNumber) {
			console.log('GOAL!!')
			userScore += 1;
			if (userScore === 5) {
				alert('You won')
			}
		} else {
			console.log('Save :(')
			goalieScore += 1;
			if (goalieScore === 5) {
				alert('You lost')
			}
		}
	}

	function kickBallRight() {
		const keeperNumber = Math.floor(Math.random() * 2) + 1;
		if (rightGoalNumber !== keeperNumber) {
			console.log('GOAL!!')
			userScore += 1;
			if (userScore === 5) {
				alert('You won')
			}
		} else {
			console.log('Save :(')
			goalieScore += 1;
			if (goalieScore === 5) {
				alert('You lost')
			}
		}
	}
}
startGame()


