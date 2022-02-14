// déclaration des constantes
const message = document.querySelector(".message");
const prenom = document.querySelector("#prénom");
const action = document.getElementById("action");

// Partie opérationnelle
action.onclick =  function msg() {message.innerHTML = `Bonjour ${prenom.value}`}