document.getElementById("welcoming").style.visibility = "hidden";
//document.getElementById("gameID").style.visibility = "hidden";
document.getElementById("myCanvas").style.visibility = "hidden";
document.getElementById("readyButton").style.visibility = "hidden";
document.getElementById("endButton").style.visibility = "hidden";
document.getElementById("votingButtons").style.visibility = "hidden";
//document.getElementById("results").style.visibility = "hidden";
document.getElementById("error").style.visibility = "hidden";
var count = 0;
var startMilliSeconds;
var endMilliSeconds;
window.scroll({
	top: 0, 
	left: 0, 
	behavior: 'smooth'
});
var numberOfPlayers = 0;
var numberOfRounds = 0;
var isYouReady = 0;
var isAllReady = 0;
var conditionTrue = 0;
var conditionFalse = 0;
//var foundCorrect = 0;
//var changedAnswer = 0;
//var haveOtherAnswered = 0;
var corrAns = -1;
var confAns = [];
var confAnsTime = -1;
var xAnswers = [];
var xTimes = [];
var yAnswers = [];
var yTimes =[];
var charts = [];


//var screenWidth = screen.width;
//var screenHeight = screen.height;


function isReady(){
	console.log(Boolean(isAllReady));
	if ((isAllReady == 1) && (isYouReady == 1)){
		timeBefore();
	}
	//Boolean(isYouReady);
}

