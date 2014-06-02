var gammeNombre = {
    enHaut: 0,
    enBas: 0,
    àGauche: 0,
    àDroite: 0,

    extraire: function() {
        var arry = [];
        arry.push(gammeNombre.enHaut);
        arry.push(gammeNombre.enBas);
        arry.push(gammeNombre.àGauche);
        arry.push(gammeNombre.àDroite);
        return arry;
    }
}

Array.prototype.displayArry = function() {
        var elements = this.length;
        var sqr = Math.sqrt(elements);
        var outString = "";
        alert(sqr);
        for(var i = 1; i <= elements; i++) {
            if(i%sqr == 0)
                outString += "[" + this.pop();
            else if(i%sqr == sqr-1) {
                outString += this.pop() + "]";
                console.log(outString + ",");
                outString = "";
            }
            else
                outString += this.pop() + ",";
        }
}

function nombreObjet(i, x, gammeDeValeur) {
    var powX = Math.pow(x, 2) - 1;
    if(i > (powX-x)) {
        gammeDeValeur.enHaut = i;
        gammeDeValeur.enBas = i-x;
        gammeDeValeur = estEntre(i, x, gammeDeValeur);
    }
    else if(i <= x-1) {
        gammeDeValeur.enHaut = i+x;
        gammeDeValeur.enBas = i;
        gammeDeValeur = estEntre(i, x, gammeDeValeur);
    }
    else {
        gammeDeValeur.enHaut = i+x;
        gammeDeValeur.enBas = i-x;
        gammeDeValeur = estEntre(i, x, gammeDeValeur);
    }
    return gammeDeValeur;
}

function estEntre(i, x, objetNombre) {
    if(i%x == 0) { // Si vrai, la valeur est à la gauche
        objetNombre.àGauche = i;
        objetNombre.àDroite = i+1;
    }
    else if(i%x == x-1) { // Si vrai, la valeur est à la droite
        objetNombre.àGauche = i-1;
        objetNombre.àDroite = i;
    }
    else { // la valeur est entre
        objetNombre.àGauche = i-1;
        objetNombre.àDroite = i+1;
    }
    return objetNombre;
}

window.onload = function() {
    var i;
    var x = 3;
    var powX = Math.pow(x,2);
    var voisin = [];
    //var commence = 1;
    for(i = 0; i < powX; i++) {
        voisin.push((nombreObjet(i, x, gammeNombre)).extraire());
    }
    voisin.displayArry();
    //console.dir(voisin);
    calculerTableau(voisin, 8, 16);
    // vraiRandom(1000);
}

function calculerTableau(laTaille, commence = 1, fois = 1) {
    voisin = laTaille;
    t_max = 4;
    t = 0;
    site = commence;
    var totalSuccess = [];
    //console.dir(voisin);
    var leTotalFois = {
        totalSuccess: [],
        displayElements: function() {
            for(var x = 0; x < this.totalSuccess.length; x++) { // il ne reconnaît pas la propriété Objet
                console.log("fois " + this.totalSuccess[x][0] + ": " +  this.totalSuccess[x][1]);
            }
        },
        passArg: function(y) {
            y ? alert(y) : alert("faux");
        }
    }

    while(fois > 0) {
        site = commence;
        while(t < t_max) {
            t++;
            site = voisin[site][Math.round((Math.random() * 3))]; // la rangée est 0 à 3 
        }
        if(site != 8){
            console.log(site);
        }
        //console.dir(leTotalFois);
        fois--;
    }
    //leTotalFois.displayElements();
    console.log(site);
}

function vraiRandom(max) {
    while(!(Math.round((Math.random() * 3)) < 3) && (max>0)) {
        max--;
    }  
    console.log(max);
}