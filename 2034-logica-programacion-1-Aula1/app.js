//Variables
let numeroSecreto = Math.floor(Math.random()*100)+1;
let numeroUsuario = 0;
let maximoIntentos = 8;
let intentos = 1;
let diferencia = Math.abs(numeroUsuario - numeroSecreto);
//let palabraVeces = "vez";

while(numeroUsuario != numeroSecreto){
    let numeroUsuario = prompt("Me indicas un número por favor entre 1 y 100");

    console.log(numeroSecreto);

    intentos ++;

    //compararacion//
    

    if (numeroUsuario == numeroSecreto) {
        alert(`Acertaste, el numero era ${numeroSecreto}. Lo hiciste en $(intentos) ${intentos == 1 ? "vez" : "veces" }`);
    } else{

        if (diferencia <= 5) {
            alert("¡Te estás acercando mucho al número secreto!");

        }else if (numeroUsuario > numeroSecreto) {
            alert("el numero es menor");
        } else{
            alert("el numero es mayor");
        }

        //incrementamos el contador cuando no acierta
        //intentos = intentos + 1;
        //palabraVeces = "veces";
        
        if (intentos > maximoIntentos){
            alert(`Llegaste al numero máximo de intentos ${maximoIntentos}`);
            break;
        }
    }
}