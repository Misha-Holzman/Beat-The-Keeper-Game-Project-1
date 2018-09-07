


const leftGoalBtn = document.querySelector('.leftGoal');
const rightGoalBtn = document.querySelector('.middleGoal');
const middleGoalBtn = document.querySelector('.rightGoal');
const leftGoalNumber = 1;
const rightGoalNumber = 2;
const middleGoalNumber = 2;
let userScore = 0
let goalieScore = 0


	document.querySelector(".leftGoal").addEventListener("click", kickBallLeft);
	document.querySelector(".middleGoal").addEventListener("click", kickBallMiddle);
	document.querySelector(".rightGoal").addEventListener("click", kickBallRight);



	function kickBallLeft() {
		function animateBallLeft() {
			let ballElement = document.querySelector('#stillBall')
   			ballElement.classList.add("ballLeft");
   			setTimeout(function() {ballElement.classList.remove("ballLeft")}, 800);
		}
		 animateBallLeft()
		
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
   			ballElement.classList.add("ballMiddle");
			setTimeout(function() {ballElement.classList.remove("ballMiddle")}, 800);   			
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



   	function kickBallRight() {
		function animateBallRight() {
			let ballElement = document.querySelector('#stillBall')
   			ballElement.classList.add("ballRight");
   			setTimeout(function() {ballElement.classList.remove("ballRight")}, 800);   			
   		}
		animateBallRight()

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
	
	

	


	














// document.querySelector(".ballContainer").addEventListener('keydown', animateBallLeft)

// function animateBallLeft (evt) {
// 	// const keyName = evt.key;
// 	console.log(evt)
// 	const sideStickAudio = document.querySelector('.sideStick');
// 	if (event.code == 'KeyZ') {
// 		sideStickAudio.play()
// 	}
// };



















