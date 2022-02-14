// Déclaration des variables
let classe = [];

// Déclaration des constantes
const message = document.querySelector(".message");
const action = document.getElementById("action");

// Partie opérationnelle


// Fonction de génération de nombres aléatoires
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

// Fonction de génération de tableau
function getRandomTab(tab) {
    let j = getRandomInt(15, 25);
    for (let i = 0; i <= j; i++) {
        tab.push(getRandomInt(0, 20));
    }
}

// Fonction de choix d'appréciation 
function commentaire(a) {
    if (a <= 4) {
        return "Catastrophique, il faut tout revoir";
    } else if (a >= 5 && a <= 10) {
        return "Insuffisant";
    } else if (a >= 11 && a <= 14) {
        return "Peut mieux faire";
    } else if (a >= 15 && a <= 17) {
        return "Bien";
    } else if (a >= 18 && a <= 20) {
        return "Excellent, bon travail";
    }
}

// Fonction générale d'affichage et d'appel
function operate(tbl) {
    message.innerHTML = "";
    tbl = [];
    getRandomTab(tbl);
    for (let i = 0; i < tbl.length; i++) {
        message.innerHTML += `note : ${tbl[i]}     commentaire : ${commentaire(tbl[i])} <br>`;
    }
}
