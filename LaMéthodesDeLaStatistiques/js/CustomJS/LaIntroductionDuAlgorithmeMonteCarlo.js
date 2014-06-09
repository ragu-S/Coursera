//La Première Conférence: Le Algorithme Monte Carlo
// function.prototype.method = function (name, func) {
// 	this.prototype[name] = func;
// 	return this;
// };

var MAX_RUNS = 10;

var probabilityTable = [];
var tableau = [];

for (var i = 0; i < 9; i++)
	probabilityTable.push(0);

var tableauProb;

var voisin = [[1,3,0,0], [2,4,0,1], [2,5,1,2], 
			  [4,6,3,0], [5,7,3,1], [5,8,4,2],
			  [7,6,6,3], [8,7,6,4], [8,8,7,5]];

window.onload = function() {

	var temp;
	tableauProb = document.createElement("table");
	tableauProb.id = "leResultat";
	var randInt = 0;

	calculerTableau();
	faireUneTableau();

	couleurTableu();

	tableau.push(['Value', 'Hits']);
 	for(var i = 0; i < probabilityTable.length; i++)
 		tableau.push([String(i), probabilityTable[i]]);

	//drawChartLine();
	//drawChartBubble();
	//jouerDeCaillou();
}

// function calculer(nomEssais) {
// 	var hits = 0;
// 	var x = 0;
// 	var y = 0;
// 	for(var i = 0; i < nomEssais; i++) {
// 		x = (Math.random() * 2) - 1;
// 		y = (Math.random() * 2) - 1;
		
// 		if((Math.abs(Math.pow(x, 2) / Math.pow(y, 2))) < Math.PI) {
// 			hits++;
// 		}
// 	}

// 	return 4 * (hits/nomEssais);
// }

function jouerDeCaillou(noir, rouge) {
	//var colorogram = document.getElementById("colorGraphique");
	var histoTable = document.getElementsByClassName("nombre");
	var tdRefs = document.createElement("table");
	tdRefs.className = "histoColorRange";
	console.log(histoTable.length);
	
	// for(var i = 0; i < histoTable.length; i++) {
	// 	console.log(histoTable[i].innerHTML);
	// }
	
	for(var i = 10; i > 0; i--) {
		var rangée = document.createElement("tr");
		var leCellue;

		if(i == 10) {
			leCellue = document.createElement("td");
			leCellue.style.background = "linear-gradient(white, yellow, orange, red, black)";
			leCellue.setAttribute("rowspan", "10"); 
			leCellue.style.width = "30px";
			rangée.appendChild(leCellue);
		}
		
		// adjuster la hauteur des cellues plus grande que ou égale à 8
		if(i >= 8)
			rangée.style.height = "27px";
		else
			rangée.style.height = "25px";
		// //if(i = )
		// leCellue = document.createElement("td");
		// leCellue.style.width = "30px";
		// //leCellue.style.border = "1px solid black";
		// leCellue.style.background = "linear-gradient(white, yellow)"
		// //leCellue.style.height = "30px";

		leCellue = document.createElement("td");
		leCellue.innerHTML = eval(i/10);
		rangée.appendChild(leCellue);

		tdRefs.appendChild(rangée);
	}

	document.getElementsByClassName("histogram")[0].appendChild(tdRefs);
	//console.dir(histo);
	//
	//console.dir(tdRefs[0]);

	noir = 1 - noir ;
	rouge = 1 - rouge;

	console.log("Noir : " + noir + " et Rouge : " + rouge);
	//colorogram.style.background = "linear-gradient(white, yellow, orange, red, black)";
	//colorogram.style.background = "linear-gradient(to bottom, rgba(0,0,0, " + noir + "), rgba(255,0,0," + rouge + "))";
}

function calculerTableau() {
	t_max = 4;
	//var leRatioNoir = 1;
	//var leRatioRouge = 0;
	t = 0;

	for(var i = 0; i < MAX_RUNS; i++) {
		site = 1;
		t = 0;
		while(t < t_max) {
			t++; 
			site = voisin[site][Math.round((Math.random() * 3))];
		}

		probabilityTable[site]++;
		
	}

	jouerDeCaillou(1, 0);
}

function couleurTableu() {
	//var tableauTravailler = document.getElementById("histoTable");
	var cellues = document.getElementsByClassName("nombre");
	console.dir(cellues);
	for(var i = 0; i < cellues.length; i++) {
		if(cellues[i].innerHTML >= 0 && cellues[i].innerHTML < 9) {
			console.log(cellues[i].innerHTML + " : " + probabilityTable[cellues[i].innerHTML]);


		}
	}

}

// noir: 00 00 00 0
// rouge: FF 00 00 255
// yellow: FF FF 00 
// orange: FF 66 00
// blanc: FF FF FF
// white, yellow, orange, red, black

function couleurRangee(siteProb) {
	var couleur = 0;
	if(siteProb >= 0.1) {
		couleur = "red";
	}
	else if() {
		couleur = "orange";
	}
	return couleur;
}

var faireUneTableau = function() {
	for(var i in probabilityTable) {
		var rangeeTableau = document.createElement("tr");
		var laCellue = document.createElement("td");
		laCellue.innerHTML = i;
		rangeeTableau.appendChild(laCellue);
		laCellue = document.createElement("td");
		laCellue.innerHTML = probabilityTable[i];
		rangeeTableau.appendChild(laCellue);

		laCellue = document.createElement("td");
		laCellue.innerHTML = Math.round(eval(probabilityTable[i]/MAX_RUNS)*100);//Math.round(eval(probabilityTable[i]/MAX_RUNS)*100) + "%";
		rangeeTableau.appendChild(laCellue);

		tableauProb.appendChild(rangeeTableau);
	}

	var rangeeTableau = document.createElement("tr");
	var laCellue = document.createElement("td");

	laCellue.innerHTML = "Le Total:";
	rangeeTableau.appendChild(laCellue);

	laCellue = document.createElement("td");
	laCellue.innerHTML = 0
	for(var i in probabilityTable)
		laCellue.innerHTML = Number(laCellue.innerHTML) + Number(probabilityTable[i]);
	
	rangeeTableau.appendChild(laCellue);
	// Sum la troiseme colonne ********************************************/
	laCellue = document.createElement("td");
	var lesCellues = tableauProb.getElementsByTagName("tr");

	//console.log(lesCellues.length);
	laCellue.innerHTML = 0
	for(var i = 0; i < lesCellues.length; i++) {
		laCellue.innerHTML = Number(laCellue.innerHTML) + Number(lesCellues[i].childNodes[2].innerHTML);
		lesCellues[i].childNodes[2].innerHTML += "%";
			//laCellue.innerHTML = Number(laCellue.innerHTML) + Number(lesCellues[i].childNodes[2].innerHTML.substr(0, lesCellues[i].childNodes[2].innerHTML.length - 1));
	}
	laCellue.innerHTML = laCellue.innerHTML + "%";

	rangeeTableau.appendChild(laCellue);
	tableauProb.className = "stats";
	tableauProb.appendChild(rangeeTableau);
	
	document.getElementsByClassName("histogram")[0].appendChild(tableauProb);
}

 function drawChartLine() {
    var data = google.visualization.arrayToDataTable(tableau);

    var options = {
        title: 'Probability pour 3x3 Jouer Caillou'
    };
    var gooChart = document.createElement("div");
    var chart = new google.visualization.LineChart(gooChart);
    chart.draw(data, options);
    document.body.appendChild(gooChart);
}

function drawChartBubble() {
	var bubbleTable = [];
	bubbleTable.push(["Hit", String(tableau[0][0]), String(tableau[0][1]), "Percentage", "sum"]);
 	for(var i = 1; i < tableau.length; i++) {
 		bubbleTable.push(["", i, Number(tableau[i][1]), tableau[i][1], tableau[i][1]]); 
 	}

 	console.dir(bubbleTable);

    var data = google.visualization.arrayToDataTable(bubbleTable);

    var options = {
      title: 'Probability pour le 3x3 Jouer Caillou',
      hAxis: {title: 'Total Hits'},
      vAxis: {title: 'Range'},
      bubble: {textStyle: {fontSize: 11}},
      colorAxis: {colors: ['red']}
    };

    var gooChart = document.createElement("div");
    var chart = new google.visualization.BubbleChart(gooChart);
    chart.draw(data, options);

    document.body.appendChild(gooChart);
}

