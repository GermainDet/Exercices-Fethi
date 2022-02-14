// Déclaration des variables
let reste = 0;
let test=0;

// Déclaration des constantes
const message = document.querySelector(".message");
const val = document.querySelector("#val");
const action = document.getElementById("action");

// Partie opérationnelle


// Fonction d'affichage et de choix des billets
function operate() {
    message.innerHTML = "";
    if (isNaN(val.value) == true) {
        message.innerHTML = `Veuillez mettre une valeur numériques dans le champ valeur`;
    } else {
        if (val.value/500>=1) {
            message.innerHTML += `Billet de 500€ : ${Math.floor(val.value/500)}<br>`;
            reste = val.value%500;
            reste=reste.toFixed(2);
        }else {
            reste = val.value;
        }
        if (reste/200>=1) {
            message.innerHTML += `Billet de 200€ : ${Math.floor(reste/200)}<br>`;
            reste %= 200;
            reste=reste.toFixed(2);
        }
        if (reste/100>=1) {
            message.innerHTML += `Billet de 100€ : ${Math.floor(reste/100)}<br>`;
            reste %= 100;
            reste=reste.toFixed(2);
        }
        if (reste/50>=1) {
            message.innerHTML += `Billet de 50€ : ${Math.floor(reste/50)}<br>`;
            reste %= 50;
            reste=reste.toFixed(2);
        }
        if (reste/20>=1) {
            message.innerHTML += `Billet de 20€ : ${Math.floor(reste/20)}<br>`;
            reste %= 20;
            reste=reste.toFixed(2);
        }
        if (reste/10>=1) {
            message.innerHTML += `Billet de 10€ : ${Math.floor(reste/10)}<br>`;
            reste %= 10;
            reste=reste.toFixed(2);
        }
        if (reste/5>=1) {
            message.innerHTML += `Billet de 5€ : ${Math.floor(reste/5)}<br>`;
            reste %= 5;
            reste=reste.toFixed(2);
        }
        if (reste/2>=1) {
            message.innerHTML += `Pièce de 2€ : ${Math.floor(reste/2)}<br>`;
            reste %= 2;
            reste=reste.toFixed(2);
        }
        if (reste/1>=1) {
            message.innerHTML += `Pièce de 1€ : ${Math.floor(reste/1)}<br>`;
            reste %= 1;
            reste=reste.toFixed(2);
        }
        if (reste/0.5>=1) {
            message.innerHTML += `Pièce de 50 centimes : ${Math.floor(reste/0.5)}<br>`;
            reste %= 0.5;
            reste=reste.toFixed(2);
        }
        if (reste/0.2>=1) {
            message.innerHTML += `Pièce de 20 centimes : ${Math.floor(reste/0.2)}<br>`;
            reste %= 0.2;
            reste=reste.toFixed(2);
        }
        if (reste/0.1>=1) {
            message.innerHTML += `Pièce de 10 centimes : ${Math.floor(reste/0.1)}<br>`;
            reste %= 0.1;
            reste=reste.toFixed(2);
        }
        if (reste/0.05>=1) {
            message.innerHTML += `Pièce de 5 centimes : ${Math.floor(reste/0.05)}<br>`;
            reste %= 0.05;
            reste=reste.toFixed(2);
        }
        if (reste/0.02>=1) {
            message.innerHTML += `Pièce de 2 centimes : ${Math.floor(reste/0.02)}<br>`;
            reste %= 0.02;
            reste=reste.toFixed(2);
        }
        if (reste/0.01>=1) {
            message.innerHTML += `Pièce de 1 centime : ${Math.floor(reste/0.01)}<br>`;
        }
    }
}