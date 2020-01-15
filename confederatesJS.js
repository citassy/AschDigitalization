


function findPlayers(numOfPlayers){
	//11
	//var times =[0, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000];
	//79
	var names = ["Adam", "Andrew", "Aaron", "Amy", "Anna", "Albert",
	"Bella", "Bill", "Brian",
	"Christina", "Caleb", "Cameron",
	"David", "Dorothy", "Diana", "Dan", "Deb",
	"Ethan", "Emily", "Evan", "Esther", 
	"Fred", "Francisca",
	"Gaby", "George", "Gabe", "Garrett", "Grace",
	"Howard", "Holly", "Helena",
	"Ian", "Iliana", 
	"John", "James", "Julia", "Jacob", "Jill", "Jane",
	"Kate", "Kylie", "Kristina", "Kim",
	"Liam", "Lori", "Leo", "Levi",
	"Matt", "Mary", "Monica", "Mike", "Mia", "Madison",
	"Nicole", "Nate", "Noah", "Nora", "Nick",
	"Phin", "Phoebe",
	"Rose", "Rita", "Ryan",
	"Sara", "Sam", "Sean", "Stella", "Simon",
	"Tim", "Tracy", "Tommy", "Tiffany",
	"Violet", "Vincent", "Victor", "Vera",
	"Zack", "Zane"];
	var chosenTimes = [];
	var chosenNames = [];
	for (var i = 0; i < numOfPlayers; i++){
		chosenTimes.push(randomNum(0, 13000));
		chosenNames.push(randomElement(79-i-1, names, 1));
	}
	chosenTimes.sort(sortNumber);
	console.log("chosen times of found name: " +chosenTimes.toString());
	console.log("chosen names: " + chosenNames.toString());
	for(var i = 0; i < numOfPlayers; i++){
		setTimeout(changeCellValue, chosenTimes[i], i+2, 0, chosenNames[i], "playerTable");
	}
	setTimeout(hideElement, chosenTimes[numberOfPlayers-1], "timer");
	setTimeout(showElement, chosenTimes[numberOfPlayers-1], "readyButton");
	setTimeout(allReady, chosenTimes[numberOfPlayers-1], numberOfPlayers);

}

function allReady(numOfPlayers){
	count++;
	changeValue("roundCounter", "Round "+count + " out of " + numberOfRounds);
	console.log("count = " + count);
	addToTable();
	addToGraphTable();

	//var times =[4000, 5000, 6000, 7000, 8000, 9000, 10000];
	var chosenTimes = [];
	for (var i = 0; i < numOfPlayers; i++){
		chosenTimes.push(randomNum(700, 4000));
	}
	for (var i= 0; i < numberOfPlayers; i++){
		setTimeout(changeCellValue, chosenTimes[i], i+2, 2, "Ready", "playerTable");
	}
	chosenTimes.sort(sortNumber);
	console.log("Ready times after sorting: " + chosenTimes.toString());
	function setReady(){
		isAllReady = 1;
	}
	setTimeout(setReady, chosenTimes[numberOfPlayers-1]);
	setTimeout(isReady, chosenTimes[numberOfPlayers-1]);
}

function allAns(){
	
	if (randomNum(0, 100) <=34){
		confAns = corrAns+1;
		changeCellValue(count, 2, "other players answered: " + (confAns)+ " ", "resultTable");
		conditionTrue++;
		for(var i= 0; i < numberOfPlayers; i++){
			var randNum = randomNum(700,5000);
			setTimeout(changeCellValue, randNum, i+2, 1, confAns, "playerTable");
			yTimes.push(randNum);
			yAnswers.push(confAns);
		}
		
	}
	else{
		var possAns = [1, 2, 3];
		possAns.splice(corrAns, 1);
		console.log("possible correctAns: " + possAns.toString());

		var falseAns = randomElement(2, possAns, 0);
		changeCellValue(count, 2, "other players answered: "+falseAns + " ", "resultTable");
		conditionFalse++;
		confAns = falseAns;
		for(var i= 0; i < numberOfPlayers; i++){
			var randNum = randomNum(700,5000);
			setTimeout(changeCellValue, randNum, i+2, 1, falseAns, "playerTable");
			yTimes.push(randNum);
			yAnswers.push(confAns);
		}
	}
	
	addCellValue(count, 2, "at: {" + yTimes.toString()+ "} millisecond times", "resultTable")
}
