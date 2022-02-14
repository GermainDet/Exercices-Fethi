// Déclaration des variables


// Déclaration des constantes
const message = document.querySelector(".message");
const val = document.querySelector("#val");
const action = document.getElementById("action");

// Partie opérationnelle


// Fonction de calcule et d'affichage
function operate() {
    let result = 0;
    message.innerHTML = "";
    if (isNaN(val.value) == true) {
        message.innerHTML = `Veuillez mettre une valeur numériques dans le champ valeur`
    } else {
        for (let i = 1; i <= val.value; i++) {
            result += i;
            if (i < val.value) {
                message.innerHTML += `${i} + `;
            } else {
                message.innerHTML += `${i} = `;
            }
        }
        message.innerHTML += `${result}`;
    }
}