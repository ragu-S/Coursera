// Pour chacune rangée
alert("loaded");
function leEmplacement(i, x) {
	if(Math.ceil(i/x) < x) {
		if(i/x - Math.floor(i/x) == 1/x) {
            if(Math.floor(i/x) == 0)
                console.log("la valeur " + i + " elle est dans la rangée gauche et le bas");
                var gammeDeValeur = [];

                gammeDeValeur.push(i+x);  
                gammeDeValeur.push(i+1);
                gammeDeValeur.push(i);
                gammeDeValeur.push(i);

            else if(Math.floor(i/x) == x-1)
                console.log("la valeur " + i + " elle est dans la rangée gauche et l'haut");

                gammeDeValeur.push(i-x);  
                gammeDeValeur.push(i+1);
                gammeDeValeur.push(i);
                gammeDeValeur.push(i);

            else
                console.log("la valeur " + i + " elle est dans la rangée entre");
		}
		else {
			console.log("la valeur " + i + " elle est dans la partie entre");
		}
	} 
	else {
		// il est dans rangée droite
		//console.log("la valeur " + i + " elle est dans rangée droite");
        if(Math.floor(i/x) == 0)
            console.log("la valeur " + i + " elle est dans la rangée droite et le bas");
            gammeDeValeur.push(i-x);  
            gammeDeValeur.push(i+1);
            gammeDeValeur.push(i);
            gammeDeValeur.push(i); 
        else if(Math.floor(i/x) == x-1)
            console.log("la valeur " + i + " elle est dans la rangée droite et l'haut");
         else
            console.log("la valeur " + i + " elle est dans la rangée entre");
	}
}

//leEmplacement(5, 5);

function faireUneTable(x) {
    var laTable = document.createElement("table");
    var laRangée = document.createElement("tr");
    var powX = Math.pow(x, 2);
    
    laTable.className = "nombrePremier";

    // for(var i = 0; i < powX; i++) { 
    //     laColonne = document.createElement("th");
    //     laColonne.appendChild(document.createTextNode(i+1));
    //     laRangée.appendChild(laColonne);
        
    //     if((i+1)%x == 0) { // tu doit utilizer le opérateur moduli avec la valeur i+1 
    //        console.dir(laRangée);
    //        laTable.appendChild(laRangée);
    //        laRangée = document.createElement("tr"); 
    //     } 
    // }
    
    // var i = 1;
    // while(i <= 5) {
    //     laColonne = document.createElement("th");
    //     laColonne.appendChild(document.createTextNode(i++));
    //     laRangée.appendChild(laColonne);
    // }
    
    // console.log(laRangée.childNodes.length);
    
    // var x = 0;
    // var y = laRangée.childNodes.length;
    // var tempChaîne = laRangée.innerHTML.split("><");
    
    // console.dir(tempChaîne);

    // while(x < y) {
    //     var temp = laRangée.childNodes[x].innerHTML;
    //     laRangée.childNodes[x].innerHTML = laRangée.childNodes[y-1].innerHTML;
    //     laRangée.childNodes[y-1].innerHTML = temp;
    //     console.log(laRangée.childNodes[x].innerHTML);
    //     console.log(laRangée.childNodes[y-1].innerHTML);
    //     x++;
    //     y--;
    // }
    
    console.dir(laRangée);
    laTable.appendChild(laRangée);
    
//     var Rangée = document.createElement("tr");
//     while(i <= 5) {
//         laColonne = document.createElement("th");
//         laColonne.appendChild(document.createTextNode(i++));
//         Rangée.appendChild(laColonne);
//     }
//     alert(Rangée.childNodes.length);
//     var x = 0;
//     var y = Rangée.childNodes.length;
//     console.dir(Rangée);
//     alert(y);
//     while(x < y) {
//         var temp = Rangée.childNodes[x];
//         Rangée.childNodes[x] = Rangée.childNodes[y-1];
//         Rangée.childNodes[y-1] = temp;
//         x++;
//         y--;
//     }
    
//     //laRangée.appendChild(laColonne);
//     var laTableDeux = document.createElement("table");
//     laTableDeux.appendChild(laRangée);
    
    //console.dir(laRangée.childNodes[0]);
// for(var i = 0; i < powX; i++) {
    
// }
    
    for(var i = powX; i > 0; i--) { 
        laColonne = document.createElement("th");
        laColonne.appendChild(document.createTextNode(i));
        laRangée.appendChild(laColonne);
        console.log(i);
        if((i-1)%x == 0) { // tu doit utilizer le opérateur moduli avec la valeur i+1 
           console.log("le espace + " + i);
           laTable.appendChild(laRangée);
           laRangée = document.createElement("tr"); 
        } 
    }
    document.body.appendChild(laTable);
}

window.onload = function() {
    addStyle();
    faireUneTable(9);
}

function addStyle() {
    var styleTag = document.createElement("style");
    var styleText = "";
    
    styleText = ".nombrePremier th { border: 1px solid black; width: 25px; height: 25px }";   
    
    styleTag.innerHTML = styleText;
    document.head.appendChild(styleTag);
}

// <table>
//   <tr>
//       <td></td>   
//   </tr>
// </table>
