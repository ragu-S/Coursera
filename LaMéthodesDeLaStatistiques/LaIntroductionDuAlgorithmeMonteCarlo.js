//La Première Conférence: Le Algorithme Monte Carlo
// function.prototype.method = function (name, func) {
// 	this.prototype[name] = func;
// 	return this;
// };

var MAX_RUNS = 2000;

var probabilityTable = [];
var tableau = [];

for (var i = 0; i < 9; i++)
	probabilityTable.push(0);

var tableauProb;
var voisin = [[1,3,0,0], [2,4,0,1], [2,5,1,2], 
			  [4,6,3,0], [5,7,3,1], [5,8,4,2],
			  [7,6,6,3], [8,7,6,4], [8,8,7,5]];


function calculer(nomEssais) {
	var hits = 0;
	var x = 0;
	var y = 0;
	for(var i = 0; i < nomEssais; i++) {
		x = (Math.random() * 2) - 1;
		y = (Math.random() * 2) - 1;
		
		if((Math.abs(Math.pow(x, 2) / Math.pow(y, 2))) < Math.PI) {
			hits++;
		}
	}

	return 4 * (hits/nomEssais);
}

function calculerTableau() {
	t_max = 4;
	site = 1;
	t = 0;

	for(var i = 0; i < MAX_RUNS; i++) {
		t = 0;
		while(t < t_max) {
			t++; 
			site = voisin[site][Math.round((Math.random() * 3))];
		}

		probabilityTable[site]++;
	}

}

window.onload = function() {
	var temp;
	tableauProb = document.createElement("table");
	tableauProb.id = "leResultat";
	var randInt = 0;

	calculerTableau();
	faireUneTableau();

	var colorogram = document.getElementsByClassName("colorogram")[0];

	leRatioNoir = 0;
	leRatioRouge = 0;
	console.dir(colorogram.style.background = "linear-gradient(to bottom, rgba(0,0,0, 0.9), rgba(255,0,0,0.8))");
	//console.dir(colorogram);
	tableau.push(['Value', 'Hits']);
 	for(var i = 0; i < probabilityTable.length; i++)
 		tableau.push([String(i), probabilityTable[i]]);

	drawChartLine();
	drawChartBubble();
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

