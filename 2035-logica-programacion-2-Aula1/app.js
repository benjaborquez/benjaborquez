let numeroSecreto = generarNumeroSecreto();
let intentos = 0;
let listaNumerosSorteados = [];

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
  

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento(`p`, `Acertaste el numero en ${intentos} ${intentos=== 1 ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        //el usuario no acerto.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero es menor');
        } else {
            asignarTextoElemento('p', 'El numero es mayor');
        }

        intentos++;
        limpiarCaja();
    }
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*10)+1;
    //si el numero generado esta en la lista 
    if(listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();

    } else {
        listaNumerosSorteados.push(numeroGenerado);

        return numeroGenerado;
    }
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
    
}

function condicionesIniciales() {
    asignarTextoElemento('h1', "Juego numero secreto");
    asignarTextoElemento('p', "Ingresa un numero del 1 al 10");
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego() {
    //Limpiar la caja
    limpiarCaja();

    //Indicar mensaje de intervalo de numero
    condicionesIniciales();
    //Deshabilitar nuevo juego

    document.querySelector('#reiniciar').setAttribute('disabled', 'true');

}

asignarTextoElemento('h1', "Juego numero secreto");
asignarTextoElemento('p', "Ingresa un numero del 1 al 10");
