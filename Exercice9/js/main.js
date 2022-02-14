// Déclaration des variables


// Déclaration des constantes
const message = document.querySelector(".message");
const val = document.querySelector("#val");
const action = document.getElementById("action");

// Partie opérationnelle


// Fonction nombre d'étoile par ligne
function lign(a) {
    let nbr = "";
    for (let i = 1; i <= a; i++) {
        nbr += "*";
    }
    return nbr;
}

// Fonction d'affichage
function operate() {
    message.innerHTML = "";
    if (isNaN(val.value) == true) {
        message.innerHTML = `Veuillez mettre une valeur numériques dans le champ valeur`
    } else {
        for (let i = 1; i <= val.value; i++) {
            message.innerHTML += `${lign(i)} <br>`;
        }
        for (let i = val.value-1; i > 0; i--) {
            message.innerHTML += `${lign(i)} <br>`;
        }
    }
}

