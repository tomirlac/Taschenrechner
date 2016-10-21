
function berechnen(){
	
	var tobiistdoof = 0;
	
	var rechenart = document.getElementById("rechenart").value;
	var part1 = Number(document.getElementById("Display1").value);
	var part2 = Number(document.getElementById("Display2").value);

	
	switch(rechenart){
	case "+":
		save=part1+part2;
		break;
	case "-":
		save=part1-part2;
		break;
	case "*":
		save=part1*part2;
		break;
	case "/":
		if (part2 == 0){
			save = "Division durch Null ist nicht möglich"
		}
		else{
			save=part1/part2;	
		}

		break;
	}
	
	
	
	//Textnote einem Element anhängen
	var node = document.createElement("LI");
	var textnode = document.createTextNode(save);
	node.appendChild(textnode);	
	var ergebnis = document.getElementById("ergebnis");
	
	ergebnis.insertBefore(node, ergebnis.childNodes[0]);
	
	
	
}

function ergebnisZuruecksetzen() {
	document.getElementById("ergebnis").innerHTML = "";
}






/*function ergebnisBerechnen(){
	
	b = new Array(); 
	b=document.getElementByName("Display");
	
	var x=0;
	var resultA = 0;
	var teilergA = 0;
	var resultS = 0;
	var teilergS=0;
	
	for(var x=0, x<b.length,x++){
		
		if(b[x].value == '+'){
			teilergA = b[x-1].value+b[x+2].value;
		}
		resultA = teilergA + resultA;
		
		if(b[x].value == '-'){
		 	
		}
	}
	
	return result;
}*/