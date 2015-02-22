//ARRAYS TO LOG SCORE SHOT BY SHOT
var playerOnescore = [];
var playerTwoscore = [];
var playerThreescore = [];
var playerFourscore = [];
var playerFivescore = [];
var playerSixscore = [];

//ARRAYS TO LOG SCORE FRAME BY FRAME
var playerOneframes = [];
var playerTwoframes = [];
var playerThreeframes = [];
var playerFourframes = [];
var playerFiveframes = [];
var playerSixframes = [];

//COUNTERS
var shot;
var frame;
var scoreArrayPosition;
var scoreInputBox;

var Names = [];//unused so far

//VARIABLES TO HOLD SPECIFIC PLAYER ARRAY NAMES
var playerFrameArray;
var finalScoreCount;

function frameValidation(shot)
{

	if (shot == 'player00'  && document.getElementById('player00').value < 10)
	{
		document.getElementById('player01').disabled = false;
	}
	if (shot == 'player01'  && document.getElementById('player01').value < 10 && frame == 10)
	{
		document.getElementById('player02').disabled = false;
	}
	
	if (shot == 'player10'  && document.getElementById('player10').value < 10)
	{
		document.getElementById('player11').disabled = false;
	}
	if (shot == 'player11'  && document.getElementById('player11').value < 10 && frame == 10)
	{
		document.getElementById('player12').disabled = false;
	}
	
	if (shot == 'player20'  && document.getElementById('player20').value < 10)
	{
		document.getElementById('player21').disabled = false;
	}
	if (shot == 'player21'  && document.getElementById('player21').value < 10 && frame == 10)
	{
		document.getElementById('player22').disabled = false;
	}
	
	if (shot == 'player30'  && document.getElementById('player30').value < 10)
	{
		document.getElementById('player31').disabled = false;
	}
	if (shot == 'player31'  && document.getElementById('player31').value < 10 && frame == 10)
	{
		document.getElementById('player32').disabled = false;
	}
	
	if (shot == 'player40'  && document.getElementById('player40').value < 10)
	{
		document.getElementById('player41').disabled = false;
	}
	if (shot == 'player41'  && document.getElementById('player41').value < 10 && frame == 10)
	{
		document.getElementById('player42').disabled = false;
	}
	
	if (shot == 'player50'  && document.getElementById('player50').value < 10)
	{
		document.getElementById('player51').disabled = false;
	}
	if (shot == 'player51'  && document.getElementById('player51').value < 10 && frame == 10)
	{
		document.getElementById('player52').disabled = false;
	}
	
}


function nameValidation(name)
{
	if (name == 0) 
	{
	document.getElementById('player1Name').disabled = false;
	}
	if (name == 1) 
	{
	document.getElementById('player2Name').disabled = false;
	}
	if (name == 2) 
	{
	document.getElementById('player3Name').disabled = false;
	}
	if (name == 3) 
	{
	document.getElementById('player4Name').disabled = false;
	}
	if (name == 4) 
	{
	document.getElementById('player5Name').disabled = false;
	}
}

function hideFrameScores() 
{
	var elem = document.getElementById('frameScores');
	elem.style.display = 'none'; 
	var elem = document.getElementById('prevNext');
	elem.style.display = 'none';
	var elem = document.getElementById('restart');
	elem.style.display = 'none';
	var elem = document.getElementById('print');
	elem.style.display = 'none';
	var elem = document.getElementById('print');
	elem.style.display = 'none';
	var elem = document.getElementById('calculateTotal');
	elem.style.display = 'none';
}

//Calclate the score for each player by passing each of the 6 through to the calculative functions
function runThroughPlayers() 
{
document.getElementById('player01').disabled = true;
document.getElementById('player11').disabled = true;
document.getElementById('player21').disabled = true;
document.getElementById('player31').disabled = true;
document.getElementById('player41').disabled = true;
document.getElementById('player51').disabled = true;
	
		
//if Names[0] not equal to nothing/undefined - then ignore
	
		addScoreToArray("player0");
		addScoreToArray("player1");
		addScoreToArray("player2");
		addScoreToArray("player3");
		addScoreToArray("player4");
		addScoreToArray("player5");
		
		
		if (frame == 9)
		{
			var elem = document.getElementById('nextFrame');
			elem.style.display = 'none';
			var elem = document.getElementById('calculateTotal');
			elem.style.display = 'block';
			var elem = document.getElementById('player02');
			elem.style.display = 'block';
			var elem = document.getElementById('player12');
			elem.style.display = 'block';
			var elem = document.getElementById('player22');
			elem.style.display = 'block';
			var elem = document.getElementById('player32');
			elem.style.display = 'block';
			var elem = document.getElementById('player42');
			elem.style.display = 'block';
			var elem = document.getElementById('player52');
			elem.style.display = 'block';
			document.getElementById('playerOneShot3Label').style.visibility = "visible";
			document.getElementById('playerTwoShot3Label').style.visibility = "visible";
			document.getElementById('playerThreeShot3Label').style.visibility = "visible";
			document.getElementById('playerFourShot3Label').style.visibility = "visible";
			document.getElementById('playerFiveShot3Label').style.visibility = "visible";
			document.getElementById('playerSixShot3Label').style.visibility = "visible";
			
		}
		frame++;
		document.getElementById("currentFrame").innerHTML = "Frame "+frame;
		
		
		document.getElementById('player00').value = "";
	document.getElementById('player10').value = "";
	document.getElementById('player20').value = "";
	document.getElementById('player30').value = "";
	document.getElementById('player40').value = "";
	document.getElementById('player50').value = "";
	document.getElementById('player01').value = "";
	document.getElementById('player11').value = "";
	document.getElementById('player21').value = "";
	document.getElementById('player31').value = "";
	document.getElementById('player41').value = "";
	document.getElementById('player51').value = "";
	document.getElementById('player02').value = "";
	document.getElementById('player12').value = "";
	document.getElementById('player22').value = "";
	document.getElementById('player32').value = "";
	document.getElementById('player42').value = "";
	document.getElementById('player52').value = "";
	
}

function calculateTotalScore() {
	var elem = document.getElementById('calculateTotal');
	elem.style.display = 'none';
	var elem = document.getElementById('print');
	elem.style.display = 'block';
	var elem = document.getElementById('totalScoresPlayer0');
	elem.style.display = 'block';
	var elem = document.getElementById('totalScoresPlayer1');
	elem.style.display = 'block';
	var elem = document.getElementById('totalScoresPlayer2');
	elem.style.display = 'block';
	var elem = document.getElementById('totalScoresPlayer3');
	elem.style.display = 'block';
	var elem = document.getElementById('totalScoresPlayer4');
	elem.style.display = 'block';
	var elem = document.getElementById('totalScoresPlayer5');
	elem.style.display = 'block';
	
	var elem = document.getElementById('player00');
	elem.style.display = 'none';
	var elem = document.getElementById('player10');
	elem.style.display = 'none';
	var elem = document.getElementById('player20');
	elem.style.display = 'none';
	var elem = document.getElementById('player30');
	elem.style.display = 'none';
	var elem = document.getElementById('player40');
	elem.style.display = 'none';
	var elem = document.getElementById('player50');
	elem.style.display = 'none';
	var elem = document.getElementById('player01');
	elem.style.display = 'none';
	var elem = document.getElementById('player11');
	elem.style.display = 'none';
	var elem = document.getElementById('player21');
	elem.style.display = 'none';
	var elem = document.getElementById('player31');
	elem.style.display = 'none';
	var elem = document.getElementById('player41');
	elem.style.display = 'none';
	var elem = document.getElementById('player51');
	elem.style.display = 'none';
	var elem = document.getElementById('player02');
	elem.style.display = 'none';
	var elem = document.getElementById('player12');
	elem.style.display = 'none';
	var elem = document.getElementById('player22');
	elem.style.display = 'none';
	var elem = document.getElementById('player32');
	elem.style.display = 'none';
	var elem = document.getElementById('player42');
	elem.style.display = 'none';
	var elem = document.getElementById('player52');
	elem.style.display = 'none';
	
	document.getElementById('playerOneShot1Label').style.visibility = "hidden";
	document.getElementById('playerOneShot2Label').style.visibility = "hidden";
	document.getElementById('playerOneShot3Label').style.visibility = "hidden";
	document.getElementById('playerTwoShot1Label').style.visibility = "hidden";
	document.getElementById('playerTwoShot2Label').style.visibility = "hidden";
	document.getElementById('playerTwoShot3Label').style.visibility = "hidden";
	document.getElementById('playerThreeShot1Label').style.visibility = "hidden";
	document.getElementById('playerThreeShot2Label').style.visibility = "hidden";
	document.getElementById('playerThreeShot3Label').style.visibility = "hidden";
	document.getElementById('playerFourShot1Label').style.visibility = "hidden";
	document.getElementById('playerFourShot2Label').style.visibility = "hidden";
	document.getElementById('playerFourShot3Label').style.visibility = "hidden";
	document.getElementById('playerFiveShot1Label').style.visibility = "hidden";
	document.getElementById('playerFiveShot2Label').style.visibility = "hidden";
	document.getElementById('playerFiveShot3Label').style.visibility = "hidden";
	document.getElementById('playerSixShot1Label').style.visibility = "hidden";
	document.getElementById('playerSixShot2Label').style.visibility = "hidden";
	document.getElementById('playerSixShot3Label').style.visibility = "hidden";
	
	addScoreToArray("player0");
	calculateScore("player0");
	addScoreToArray("player1");
	calculateScore("player1");
	addScoreToArray("player2");
	calculateScore("player2");
	addScoreToArray("player3")
	calculateScore("player3");
	addScoreToArray("player4")
	calculateScore("player4");
	addScoreToArray("player5")
	calculateScore("player5");
}

//Look at each shot and add the points to the score array
function addScoreToArray(player) 
{
	shot = frame*2-2;
	scoreInputBox = 0;
	if (frame < 10) 
	{
		while (scoreInputBox < 2) 
		{
			if (document.getElementById(player+scoreInputBox).value == "") 
			{
				if (player == "player0") 
				{
					playerOnescore[shot] = 0;
				}
				else if (player == "player1") 
				{
					playerTwoscore[shot] = 0;
				}
				else if (player == "player2") 
				{
					playerThreescore[shot] = 0;
				}
				else if (player == "player3") 
				{
					playerFourscore[shot] = 0;
				}
				else if (player == "player4") 
				{
					playerFivescore[shot] = 0;
				}
				else if (player == "player5") 
				{
					playerSixscore[shot] = 0;
				}
			}
			else 
			{
				if (player == "player0") 
				{
					playerOnescore[shot] = document.getElementById(player+scoreInputBox).value;
				}
				else if (player == "player1") 
				{
					playerTwoscore[shot] = document.getElementById(player+scoreInputBox).value;
				}
				else if (player == "player2") 
				{
					playerThreescore[shot] = document.getElementById(player+scoreInputBox).value;
				}
				else if (player == "player3") 
				{
					playerFourscore[shot] = document.getElementById(player+scoreInputBox).value;
				}
				else if (player == "player4") 
				{
					playerFivescore[shot] = document.getElementById(player+scoreInputBox).value;
				}
				else if (player == "player5") 
				{
					playerSixscore[shot] = document.getElementById(player+scoreInputBox).value;
				}
			}
			shot++
			scoreInputBox++
		}
	}
	else if (frame == 10) 
	{
		while (scoreInputBox < 3) 
		{
			if (document.getElementById(player+scoreInputBox).value == "") 
			{
				if (player == "player0") 
				{
					playerOnescore[shot] = 0;
				}
				else if (player == "player1") 
				{
					playerTwoscore[shot] = 0;
				}
				else if (player == "player2") 
				{
					playerThreescore[shot] = 0;
				}
				else if (player == "player3") 
				{
					playerFourscore[shot] = 0;
				}
				else if (player == "player4") 
				{
					playerFivescore[shot] = 0;
				}
				else if (player == "player5") 
				{
					playerSixscore[shot] = 0;
				}
			}
			else 
			{
				if (player == "player0") 
				{
					playerOnescore[shot] = document.getElementById(player+scoreInputBox).value;
				}
				else if (player == "player1") 
				{
					playerTwoscore[shot] = document.getElementById(player+scoreInputBox).value;
				}
				else if (player == "player2") 
				{
					playerThreescore[shot] = document.getElementById(player+scoreInputBox).value;
				}
				else if (player == "player3") 
				{
					playerFourscore[shot] = document.getElementById(player+scoreInputBox).value;
				}
				else if (player == "player4") 
				{
					playerFivescore[shot] = document.getElementById(player+scoreInputBox).value;
				}
				else if (player == "player5") 
				{
					playerSixscore[shot] = document.getElementById(player+scoreInputBox).value;
				}
			}
			shot++;
			scoreInputBox++;
		}
	}
	//window.alert(playerOnescore.toString());
}

//Calculate total score by totalling points in the score array frame by frame and adding them to the frame array
function calculateScore(player) 
{
	if (player == "player0") 
	{
		playerScoreArray = playerOnescore;
		playerFrameArray = playerOneframes;
	}
	else if (player == "player1") 
	{
		playerScoreArray = playerTwoscore;
		playerFrameArray = playerTwoframes;
	}
	else if (player == "player2") 
	{
		playerScoreArray = playerThreescore;
		playerFrameArray = playerThreeframes;
	}
	else if (player == "player3") 
	{
		playerScoreArray = playerFourscore;
		playerFrameArray = playerFourframes;
	}
	else if (player == "player4") 
	{
		playerScoreArray = playerFivescore;
		playerFrameArray = playerFiveframes;
	}
	else if (player == "player5") 
	{
		playerScoreArray = playerSixscore;
		playerFrameArray = playerSixframes;
	}
	scoreArrayPosition=0;
	var nextshot = scoreArrayPosition+1;
	var nextFrame = scoreArrayPosition+2;
	var secondFrame = scoreArrayPosition+4;
	finalScoreCount = 0;
	
	//STANDARD CALCULATIONS TO FRAME 8
	while (scoreArrayPosition < 16) 
	{
	
		//3 STRIKES IN A ROW
		if (playerScoreArray[scoreArrayPosition] == 10 && playerScoreArray[nextFrame] == 10 && playerScoreArray[secondFrame] ==10) 
		{	
			playerFrameArray[finalScoreCount] = 30;
		}

		//TWO STRIKES IN A ROW
		else if (playerScoreArray[scoreArrayPosition] == 10 && playerScoreArray[nextFrame] == 10 && playerScoreArray[secondFrame] !=10) 
		{
			playerFrameArray[finalScoreCount] = 20 + parseInt(playerScoreArray[secondFrame]);
		}

		//STRIKE AND A HALF STRIKE
		else if (playerScoreArray[scoreArrayPosition] == 10 && playerScoreArray[nextFrame] != 10) 
		{
			playerFrameArray[finalScoreCount] = 10 + (parseInt(playerScoreArray[nextFrame])+parseInt(playerScoreArray[nextFrame+1]));
		}

		//HALF STRIKE
		else if (playerScoreArray[scoreArrayPosition] != 10 && parseInt(playerScoreArray[scoreArrayPosition])+parseInt(playerScoreArray[scoreArrayPosition+1]) == 10 ) 
		{
			playerFrameArray[finalScoreCount] = 10 + parseInt(playerScoreArray[nextFrame]);
		}
		
		//SCORE LESS THAN 10
		else 
		{
			playerFrameArray[finalScoreCount] = parseInt(playerScoreArray[scoreArrayPosition])+parseInt(playerScoreArray[nextshot]);
		}
		scoreArrayPosition += 2;
		finalScoreCount++;
	}

	//9TH frame
	while ( scoreArrayPosition == 16) 	
	{

		//3 STRIKES IN A ROW
		if (playerScoreArray[scoreArrayPosition] == 10 && playerScoreArray[nextFrame] == 10 && playerScoreArray[nextFrame+1] == 10) 
		{	
			playerFrameArray[finalScoreCount] = 30;
		}

		//TWO STRIKES IN A ROW
		else if (playerScoreArray[scoreArrayPosition] == 10 && playerScoreArray[nextFrame] == 10 && playerScoreArray[nextFrame+1] !=10) 
		{
			playerFrameArray[finalScoreCount] = 20 + parseInt(playerScoreArray[nextFrame+1]);
		}

		//STRIKE AND A HALF STRIKE
		else if (playerScoreArray[scoreArrayPosition] == 10 && playerScoreArray[nextFrame] != 10) 
		{
			playerFrameArray[finalScoreCount] = 10 + (parseInt(playerScoreArray[nextFrame])+parseInt(playerScoreArray[nextFrame+1]));
		}

		//HALF STRIKE
		else if (playerScoreArray[scoreArrayPosition] != 10 && parseInt(playerScoreArray[scoreArrayPosition])+parseInt(playerScoreArray[scoreArrayPosition+1]) == 10 ) 
		{
			playerFrameArray[finalScoreCount] = 10 + parseInt(playerScoreArray[nextFrame]);
		}
		
		//SCORE LESS THAN 10
		else
		{
			playerFrameArray[finalScoreCount] = parseInt(playerScoreArray[scoreArrayPosition])+parseInt(playerScoreArray[scoreArrayPosition+1]);
		}
		scoreArrayPosition += 2;
		finalScoreCount++;
	}

	//10TH frame
	while (scoreArrayPosition == 18) 
	{
	
		//3 STRIKES IN A ROW
		if (playerScoreArray[scoreArrayPosition] == 10 && playerScoreArray[scoreArrayPosition+1] == 10 && playerScoreArray[scoreArrayPosition+2] == 10) 
		{	
			playerFrameArray[finalScoreCount] = 30;
		}

		//TWO STRIKES IN A ROW
		else if (playerScoreArray[scoreArrayPosition] == 10 && playerScoreArray[scoreArrayPosition+1] == 10 && playerScoreArray[scoreArrayPosition+2] !=10) 
		{
			playerFrameArray[finalScoreCount] = 20 + parseInt(playerScoreArray[scoreArrayPosition+2]);
		}

		//STRIKE AND A HALF STRIKE
		else if (playerScoreArray[scoreArrayPosition] == 10 && playerScoreArray[scoreArrayPosition+1] != 10) 
		{
			playerFrameArray[finalScoreCount] = 10 + (parseInt(playerScoreArray[scoreArrayPosition+1])+parseInt(playerScoreArray[scoreArrayPosition+2]));
		}

		//HALF STRIKE
		else if (playerScoreArray[scoreArrayPosition] != 10 && parseInt(playerScoreArray[scoreArrayPosition])+parseInt(playerScoreArray[scoreArrayPosition+1]) == 10 ) 
		{
			playerFrameArray[finalScoreCount] = 10 + parseInt(playerScoreArray[scoreArrayPosition+2]);
		}
		
		//SCORE LESS THAN 10
		else
		{
			playerFrameArray[finalScoreCount] = parseInt(playerScoreArray[scoreArrayPosition])+parseInt(playerScoreArray[scoreArrayPosition+1]);
		}
		scoreArrayPosition += 2;
		finalScoreCount++;
	}

//DISPLAY PLAYER SCORE
	var playerScore = player + 'Score';
	document.getElementById(playerScore).innerHTML = (parseInt(playerFrameArray[0])+parseInt(playerFrameArray[1])+parseInt(playerFrameArray[2])+parseInt(playerFrameArray[3])+parseInt(playerFrameArray[4])+parseInt(playerFrameArray[5])+parseInt(playerFrameArray[6])+parseInt(playerFrameArray[7])+parseInt(playerFrameArray[8])+parseInt(playerFrameArray[9]));
}

//Print Page
function printFunction() {
window.print();
}

//Disable Input Box On Name Input
function saveNames() 
{
	if (document.getElementById('player0Name').value == "")
	{
		window.alert("You must enter at least one player name to bowl");
	}

	else
	{
	var elem = document.getElementById('frameScores');
	elem.style.display = 'block';
	var elem = document.getElementById('prevNext');
	elem.style.display = 'block';
	var elem = document.getElementById('frameScores');
	elem.style.display = 'block';
	var elem = document.getElementById('restart');
	elem.style.display = 'block';

	var elem = document.getElementById('player02');
			elem.style.display = 'none';
			var elem = document.getElementById('player12');
			elem.style.display = 'none';
			var elem = document.getElementById('player22');
			elem.style.display = 'none';
			var elem = document.getElementById('player32');
			elem.style.display = 'none';
			var elem = document.getElementById('player42');
			elem.style.display = 'none';
			var elem = document.getElementById('player52');
			elem.style.display = 'none';

	var elem = document.getElementById('totalScoresPlayer0');
		elem.style.display = 'none';
		var elem = document.getElementById('totalScoresPlayer1');
		elem.style.display = 'none';
		var elem = document.getElementById('totalScoresPlayer2');
		elem.style.display = 'none';
		var elem = document.getElementById('totalScoresPlayer3');
		elem.style.display = 'none';
		var elem = document.getElementById('totalScoresPlayer4');
		elem.style.display = 'none';
		var elem = document.getElementById('totalScoresPlayer5');
		elem.style.display = 'none';


	var elem = document.getElementById('names');
	elem.style.display = 'none';
	var elem = document.getElementById('saveNames');
	elem.style.display = 'none';
		frame = 1;
		document.getElementById("currentFrame").innerHTML = "Frame "+frame;
		document.getElementById("saveNames").disabled = true;

		if (document.getElementById("player0Name").value != "") 
		{
			Names[0] = document.getElementById("player0Name").value;
			document.getElementById("playerOneName").innerHTML = Names[0];
		}
		if (document.getElementById("player1Name").value != "") 
		{
			Names[1] = document.getElementById("player1Name").value;
			document.getElementById("playerTwoName").innerHTML = Names[1];
		}
		if (document.getElementById("player2Name").value != "") 
		{
			Names[2] = document.getElementById("player2Name").value;
			document.getElementById("playerThreeName").innerHTML = Names[2];
		}
		if (document.getElementById("player3Name").value != "") 
		{
			Names[3] = document.getElementById("player3Name").value;
			document.getElementById("playerFourName").innerHTML = Names[3];
		}
		if (document.getElementById("player4Name").value != "") 
		{
			Names[4] = document.getElementById("player4Name").value;
			document.getElementById("playerFiveName").innerHTML = Names[4];
		}
		if (document.getElementById("player5Name").value != "") 
		{
			Names[5] = document.getElementById("player5Name").value;
			document.getElementById("playerSixName").innerHTML = Names[5];
		}

		//window.alert(Names.toString());
		//window.alert(Names.length);
		if (Names.length == 1 ) {
			var elem = document.getElementById('player1');
			elem.style.display = 'none';
			var elem = document.getElementById('player2');
			elem.style.display = 'none';
			var elem = document.getElementById('player3');
			elem.style.display = 'none';
			var elem = document.getElementById('player4');
			elem.style.display = 'none';
			var elem = document.getElementById('player5');
			elem.style.display = 'none';
		}
		if (Names.length == 2 ) {
			var elem = document.getElementById('player2');
			elem.style.display = 'none';
			var elem = document.getElementById('player3');
			elem.style.display = 'none';
			var elem = document.getElementById('player4');
			elem.style.display = 'none';
			var elem = document.getElementById('player5');
			elem.style.display = 'none';
		}
		if (Names.length == 3 ) {
			var elem = document.getElementById('player3');
			elem.style.display = 'none';
			var elem = document.getElementById('player4');
			elem.style.display = 'none';
			var elem = document.getElementById('player5');
			elem.style.display = 'none';
		}
		if (Names.length == 4 ) {
			var elem = document.getElementById('player4');
			elem.style.display = 'none';
			var elem = document.getElementById('player5');
			elem.style.display = 'none';
		}
		if (Names.length == 5 ) {
			var elem = document.getElementById('player5');
			elem.style.display = 'none';
		}
		
		document.getElementById('playerOneShot3Label').style.visibility = "hidden";
		document.getElementById('playerTwoShot3Label').style.visibility = "hidden";
		document.getElementById('playerThreeShot3Label').style.visibility = "hidden";
		document.getElementById('playerFourShot3Label').style.visibility = "hidden";
		document.getElementById('playerFiveShot3Label').style.visibility = "hidden";
		document.getElementById('playerSixShot3Label').style.visibility = "hidden";
		
		

		//document.getElementById('player0Name').disabled = true;
		//document.getElementById('player1Name').disabled = true;
		//document.getElementById('player2Name').disabled = true;
		//document.getElementById('player3Name').disabled = true;
		//document.getElementById('player4Name').disabled = true;
		//document.getElementById('player5Name').disabled = true;

	}
}