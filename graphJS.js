

function chartMaker(x) {
  var dataPoints1 = [];
  var dataPoints2 = [];
  var chart = new CanvasJS.Chart("chartContainer" + x,
  {
    title:{
      text: "Round " + count,
    },
    axisX:{
      title : "Time (milliseconds)",
      minimum: 0,
      maximum: 10000  
    },
   /* axisX2:{
      title : "Time (milliseconds)"
    },*/

    axisY:{
      title : "Answer",
      minimum: 0,
      maximum: 4 
    },
   /* axisY2:{
      title : "Answer"
    },*/
    data: [
    {        
      type: "line",
      name: "Player",
      showInLegend: true,
      dataPoints: dataPoints1
    },
    {        
      type: "line",
      name: "Confederates",
      showInLegend: true,
      dataPoints: dataPoints2
    }
    ]
  });

  for(var i = 0; i < xTimes.length; i++){
    dataPoints1.push({
      x: xTimes[i],
      y: xAnswers[i]
    });
  }

  for(var i = 0; i < yTimes.length; i++){
    dataPoints2.push({
      x: yTimes[i],
      y: yAnswers[i]

    });
  }

  chart.render();
  //charts.push(chart);

}


/*function toRender(){
  for (var i=0; i < charts.length; i++){
    charts[i].render();
  }
}*/




