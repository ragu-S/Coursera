//La Première Conférence: Le Algorithme Monte Carlo
// function.prototype.method = function (name, func) {
// 	this.prototype[name] = func;
// 	return this;
// };
var MAX_RUNS = 8000;
var probabilityTable = [];
var tableau = [];

var voisin = [[1,3,0,0], [2,4,0,1], [2,5,1,2], 
			  [4,6,3,0], [5,7,3,1], [5,8,4,2],
			  [7,6,6,3], [8,7,6,4], [8,8,7,5]];

window.onload = function() {
	JeuDeCaillou();
	testInput();
}

function loadTables() {

	var temp;
	var randInt = 0;
	var testRuns = document.getElementById("inTotal").value;
	var commence = document.getElementById("siteCommence").value;
	probabilityTable = [];
	tableau = [];

	for (var i = 0; i < 9; i++)
		probabilityTable.push(0);

	(testRuns.length == 0) && (testRuns = MAX_RUNS);
	(commence.length == 0) && (commence = undefined);
	MAX_RUNS = testRuns;
	// loadTables();

	calculerTableau();
	faireUneTableau();
	couleurTableu();

	tableau.push(['Value', 'Hits']);
 	for(var i = 0; i < probabilityTable.length; i++)
 		tableau.push([String(i), probabilityTable[i]]);

	drawChartLine();
	drawChartBubble();
}

function JeuDeCaillou() {
	var histoTable = document.getElementsByClassName("nombre");
	var tdRefs = document.getElementById("histoColorRange");//document.createElement("table");
	//tdRefs.className = "histoColorRange";
	//console.log(histoTable.length);
	
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
			rangée.style.height = "23px";
		else
			rangée.style.height = "24px";

		leCellue = document.createElement("td");
		leCellue.innerHTML = eval(i/10);
		rangée.appendChild(leCellue);

		tdRefs.appendChild(rangée);
	}

	//document.getElementsByClassName("histogram")[0].appendChild(tdRefs);
	
}

function calculerTableau(commence) {
	t_max = 4;
	var site;
	(commence === undefined) && (commence = 2);
	for(var i = 0; i < MAX_RUNS; i++) {
		site = commence;
		t = 0;
		while(t < t_max) {
			t++; 
			site = voisin[site][Math.round((Math.random() * 3))];
		}	
		probabilityTable[site]++;
	}	
}

function couleurTableu() {
	var cellues = document.getElementsByClassName("nombre");

	for(var i = 0; i < cellues.length; i++) {
		if(cellues[i].innerHTML >= 0 && cellues[i].innerHTML < 9) {
			//console.log(cellues[i].innerHTML + " : " + (probabilityTable[cellues[i].innerHTML]/MAX_RUNS)+ " : " + couleurRangee(probabilityTable[cellues[i].innerHTML]));//probabilityTable[cellues[i].innerHTML]);
			(probabilityTable[cellues[i].innerHTML]/MAX_RUNS > 0.8) && (cellues[i].style.color = "black");
			cellues[i].style.background = couleurRangee(probabilityTable[cellues[i].innerHTML]);
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
	siteProb /= MAX_RUNS;
	var couleur = { 
		rouge:255, 
		vert:255, 
		bleu:255, 
		sat:1,
		rgbaSet: function(r, g, b, s) {
			// for(var i = 0; i < this.arguments.length; i++) {
			// 	(this.arguments[i] === undefined) && (this.arguments[i] = 0);
			// }
			this.rouge = r;
			this.vert = g;
			this.bleu = b;
			this.sat = s;
		},
		rgbaString: function() { 
			return "rgba(" + this.rouge + "," + this.vert + "," + this.bleu + "," + this.sat + ")";
		}
	};
	// var rouge = 255;
	// var vert = 255;
	// var bleu = 255;
	// 0 à 0.1 
	if(siteProb >= 0 && siteProb <= 0.3){
		//couleur = "rouge, leBrun et noir";
		couleur.rgbaSet(Math.round(255*(siteProb/0.3)), 0, 0, 1);
	}
	else if(siteProb > 0.3 && siteProb <= 0.8) {
		//couleur = "orange et rouge";
		couleur.rgbaSet(255, Math.round(255*((siteProb-0.1)/0.8)), 0, 1);
	}
	else if(siteProb > 0.8 && siteProb <= 1) {
		couleur.rgbaSet(255, 255, Math.round(255*((siteProb-0.1)/1)), 1);
	}
	else {
		// ajouter une déclaration erreur
		console.log("Erreur dans la fonction couleurRangee(): la probability que avait donner est : " + siteProb);
	}

	return couleur.rgbaString();
}



var faireUneTableau = function() {
	// document.getElementsByClassName("histogram")[0].style.height = "350px";
	//var tableauProb = document.getElementById("leResultat");//
	var resultats = document.getElementsByClassName("resultats");
	var lePourCent = document.getElementsByClassName("lePourCent");
	var lesTotals = [0, 0];

	//console.dir(resultats);
	//console.dir(lePourCent);
	
	for(var i = 1; i < resultats.length-1; i++) {
		resultats[i].innerHTML = probabilityTable[i-1];
		lePourCent[i].innerHTML = Math.round(eval(probabilityTable[i-1]/MAX_RUNS)*100);
		lesTotals[0] += probabilityTable[i-1];
		lesTotals[1] += Number(lePourCent[i].innerHTML);
	}
	resultats[resultats.length-1].innerHTML = lesTotals[0];
	lePourCent[lePourCent.length-1].innerHTML = lesTotals[1];
}

 function drawChartLine() {
    var data = google.visualization.arrayToDataTable(tableau);

    var options = {
        title: 'Probability pour 3x3 Jeu Caillou'
    };
    var gooChart = document.getElementById("googleLine")
    if(gooChart === null) {
    	gooChart = document.createElement("div");
    	gooChart.id = "googleLine";
    	document.body.appendChild(gooChart);
    }

    var chart = new google.visualization.LineChart(gooChart);
    chart.draw(data, options);
}

function drawChartBubble() {
	var bubbleTable = [];
	bubbleTable.push(["Hit", String(tableau[0][0]), String(tableau[0][1]), "Percentage", "sum"]);
 	for(var i = 1; i < tableau.length; i++) {
 		bubbleTable.push(["", i, Number(tableau[i][1]), tableau[i][1], tableau[i][1]]); 
 	}

    var data = google.visualization.arrayToDataTable(bubbleTable);

    var options = {
      title: 'Probability pour le 3x3 Jeu Caillou',
      hAxis: {title: 'Total Hits'},
      vAxis: {title: 'Range'},
      bubble: {textStyle: {fontSize: 11}},
      colorAxis: {colors: ['red']}
    };

    var gooChart = document.getElementById("googleCircle");
    
    if(gooChart === null) {
    	gooChart = document.createElement("div");
    	gooChart.id = "googleCircle";
    	document.body.appendChild(gooChart)
    }

    var chart = new google.visualization.BubbleChart(gooChart);
    chart.draw(data, options);
}

function testInput() {
	var matrixTable = document.getElementById("baseMatrix");
	console.dir(matrixTable);
	console.log(Object.prototype.toString.call(matrixTable));
	
	
}