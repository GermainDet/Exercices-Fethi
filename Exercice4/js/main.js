// déclaration des constantes
const message = document.querySelector(".message");
const nb1 = document.querySelector("#nb1");
const nb2 = document.querySelector("#nb2");
const nb3 = document.querySelector("#nb3");
const action = document.getElementById("action");

// Partie opérationnel
action.onclick = function msg() {message.innerHTML = `[${nb1.value},${nb2.value},${nb3.value}] ---> ${Math.max(nb1.value,nb2.value,nb3.value)}`};

/* en logique on aurait 
if(nb1>nb2 && nb1>nb3){
    return nb1;
}else if(nb2>nb1 && nb2>nb3){
    return nb2;
}else{
    return nb3;
}
*/