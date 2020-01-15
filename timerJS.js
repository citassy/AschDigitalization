function timeBefore(){
	var timeLeft = 3;
	var elem = document.getElementById("timer");
	var timerId = setInterval(countdown, 1000);
	function countdown() {
		if (timeLeft == 0) {
			elem.innerHTML = "game begins! "
			clearTimeout(timerId);
			setTimeout(circle,0);
		} 
		else {
			elem.innerHTML = "game starts in " + timeLeft + " seconds" ;
			timeLeft--;
		} 
	}
}

function timerAfter(){
	startMilliSeconds =  new Date().getTime();
	timeLeft = 10;
	var elem = document.getElementById("timer");
	var timerId = setInterval(countdown, 1000);
	allAns();
	function countdown() {
		if (timeLeft == 0) {
			chartMaker(count);
			addToGraphTable();
			clearTimeout(timerId);
			elem.innerHTML = "game ended! Ready for another round? "
			hideElement("votingButtons");
			if(count < numberOfRounds){
				for (var i = 0 ; i <= numberOfPlayers; i++){
					changeCellValue(i+1, 1, "", "playerTable");
					changeCellValue(i+1, 2, "", "playerTable");
				}
				showElement("readyButton");
				changeCellValue(count, 1, corrAns+1, "resultTable");
				didFollow();
				isYouReady = 0;
				isAllReady = 0;
				xAnswers=[];
				xTimes=[];
				yAnswers=[];
				yTimes=[];
				allReady(4);
			}
			else{

				changeCellValue(count, 1, corrAns+1, "resultTable");
				didFollow();
				showElement("endButton");
			}
		} 
		else {
			elem.innerHTML = timeLeft + ' seconds remaining';
			timeLeft--;
		} 
	}
}
