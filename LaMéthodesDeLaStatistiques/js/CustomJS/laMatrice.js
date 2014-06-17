// determine les nombre des cols et rows pour chaque de les matrices

var arry1 = [
["a","b","c"],
["d","e","f"],
["g","h","i"]];

var arry2 = [
["x","y","z"],
["u","v","w"],
["r","s","t"]
];

var voisin = [[1,3,0,0], [2,4,0,1], [2,5,1,2], 
			  [4,6,3,0], [5,7,3,1], [5,8,4,2],
			  [7,6,6,3], [8,7,6,4], [8,8,7,5]];

var arry6 = [0,0,0,0,0,0,0,0,1.0];

arry3 = [67,4,7,3,23,4,67,3,4];


// function scalarMulitiply(arry1, arry2) {
//     var totalElements = arr(arry1) * arr(arry2);
//     function arr(arraySrc) {
//         if(arraySrc.length && (arraySrc[0].length > 1))
//            return arraySrc[0].length
//         else
//             return arraySrc.length;
//     }
    
//     return totalElements;
// }

// console.log("Total Elements" + scalarMulitiply(arry1, arry2));

// totalEls = scalarMulitiply(arry1, arry2);

function transfer(unVoisin) { //scalarMulitiply(arry1, arry2) {
	var arryRow = arr(arry1);
	var arryCol = arr(arry2);;
	var laSomme = [];
	var laMatrice = [];
	var aRow = 0;

	function arr(arraySrc) {
		if(arraySrc.length && (arraySrc[0].length > 1))
			return arraySrc[0].length
		else
			return arraySrc.length;
	}

	while(aRow < arryRow) {
	    var bCol = 0;
	    while(bCol < arryCol) {
	        var i = 0;
	        var aCol = 0;
	        var bRow = 0;
	        var total = 0;
	        for(; i < arryCol; i++) {
	        	if(typeof arry1[aRow][aCol] === "string")
	        		laSomme.push(arry1[aRow][aCol++] + arry2[bRow++][bCol]);
	        	else
	            	laSomme.push(total += Number(arry1[aRow][aCol++]) * Number(arry2[bRow++][bCol]));
	            //console.log(total += Number(arry2[aRow][aCol++]));
	        }
	        laMatrice.push(laSomme);
	        laSomme = [];
	        bCol++;
	    }
	    aRow++;
	}
	//console.dir(laMatrice);
	return laMatrice;
}

var arry3 = [];
for(var i = 0; i < 9; i++) {
	var arry4 = [];
	for(var x = 0; x < 9; x++) {
		arry4.push(0);
	}
	arry3.push(arry4);
}

for(var i = 0; i < 9; i++) {
	for(var a = 0; a < 4; a++) {
		arry3[voisin[i][a]][i] = Number(arry3[voisin[i][a]][i]) + 0.25;
	}
}



window.onload = function() {
	//arry6 = scalarMulitiply(arry3, arry6);
	//console.dir(arry3);
	//console.dir(scalarMulitiply(arry3, arry6));
	for(var i = 0; i < 100; i++) {
		arry6 = scalarMulitiply(arry3, arry6);
		// var rowArray = document.createElement("p");
		// 	rowArray.innerHTML = i + " ["+ arry6[i] + "]";
		document.body.appendChild(makeHTML_Tableau(arry6, i));
		//console.dir(arry6 = scalarMulitiply(arry3, arry6));
	// 	var rowArray = document.createElement("p");
	// // 	rowArray.innerHTML = i + "["+ arry3[i] + "]";
	// 	for(var x in arry6) {
	// 		rowArray.innerHTML +=  " ["+ arry6[i][x] + "]";
	// 	}
	 	//document.body.appendChild(rowArray);
	}

		//console.dir(matrice);
	// for(var i in arry3)
	// 	console.log("[1: " + arry3[i].pop() + "]");
	//console.log(traverser(arry6, 4, 3));
	//document.body.appendChild(makeHTML_Tableau(arry3));
	//document.getElementById("tst").appendChild(tableau);
	//document.body.appendChild(document.createElement("br"));
	//document.body.appendChild(makeHTML_Tableau(arry6));
}

function arrySeul(arry) {
	// si rangée de arry1 seul ou mulitiple 
	var seulArry = true;// = arry.length;
	//if(!((premiereArry > 1) && arry1[0].length) && (typeof arry1[0] !== "string")) {
	//if(!(premiereArry > 1)) {	
	if((arry.length > 1) && (arry[0].length !== undefined )) {
		seulArry = false;
	}
	return seulArry;
}


function scalarMulitiply(arry1, arry2) {
	var combinedMatrix = [];
	var rowValues = [];

	if(arrySeul(arry2)) { // single-row matrix
		for(var x = 0; x < arry1.length; x++) {
			rowValues = [];
			for(var y = 0; y < arry2.length; y++) {
				rowValues.push(Number(arry1[x][y]) * Number(arry2[y]));
				//console.log(Number(arry1[x][y]) * Number(arry2[y]));
			}
			combinedMatrix.push(rowValues);
		}
		//combinedMatrix = arry1;
	}
	else { // multi-dimensional array or matrix tables
		console.log("entering else");
		for(var x = 0; x < arry1.length; x++) {
			rowValues = [];
			for(var y = 0; y < arry2[0].length; y++) {
				//arry1[x][y] =  Number(arry1[y][x]) * Number(arry2[y][x]);
				var rowTotal = 0;
				for(var z = 0; z < arry2[0].length; z++) {
					rowTotal +=  Number(arry1[x][z]) * Number(arry2[z][y]);
				}
				rowValues.push(rowTotal);
			}
			combinedMatrix.push(rowValues);
		}
	}
	return combinedMatrix;
}









function scalarMulitiply2(arry1, arry2) { // transfer(unVoisin) {
	var arry1Rows = arry1.length;
	var arry1Cols = arry1.length;
	
	// si rangée de arry1 seul ou mulitiple
	arrySeul(arry1) && (arry1Rows = 1);
	((arry1Rows != 1) && (arry1Cols = arry1[0].length));

	console.log("arry1Rows: " + arry1Rows);
	console.log("arry1Cols: " + arry1Cols);

	if(arry1Rows == 1) {
		for(var col = 0; col < arry1Cols; col++) {
			//console.log(arry1[col] * arry2[col]);
			console.log(traverser(arry1, 0, col));
			//console.log(Number(traverser(arry1, 0, col)) * Number(traverser(arry2, 0, col)));
		}
	}
	else if(arry1Rows > 1) {
		for(var row = 0; row < arry1Rows; row++) {
			if(arry1Rows > 1) {
				for(var col = 0; col < arry1Cols; col++) {
					//console.log(arry1[row][col]);
					console.log(Number(traverser(arry1, row, col, element)) * Number(traverser(arry2, row, col)));
					//console.log(Number(traverser(arry1, row, col)));
					//console.log(traverser(arry1, row, col));
				}
			}
		}
	}
}

function traverser(arry, row, col, element) {
	var numElements = arry.length;
	var arryRows = ((numElements > 1) && (arry[0].length !== undefined )) ? numElements - 1 : 0; // row index (vertical stacks)
	var arryCols = arryRows > 1 ? arry[0].length - 1 : numElements - 1; // col index (horizontel columns)
	//console.log("arryRows = " + arryRows + " & arryCols = " + arryCols);
	element = (arryRows === 0) ? arry[arryCols] : arry[arryRows][arryCols];

	if((row <= arryRows) && (col <= arryCols)) {
		element = arry[row][col];
	}
	return element;
}

function makeHTML_Tableau(matrice, rowNum) {
	var tableau = document.createElement("table");
	tableau.id = "laMatrice";
	//tableau.style.border = "solid 2px";
	//console.dir(tableau);
	var row = document.createElement("tr");
	// var td = document.createElement("td");
	// td.class="elementMatrice";
	// td.style.border = "solid 1px";
	// td.innerHTML = "[";
	//tableau.style.borderCollapse; 
	for(var i = 0; i < matrice.length; i++) {
		//for(var x = 0; x < matrice[i].length; x++) {
		var x = matrice.length-1;
		var td = document.createElement("td");
		td.class="elementMatrice";
		td.style.border = "solid 1px";
		//td.style.width = "80px";
		td.innerHTML = (i == 0 ? rowNum + " [": "") + (matrice[i][x]).toFixed(5);// + (i < x ? ", ": "]");
		row.appendChild(td);
	}
		tableau.appendChild(row);
		//}
		//for(var x in laMatrice[i])
			//console.log(matrice[i]);
		// if((i%9) == 0) {
		// 	tableau.appendChild(row);
		// 	var row = document.createElement("tr");
		// }	
		//console.dir(tableau);
	

	return tableau;
}

