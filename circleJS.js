function drawCircle(ctx, radius, i){

	
	ctx.beginPath();
	ctx.font = "30px Arial";
	ctx.fillText(i, 250, 70);
	ctx.arc(250, 200, radius, 0, 2 * Math.PI);
	ctx.strokeStyle='black';
	ctx.stroke();
}

function clear(ctx, c){
	ctx.clearRect(0, 0, c.width, c.height);
}

function circle(){

	var radius = [5, 20, 35, 50, 75, 90];

	var chosenRadius = []
	for(var i = 0; i<3; i++){
		chosenRadius.push(randomElement(5-i,radius, 1));
	}

	console.log("circle radiuses: " + chosenRadius.toString());

	corrAns = randomNum(0, 2);
	console.log("correct answer: " + corrAns + "correctRadius: " + chosenRadius[corrAns] );
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");


	setTimeout(drawCircle, 1000, ctx, chosenRadius[0],"1");
	//at 3000, clear
	setTimeout(clear, 3000, ctx, c);

	setTimeout(drawCircle, 5000, ctx, chosenRadius[1],"2");

	//at 7000, clear
	setTimeout(clear, 7000, ctx, c);

	setTimeout(drawCircle, 9000, ctx, chosenRadius[2],"3");

	//at 11000, clear
	setTimeout(clear, 11000, ctx, c);
	setTimeout(drawCircle, 13000, ctx, chosenRadius[corrAns], "?");
	setTimeout(clear, 15000, ctx, c);
	setTimeout(showElement, 15000, "votingButtons");
	//setTimeout(allAns, 15000);
	setTimeout(timerAfter, 15000);

}