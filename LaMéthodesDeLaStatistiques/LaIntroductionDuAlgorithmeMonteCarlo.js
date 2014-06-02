//La Première Conférence: Le Algorithme Monte Carlo
// function.prototype.method = function (name, func) {
// 	this.prototype[name] = func;
// 	return this;
// };

var MAX_RUNS = 100;

function calculer(nomEssais = 1) {
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
	voisin = [[1,3,0,0], [2,4,0,1], [2,5,1,2], 
			  [4,6,3,0], [5,7,3,1], [5,4,8,2],
			  [7,6,6,3], [8,7,6,4], [8,8,7,5]];
	t_max = 4;
	site = 8;
	t = 0;
	//console.log("site avais " + site);
	//for(var i = 0; i < i; i++) {

		while(t < t_max) {
			t++;
			site = voisin[site][Math.round((Math.random() * 3))];
			console.log(site);
		}	
	//}
}

var cells = document.getElementsByTagName("td");
var gammeString = "";
//console.dir(cells);
gammeString = "[";
console.log(cells);
//for(var i = 0; i < 9; i++) {
	//gammeString += cells[i].innerHTML + ",";
	//console.log(cells.innerHTML);
//}
//gammeString +=  "]";
//console.log(cells.length);
//console.dir(cells);
//console.log(gammeString);

var result = 0;
var i = 0;
for(; i < 100; i++) {
	//result = Math.round(Math.random() * 3);
	//console.log(result);
}

window.onload = function() {
	calculerTableau();
	//prompt("Saise un numéro");
}

// x = 3, y = 3;
// var pebbleBox = [];
// for(var ver = 0; ver < y; ver++) {
// 	pebbleBox[ver] = ver;
	//pebbleBox[ver] = [];
 	//for(var hor = 1; hor < x; hor++) {
 	//	pebbleBox[ver] = 
	//}
//}

// Pour valeur de plafond

// Pour chacune rangée

//console.log(calculer(4000));
