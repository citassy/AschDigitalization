function addToGraphTable() {

  //document.getElementById("graphsInner").createElement("div");
  var d = document.createElement("div");
  //d.innerHTML = "";
  d.style.class = "chart";
  d.style.width = "45%";
  d.style.height = "200px";
  d.style.display = "inline-block";


  
  d.id = 'chartContainer' + count;
  document.getElementById("graphsInner").appendChild(d);
  }



  function addToTable() {

	var table = document.getElementById('resultTable');
  	var row = table.insertRow(-1);

  	var cell0 = row.insertCell(0);
  	var cell1 = row.insertCell(1);
  	var cell2 = row.insertCell(2);
  	var cell3 = row.insertCell(3);
  	var cell4 = row.insertCell(4);
  	var cell5 = row.insertCell(5);
  	cell0.innerHTML = count;
  }

  function addToPlayerTable() {

  	var table = document.getElementById('playerTable');
	//document.getElementById('targetParentId').appendChild(divElement);

  	//var table = document.getElementById("myTable");
  	var row = table.insertRow(-1);
  	var cell0 = row.insertCell(0);
  	var cell1 = row.insertCell(1);
  	var cell2 = row.insertCell(2);
  }

  function addCellValueEnd(rowNum, cellNum, val, table){
  	var cell = document.getElementById(table).rows[rowNum].cells[cellNum];
  	cell.innerHTML = cell.textContent + val + "<br>";
  }
  function addCellValue(rowNum, cellNum, val, table){
  	var cell = document.getElementById(table).rows[rowNum].cells[cellNum];
  	cell.innerHTML = cell.textContent + val;
  }

  function changeCellValue(rowNum, cellNum, val, table){
  	var cell = document.getElementById(table).rows[rowNum].cells[cellNum];
  	cell.innerHTML = val;
  }