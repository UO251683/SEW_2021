var numMemoria = new Number(0);
var numPantalla = new Number(0);
var operacion;
var flagPunto;
var flagExistePunto = false;

function introducir(numero){
    if(flagPunto && !flagExistePunto) {
        numPantalla = new Number(numPantalla + "." + numero);
        actualizaPantalla();
        flagPunto = false;
        flagExistePunto = true;
    }
    else {
        numPantalla = new Number(numPantalla + "" + numero);
        actualizaPantalla();
    }
}

function actualizaPantalla(){
    document.getElementById("pantalla").innerText = numPantalla;
}

function guardar(numero){
    numMemoria=new Number(numero);
    flagExistePunto = false;
}

function guardar(){
    numMemoria=new Number(numPantalla);
    reset();
}

function suma() {   
    operacion = 1;
    guardar(numPantalla);
    reset();
} 

function resta() {
    operacion = 2;
    guardar(numPantalla);
    reset();
}

function multiplicacion() {
    operacion = 3;
    guardar(numPantalla);
    reset();
}

function division() {
    operacion = 4;
    guardar(numPantalla);
    reset();
}

function sumaMemoria() {   
    operacion = 5;
    eval();
} 

function restaMemoria() {
    operacion = 6;
    eval();
}

function punto(){
    if(!flagExistePunto) {
        flagPunto = true;
    }
}

function reset(){
    flagExistePunto = false;
    numPantalla=new Number(0);
    actualizaPantalla();
}

function eval(){
    flagExistePunto = false;
    if(operacion == 1){
        numPantalla = numMemoria + numPantalla;
        actualizaPantalla();
    }

    else if (operacion == 2){
        numPantalla = numMemoria - numPantalla;
        actualizaPantalla();
    }

    else if (operacion == 3){
        numPantalla = numMemoria * numPantalla;
        actualizaPantalla();
    }

    else if (operacion == 4){
        numPantalla = numMemoria / numPantalla;
        actualizaPantalla();
    }

    else if(operacion == 5){
        numPantalla = numPantalla + numMemoria;
        actualizaPantalla();
    }

    else if (operacion == 6){
        numPantalla = numPantalla - numMemoria;
        actualizaPantalla();
    }

    else {
        alert("Selecciona una operación");
    }
}