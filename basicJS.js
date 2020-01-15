function randomElement(max, arr, isDelete){
	var randNum = Math.floor(Math.random() * Math.floor(max));
	var x = arr[randNum];
	if(isDelete == 1){
		arr.splice(randNum, 1);
	}
	return x;
}

function randomNum(min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function showElement(element){
	document.getElementById(element).style.visibility = "visible";
}

function displayElement(element, mode){
	document.getElementById(element).style.display = mode;
}	

function hideElement(element){
	document.getElementById(element).style.visibility = "hidden";
}

function changeValue(id, value){
	document.getElementById(id).textContent = value;
}

function sortNumber(a, b) {
	return a - b;
}

function didFollow(){
	var tableRow = document.getElementById("resultTable").rows[count];
	if(tableRow.cells[1].textContent == tableRow.cells[4].textContent){
		changeCellValue(count, 5, "answered correctly", "resultTable");
	}
	else if (confAns == tableRow.cells[4].textContent){
		changeCellValue(count, 5, "answered as others", "resultTable");
	}
	else if(tableRow.cells[4].textContent == "") {
		changeCellValue(count, 5, "invalid", "resultTable");
	}
	else{
		addCellValue(count, 5, "answered randomly", "resultTable");
	}
}

function scrollTo(elem){
	document.getElementById(elem).scrollIntoView({behavior: "smooth"});
}



function getSelectedText(selection){
	var e = document.getElementById(selection);
	return result = e.options[e.selectedIndex].text;				
}

