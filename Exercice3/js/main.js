// déclaration des constantes
const message = document.querySelector(".message");
const fab = document.querySelector("#fab");
const sell = document.querySelector("#sell");
const action = document.getElementById("action");

// Partie opérationnel
action.onclick=msg;


// Fonction de message
function msg(){
    if(fab.value<sell.value){
        message.innerHTML=`Profit de ${Math.abs(parseInt(sell.value)-parseInt(fab.value))}€`
    }else if(fab.value>sell.value){
        message.innerHTML=`Perte de ${Math.abs(parseInt(sell.value)-parseInt(fab.value))}€`
    }else if(fab.value==sell.value){
        message.innerHTML=`Ce que  vous faites ne sert à rien`
    }
}