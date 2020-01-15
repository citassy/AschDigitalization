function toInstructions(){
	numberOfPlayers = getSelectedText("numPlayers")-1;
	console.log("number of players: " + numberOfPlayers);
	numberOfRounds = getSelectedText("numRounds");
	console.log("number of players: " + numberOfPlayers);
	if(!isNaN(numberOfPlayers) && (numberOfRounds != "-- Select --")){

		changeValue("numPl", "You will play with " +( numberOfPlayers )+ " other people.");
		changeValue("numRou","There will be " + numberOfRounds + " rounds in total.");
		document.getElementById("welcoming").style.visibility = "visible";
		document.getElementById("welcomingInstructor").style.visibility = "hidden";
		document.getElementById("error").style.visibility = "hidden";
	}

	else{
		document.getElementById("error").style.visibility = "visible";
	}

}
function startButtonPressed(){
	//document.getElementById("gameID").style.visibility = "visible";
	displayElement("gameID","flex");
	for (var i = 0; i < numberOfPlayers; i++){
		addToPlayerTable();
	}
	scrollTo("gameID");
	findPlayers(numberOfPlayers);
}

function readyPressed(){
	hideElement("readyButton");
	showElement("myCanvas");
	showElement("timer");
	changeValue("ReadyYou", "Ready");
	isYouReady = 1;
	isReady();
}

function vote(num){
	endMilliSeconds = new Date().getTime();
	document.getElementById("YourAns").textContent = (num+1);
	addCellValue(count, 3, "at " + (endMilliSeconds-startMilliSeconds) +" milliseconds time, you pressed: " + (num+1)  + "; ", "resultTable");
	changeCellValue(count, 4, num+1, "resultTable");
	xAnswers.push(num+1);
	xTimes.push(endMilliSeconds-startMilliSeconds);
}


function first(){
	
	vote(0);
}


function second(){

	vote(1);

}
function third(){
	
	vote(2);
	
}


function showResult(){
	scrollTo("results");
	displayElement("results","flex");
	displayElement("conclusion","flex");
	displayElement("graphs","flex");
}



function conclusion(){
	displayElement("conclusion","flex");
	scrollTo("conclusion");
}

function toGraphs(){
	displayElement("graphs","flex");
	scrollTo("graphs");
}