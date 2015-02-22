var score = [];
var frames = [];
var i;
var frame;
var playerCount;

//Calclate the score for each player by passing each of the 6 through to the calculative functions
function runThroughPlayers() {
addScoreToArray("player0");
addScoreToArray("player1");
addScoreToArray("player2");
addScoreToArray("player3");
addScoreToArray("player4");
addScoreToArray("player5");
}

//Look at each shot and add the points to the score array
function addScoreToArray(player) {
	for (i = 0; i < 21; i++) {
		if (document.getElementById(player+i).value == "") {
			score[i] = 0;
		}
		else {
			score[i] = document.getElementById(player+i).value;
		}
	}
calculateScore(player);
}


//Calculate total score by totalling points in the score array frame by frame and adding them to the frame array
function calculateScore(player) {
frame = 0;
for (i = 0; i < 19; i += 2) {
	var nextshot = i+1;
	var nextFrame = i+2;
	var secondFrame = i+4;
	
	//STANDARD CALCULATIONS TO FRAME 8
	if (i < 15) {
	
		//3 STRIKES IN A ROW
		if (score[i] == 10 && score[nextFrame] == 10 && score[secondFrame] ==10) {	
			frames[frame] = 30;
		}

		//TWO STRIKES IN A ROW
		else if (score[i] == 10 && score[nextFrame] == 10 && score[secondFrame] !=10) {
			frames[frame] = 20 + parseInt(score[secondFrame]);
		}

		//STRIKE AND A HALF STRIKE
		else if (score[i] == 10 && score[nextFrame] != 10) {
			frames[frame] = 10 + (parseInt(score[nextFrame])+parseInt(score[nextFrame+1]));
		}

		//HALF STRIKE
		else if (score[i] != 10 && parseInt(score[i])+parseInt(score[i+1]) == 10 ) {
			frames[frame] = 10 + parseInt(score[nextFrame]);
		}
		
		//SCORE LESS THAN 10
		else {
			frames[frame] = parseInt(score[i])+parseInt(score[nextshot]);
		}
	}

	//9TH FRAME
	else if ( i == 16) 	{

		//3 STRIKES IN A ROW
		if (score[i] == 10 && score[nextFrame] == 10 && score[nextFrame+1] == 10) {	
			frames[frame] = 30;
		}

		//TWO STRIKES IN A ROW
		else if (score[i] == 10 && score[nextFrame] == 10 && score[nextFrame+1] !=10) {
			frames[frame] = 20 + parseInt(score[nextFrame+1]);
		}

		//STRIKE AND A HALF STRIKE
		else if (score[i] == 10 && score[nextFrame] != 10) {
			frames[frame] = 10 + (parseInt(score[nextFrame])+parseInt(score[nextFrame+1]));
		}

		//HALF STRIKE
		else if (score[i] != 10 && parseInt(score[i])+parseInt(score[i+1]) == 10 ) {
			frames[frame] = 10 + parseInt(score[nextFrame]);
		}
		
		//SCORE LESS THAN 10
		else{
			frames[frame] = parseInt(score[i])+parseInt(score[i+1]);
		}
	}

	//10TH FRAME
	else if (i == 18) {

		//3 STRIKES IN A ROW
		if (score[i] == 10 && score[i+1] == 10 && score[i+2] == 10) {	
			frames[frame] = 30;
		}

		//TWO STRIKES IN A ROW
		else if (score[i] == 10 && score[i+1] == 10 && score[i+2] !=10) {
			frames[frame] = 20 + parseInt(score[i+2]);
		}

		//STRIKE AND A HALF STRIKE
		else if (score[i] == 10 && score[i+1] != 10) {
			frames[frame] = 10 + (parseInt(score[i+1])+parseInt(score[i+2]));
		}

		//HALF STRIKE
		else if (score[i] != 10 && parseInt(score[i])+parseInt(score[i+1]) == 10 ) {
			frames[frame] = 10 + parseInt(score[i+2]);
		}
		
		//SCORE LESS THAN 10
		else{
			frames[frame] = parseInt(score[i])+parseInt(score[i+1]);
		}
	}

	else {
		frames[frame] = 0;
	}
	frame++;
}

//DISPLAY PLAYER SCORE
playerScore = player+"Score";
document.getElementById(playerScore).innerHTML = (parseInt(frames[0])+parseInt(frames[1])+parseInt(frames[2])+parseInt(frames[3])+parseInt(frames[4])+parseInt(frames[5])+parseInt(frames[6])+parseInt(frames[7])+parseInt(frames[8])+parseInt(frames[9]));
}

//Disable Input Box On Name Input
function saveNames() {
document.getElementById('player0Name').disabled = true;
document.getElementById('player1Name').disabled = true;
document.getElementById('player2Name').disabled = true;
document.getElementById('player3Name').disabled = true;
document.getElementById('player4Name').disabled = true;
document.getElementById('player5Name').disabled = true;
}

//Print Page
function printFunction() {
window.print();
}