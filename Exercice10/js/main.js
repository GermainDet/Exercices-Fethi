// Déclaration des variables


// Déclaration des constantes
const message = document.querySelector(".message");
const val = document.querySelector("#val");
const action = document.getElementById("action");

// Partie opérationnelle


// Fonction nombre d'étoile par ligne
function star(a) {
    let nbr = "";
    for (let i = 1; i <= a; i++) {
        nbr += "*";
    }
    return nbr;
}

// Fonction nombre d'espace par ligne
function space(a) {
    let num = "";
    for (let i = 1; i <= val.value - a; i++) {
        num += "  ";
    }
    return num;
}

// Fonction d'affichage
function operate() {
    message.innerHTML = "";
    if (isNaN(val.value) == true) {
        message.innerHTML = `Veuillez mettre une valeur numériques dans le champ valeur`;
    } else {
        for (let i = 1; i <= val.value; i++) {
            message.innerHTML += `${space(i)}${star((2 * i) - 1)}<br>`;
        }
    }
}
