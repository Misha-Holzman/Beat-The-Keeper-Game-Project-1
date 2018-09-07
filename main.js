


const leftGoalBtn = document.querySelector('.leftGoal');
const rightGoalBtn = document.querySelector('.middleGoal');
const middleGoalBtn = document.querySelector('.rightGoal');
const leftGoalNumber = 1;
const rightGoalNumber = 2;
const middleGoalNumber = 2;
let userScore = 0
let goalieScore = 0


	document.querySelector(".leftGoal").addEventListener("click", kickBallLeft);
	document.querySelector(".leftGoal").addEventListener("click", animateBallLeft);
	document.querySelector(".middleGoal").addEventListener("click", kickBallMiddle);
	document.querySelector(".rightGoal").addEventListener("click", animateBallRight);


	function animateBallLeft() {
			let ballElement = document.querySelector('#stillBall')
   			ballElement.classList.toggle("ballLeft");
		}

	function kickBallLeft() {
		const keeperNumber = Math.floor(Math.random() * 2) + 1;
		if (leftGoalNumber !== keeperNumber) {
			console.log('GOAL!!')
			userScore++;
			if (userScore === 5) {
				alert('You won')
			}
		} else {
			console.log('Save :(')
			goalieScore++;
			if (goalieScore === 5) {
				alert('You lost')
			}
		}
	}


	function kickBallMiddle() {
		function animateBallMiddle() {
			let ballElement = document.querySelector('#stillBall')
   			ballElement.classList.toggle("ballMiddle");
		}
		animateBallMiddle()

		const keeperNumber = Math.floor(Math.random() * 2) + 1;
		if (middleGoalNumber !== keeperNumber) {
			console.log('GOAL!!')
			userScore++;
			if (userScore === 5) {
				alert('You won')
			}
		} else {
			console.log('Save :(')
			goalieScore++;
			if (goalieScore === 5) {
				alert('You lost')
			}
		}
	}


	function animateBallRight() {
		let ballElement = document.querySelector('#stillBall')
   		ballElement.classList.toggle("ballRight");

   		function kickBallRight() {
		const keeperNumber = Math.floor(Math.random() * 2) + 1;
		if (rightGoalNumber !== keeperNumber) {
			console.log('GOAL!!')
			userScore++;
			if (userScore === 5) {
				alert('You won')
			}
		} else {
			console.log('Save :(')
			goalieScore++;
			if (goalieScore === 5) {
				alert('You lost')
			}
		}
	}
		kickBallRight()
	}
	

	


	














// document.querySelector(".ballContainer").addEventListener('keydown', animateBallLeft)

// function animateBallLeft (evt) {
// 	// const keyName = evt.key;
// 	console.log(evt)
// 	const sideStickAudio = document.querySelector('.sideStick');
// 	if (event.code == 'KeyZ') {
// 		sideStickAudio.play()
// 	}
// };



















