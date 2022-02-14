// déclaration des constantes
const message = document.querySelector(".message");
const val1 = document.querySelector("#valeur1");
const val2 = document.querySelector("#valeur2");
const action = document.getElementById("action");

// Partie opérationnelle
action.onclick = function msg() {message.innerHTML = `${parseInt(val1.value)} + ${parseInt(val2.value)} = ${parseInt(val1.value) + parseInt(val2.value)}`} ;

