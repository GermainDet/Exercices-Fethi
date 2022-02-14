// Déclaration des variables


// Déclaration des constantes
const message = document.querySelector(".message");
const val1 = document.querySelector("#val1");
const val2 = document.querySelector("#val2");
const op = document.querySelector("#op");
const action = document.getElementById("action");

// Partie opérationnelle


// Fonction de calcule et d'affichage
function operate() {
    let result = 0;
    let opbool = true;
    if (isNaN(val1.value) == true || isNaN(val2.value) == true) {
        message.innerHTML = `Veuillez mettre des valeurs numériques dans les champs "valeur 1" et "valeur 2"`
    } else {
        switch (op.value) {
            case "x":
            case "*":
                result = parseInt(val1.value) * parseInt(val2.value);
                break;
            case "+":
                result = parseInt(val1.value) + parseInt(val2.value);
                break;
            case "-":
                result = parseInt(val1.value) - parseInt(val2.value);
                break;
            case "/":
                result = parseInt(val1.value) / parseInt(val2.value);
                break;
            case "%":
                result = parseInt(val1.value) % parseInt(val2.value);
                break;
            case "^":
                result = parseInt(val1.value) ** parseInt(val2.value);
                break;
            default:
                opbool = false;
                break;
        }
        if (opbool === true) {
            message.innerHTML = `${parseInt(val1.value)} ${op.value} ${parseInt(val2.value)} = ${result}`;
        } else {
            message.innerHTML = `Je n'ai pas compris, les opérateurs que je peux comprendre sont : "*", "+", "-", "/", "%", "^"`;
        }
    }
}
