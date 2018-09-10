


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

function hideGoalieDiveLeft() {
	let diveLeft = document.querySelector(".goalieDiveLeft")
	diveLeft.style.display ='none';
}
hideGoalieDiveLeft()

function hideGoalieJumpUp() {
	let jumpUp = document.querySelector(".goalieJumpUp")
	jumpUp.style.display ='none';
}
hideGoalieJumpUp()

function hideGoalieDiveRight() {
	let diveRight = document.querySelector(".goalieDiveRight")
	diveRight.style.display ='none';
}
hideGoalieDiveRight()



	function kickBallLeft() {
		function animateBallLeft() {
			let ballElement = document.querySelector('#stillBall')
   			ballElement.classList.add("ballLeft");
   			setTimeout(function() {ballElement.classList.remove("ballLeft")}, 800);
		}
		animateBallLeft()
		
		function hideReadyGoalie() {
			let readyGoalie = document.querySelector(".goalieReady")
			readyGoalie.style.display ='none';
		}
		setTimeout(function() {hideReadyGoalie()}, 300);

		const keeperNumber = Math.floor(Math.random() * 3) + 1;

		function keeperDive() {
			if (keeperNumber === 1) {
				let leftDive = document.querySelector(".goalieDiveLeft")
				leftDive.style.display = '';
			} else if (keeperNumber === 2) {
				let diveUp = document.querySelector(".goalieJumpUp")
				diveUp.style.display = '';
			} else if (keeperNumber === 3) {
				let rightDive = document.querySelector(".goalieDiveRight")
				rightDive.style.display = '';
			}
		}
		setTimeout(function() {keeperDive()}, 300);

		if (leftGoalNumber !== keeperNumber) {
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
			goalieScore++;
			let addToGoalieScore = document.querySelector(".goalieScoreNumber")
			addToGoalieScore.textContent = goalieScore
			if (goalieScore === 5) {
				alert('You lost')
			}
		}

		function keeperDiveReset() {
			let leftDive = document.querySelector(".goalieDiveLeft")
			leftDive.style.display = 'none';

			let diveUp = document.querySelector(".goalieJumpUp")
			diveUp.style.display = 'none';

			let rightDive = document.querySelector(".goalieDiveRight")
			rightDive.style.display = 'none';
		}
		setTimeout(function() {keeperDiveReset()}, 1900);

		function showReadyGoalie() {
			let resetGoalie = document.querySelector(".goalieReady")
			resetGoalie.style.display ='';
		};
		setTimeout(function() {showReadyGoalie()}, 2000);
	}



	function kickBallMiddle() {
		function animateBallMiddle() {
			let ballElement = document.querySelector('#stillBall')
   			ballElement.classList.add("ballMiddle");
			setTimeout(function() {ballElement.classList.remove("ballMiddle")}, 800);   			
		}
		animateBallMiddle()

		function hideReadyGoalie() {
			let readyGoalie = document.querySelector(".goalieReady")
			readyGoalie.style.display ='none';
		}
		setTimeout(function() {hideReadyGoalie()}, 300);

		const keeperNumber = Math.floor(Math.random() * 3) + 1;

		function keeperDive() {
			if (keeperNumber === 1) {
				let leftDive = document.querySelector(".goalieDiveLeft")
				leftDive.style.display = '';
			} else if (keeperNumber === 2) {
				let diveUp = document.querySelector(".goalieJumpUp")
				diveUp.style.display = '';
			} else if (keeperNumber === 3) {
				let rightDive = document.querySelector(".goalieDiveRight")
				rightDive.style.display = '';
			}
		}
		setTimeout(function() {keeperDive()}, 300);

		if (middleGoalNumber !== keeperNumber) {
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
			goalieScore++;
			let addToGoalieScore = document.querySelector(".goalieScoreNumber")
			addToGoalieScore.textContent = goalieScore
			if (goalieScore === 5) {
				alert('You lost')
			}
		}

		function keeperDiveReset() {
			let leftDive = document.querySelector(".goalieDiveLeft")
			leftDive.style.display = 'none';

			let diveUp = document.querySelector(".goalieJumpUp")
			diveUp.style.display = 'none';

			let rightDive = document.querySelector(".goalieDiveRight")
			rightDive.style.display = 'none';
		}
		setTimeout(function() {keeperDiveReset()}, 1900);

		function showReadyGoalie() {
			let resetGoalie = document.querySelector(".goalieReady")
			resetGoalie.style.display ='';
		};
		setTimeout(function() {showReadyGoalie()}, 2000);
	}



   	function kickBallRight() {
		function animateBallRight() {
			let ballElement = document.querySelector('#stillBall')
   			ballElement.classList.add("ballRight");
   			setTimeout(function() {ballElement.classList.remove("ballRight")}, 800);   			
   		}
		animateBallRight()

		function hideReadyGoalie() {
			let readyGoalie = document.querySelector(".goalieReady")
			readyGoalie.style.display ='none';
		}
		setTimeout(function() {hideReadyGoalie()}, 300);

		const keeperNumber = Math.floor(Math.random() * 3) + 1;

		function keeperDive() {
			if (keeperNumber === 1) {
				let leftDive = document.querySelector(".goalieDiveLeft")
				leftDive.style.display = '';
			} else if (keeperNumber === 2) {
				let diveUp = document.querySelector(".goalieJumpUp")
				diveUp.style.display = '';
			} else if (keeperNumber === 3) {
				let rightDive = document.querySelector(".goalieDiveRight")
				rightDive.style.display = '';
			}
		}
		setTimeout(function() {keeperDive()}, 300);

		if (rightGoalNumber !== keeperNumber) {
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
			goalieScore++;
			let addToGoalieScore = document.querySelector(".goalieScoreNumber")
			addToGoalieScore.textContent = goalieScore
			if (goalieScore === 5) {
				alert('You lost')
			}
		}

		function keeperDiveReset() {
			let leftDive = document.querySelector(".goalieDiveLeft")
			leftDive.style.display = 'none';

			let diveUp = document.querySelector(".goalieJumpUp")
			diveUp.style.display = 'none';

			let rightDive = document.querySelector(".goalieDiveRight")
			rightDive.style.display = 'none';
		}
		setTimeout(function() {keeperDiveReset()}, 1900);

		function showReadyGoalie() {
			let resetGoalie = document.querySelector(".goalieReady")
			resetGoalie.style.display ='';
		};
		setTimeout(function() {showReadyGoalie()}, 2000);
	}



















