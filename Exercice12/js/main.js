// Déclaration des variables


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
    let j = getRandomInt(6, 12);
    for (let i = 0; i <= j; i++) {
        tab.push(getRandomInt(-20, 20));
    }
}

// Fonction d'affichage 
function operate() {
    message.innerHTML = "";
    let tmp = [];
    getRandomTab(tmp);
    message.innerHTML = "";
    message.innerHTML += `[${tmp}]<br>`;
    tmp.sort((x, y) => x - y);
    const result = 0;
    const proche = tmp.reduce((prev, curr) => {
        return (Math.abs(curr - result) < Math.abs(prev - result) ? curr : prev);
    });
    message.innerHTML += `La valeur la plus proche est ${proche}`;
}