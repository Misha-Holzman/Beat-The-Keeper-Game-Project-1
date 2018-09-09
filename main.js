


const leftGoalBtn = document.querySelector('.leftGoal');
const rightGoalBtn = document.querySelector('.middleGoal');
const middleGoalBtn = document.querySelector('.rightGoal');
const leftGoalNumber = 1;
const rightGoalNumber = 3;
const middleGoalNumber = 2;
let userScore = 0
let goalieScore = 0


document.querySelector(".leftGoal").addEventListener("click", kickBallLeft);
document.querySelector(".middleGoal").addEventListener("click", kickBallMiddle);
document.querySelector(".rightGoal").addEventListener("click", kickBallRight);



function hideGoalAnimation() {
	let goalScreen = document.querySelector("#goalScreen")
	goalScreen.style.display ='none';
}
hideGoalAnimation()

function hideWinScreen() {
	let winScreen = document.querySelector("#winScreen")
	winScreen.style.display ='none';
}
hideWinScreen()


function hideStartScreen() {

}


function hideLostScreen() {

}




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
			let addToUserScore = document.querySelector(".playerScoreNumber")
			addToUserScore.textContent = userScore

			function showGoalAnimation() {
				let goalScreen = document.querySelector("#goalScreen")
				goalScreen.style.display = '';
				setTimeout(function() {goalScreen.style.display ='none';}, 2000);
			};
			setTimeout(function() {showGoalAnimation()}, 1000);

			if (userScore === 5) {
				function showWinAnimation() {
					let winScreen = document.querySelector("#winScreen")
					winScreen.style.display ='';
				}
				setTimeout(function() {showWinAnimation()}, 1500);
			}
		} else {
			console.log('Save :(')
			goalieScore++;
			let addToGoalieScore = document.querySelector(".goalieScoreNumber")
			addToGoalieScore.textContent = goalieScore
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

			function showGoalAnimation() {
				let goalScreen = document.querySelector("#goalScreen")
				goalScreen.style.display = '';
				setTimeout(function() {goalScreen.style.display ='none';}, 2000);
			};
			setTimeout(function() {showGoalAnimation()}, 1000);
			
			let addToUserScore = document.querySelector(".playerScoreNumber")
			addToUserScore.textContent = userScore
			if (userScore === 5) {
				function hideGoalAnimation() {
					let noGoalScreen = document.querySelector("#goalScreen")
					noGoalScreen.style.display ='none';
				}
				hideGoalAnimation()
				function showWinAnimation() {
					let winScreen = document.querySelector("#winScreen")
					winScreen.style.display = '';
				};
				setTimeout(function() {showWinAnimation()}, 1500);
			}
		} else {
			console.log('Save :(')
			goalieScore++;
			let addToGoalieScore = document.querySelector(".goalieScoreNumber")
			addToGoalieScore.textContent = goalieScore
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

			function showGoalAnimation() {
				let goalScreen = document.querySelector("#goalScreen")
				goalScreen.style.display = '';
				setTimeout(function() {goalScreen.style.display ='none';}, 2000);
			};
			setTimeout(function() {showGoalAnimation()}, 1000);
			
			let addToUserScore = document.querySelector(".playerScoreNumber")
			addToUserScore.textContent = userScore

			if (userScore === 5) {
				function hideGoalAnimation() {
					let noGoalScreen = document.querySelector("#goalScreen")
					noGoalScreen.style.display ='none';
				}
				hideGoalAnimation()
				function showWinAnimation() {
					let winScreen = document.querySelector("#winScreen")
					winScreen.style.display = '';
				};
				setTimeout(function() {showWinAnimation()}, 1500);
			}
		} else {
			console.log('Save :(')
			goalieScore++;
			let addToGoalieScore = document.querySelector(".goalieScoreNumber")
			addToGoalieScore.textContent = goalieScore
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



















