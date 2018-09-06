






const leftGoalBtn = document.querySelector('.leftGoal');
const rightGoalBtn = document.querySelector('.middleGoal');
const middleGoalBtn = document.querySelector('.rightGoal');
const leftGoalNumber = 1;
const rightGoalNumber = 2;
const middleGoalNumber = 3;
// const keeperNumber = Math.floor(Math.random() * 3) + 1;


document.querySelector(".leftGoal").addEventListener("click", kickBallLeft);
document.querySelector(".middleGoal").addEventListener("click", kickBallMiddle);
document.querySelector(".rightGoal").addEventListener("click", kickBallRight);


function kickBallLeft() {
	const keeperNumber = Math.floor(Math.random() * 3) + 1;
	if (leftGoalNumber !== keeperNumber) {
		console.log('GOAL!!')
	} else {
		console.log('Save :(')
	}
}

function kickBallMiddle() {
	const keeperNumber = Math.floor(Math.random() * 3) + 1;
	if (middleGoalNumber !== keeperNumber) {
		console.log('GOAL!!')
	} else {
		console.log('Save :(')
	}
}

function kickBallRight() {
	const keeperNumber = Math.floor(Math.random() * 3) + 1;
	if (rightGoalNumber !== keeperNumber) {
		console.log('GOAL!!')
	} else {
		console.log('Save :(')
	}
}








// leftGoalBtn.addEventListener('click',(event) => {
// 	let targetBtn = event.target.innerText;
// 	return leftGoalNumber
// });



// document.addEventListener('click', shootLeftGoal)

// function shootLeftGoal (evt) {
// 	// const keyName = evt.key;
// 	console.log(evt)
// 	const leftGoal = document.querySelector('.sideStick');
// 	if (event.code == 'KeyZ') {
// 		leftGoal.play()
// 	}
// };


// let targetBtn = event.target.innerText;
// 	// if button innerHTML === kick
// 	// then play audio file
// 	if (targetBtn == 'left-goal') { 
// 		Math.floor(Math.random() * 1) + 1;
		

