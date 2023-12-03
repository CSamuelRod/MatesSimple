

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

window.onload = function() {
    let botonCorregir = document.querySelector("div.botones #botonCorregir");
    let nodesNumbers = document.querySelectorAll(".numbers");
    let botonCambio = document.querySelector("div.botones #botonCambio");
    let nodeInputs = document.querySelector(".entrada input");
    let nodeOperador = document.querySelector(".operador");
    let botonSuma = document.querySelector( "div.botones #botonSumar");
    let botonResta = document.querySelector( "div.botones #botonRestar");
    let botonDividir = document.querySelector("div.botones #botonDividir");
    let botonMultiplicar = document.querySelector("div.botones #botonMultiplicar");
    let resultado = document.querySelector(".puntuacion");
    let contador = document.querySelector(".contador")

    botonSuma.addEventListener("click",cambioSignoSuma);
    function cambioSignoSuma(){
        if (nodeOperador){
            nodeOperador.innerHTML = " + "
        }
    }
    botonResta.addEventListener("click",cambioSignoResta);
    function cambioSignoResta(){
        if (nodeOperador){
            nodeOperador.innerHTML = " - "
        }
    }

    botonDividir.addEventListener("click",cambioSignoDivision);
    function cambioSignoDivision(){
        if (nodeOperador){
            nodeOperador.innerHTML = " / "
        }
    }

    botonMultiplicar.addEventListener("click",cambioSignoMultipliacion);
    function cambioSignoMultipliacion(){
        if (nodeOperador){
            nodeOperador.innerHTML = " X "
        }
    }
    

    for(i = 0; i < nodesNumbers.length; i++){
        nodesNumbers[i].innerText = getRandomInt(1,100)   
    } 

    botonCambiar.addEventListener("click", cambiar);
    function cambiar(){
        for(i = 0; i < nodesNumbers.length; i++){
            nodesNumbers[i].innerText = getRandomInt(1,100)
            botonCorregir.addEventListener("click", prueba);     
        };
    }

    let puntos = 0
    botonCorregir.addEventListener("click", prueba); 
    function prueba(){
        if(nodeOperador.innerText === "+"){
            suma(nodesNumbers);
            if (sumaValores === parseInt(nodeInputs.value)){
                //console.log("Correcto el resultado es " + nodeInputs.value);
                resultado.innerHTML = "Correctooo :D"
                puntos ++;
                contador.innerHTML = puntos;
                cambiar();
            }else{
                console.log("incorrecto");
                resultado.innerHTML = "Incorrectooo :C"
                puntos;
                contador.innerHTML = puntos;
                cambiar();
            }
        }else if(nodeOperador.innerText === "-"){
            resta(nodesNumbers);
            if (restaValores === parseInt(nodeInputs.value)){
                //console.log("Correcto el resultado es " + nodeInputs.value);
                resultado.innerHTML = "Correctooo :D"
                puntos ++;
                contador.innerHTML = puntos;
                cambiar();
            }else{
                resultado.innerHTML = "Incorrectooo :C"
                puntos;
                contador.innerHTML = puntos;
            }
        }else if(nodeOperador.innerText === "X"){
            multiplicacion(nodesNumbers);
            if (multiplicacionValores === parseInt(nodeInputs.value)){
                //console.log("Correcto el resultado es " + nodeInputs.value);
                resultado.innerHTML = "Correctooo :D"
                puntos ++;
                contador.innerHTML = puntos;
                cambiar();
            }else{
                resultado.innerHTML = "Incorrectooo :C"
                puntos;
                contador.innerHTML = puntos;
            }
        }else if(nodeOperador.innerText === "/"){
            division(nodesNumbers);
            if (divisionValores === parseInt(nodeInputs.value)){
                //console.log("Correcto el resultado es " + nodeInputs.value);
                resultado.innerHTML = "Correctooo :D"
                puntos ++;
                contador.innerHTML = puntos;
                cambiar();
            }else{
                resultado.innerHTML = "Incorrectooo :C"
                puntos;
                contador.innerHTML = puntos;
            }
        }else{
            console.log("el operador no ha sido recibido");
        }

    }
}

function suma (nodesNumbers){
    for(i = 0; i < nodesNumbers.length; i = i+2){
        sumaValores = parseInt(nodesNumbers[i].innerText) + parseInt(nodesNumbers[i+1].innerText)
        console.log(sumaValores);
    }return sumaValores;
}
function resta (nodesNumbers){
    for(i = 0; i < nodesNumbers.length; i = i+2){
        restaValores = parseInt(nodesNumbers[i].innerText) - parseInt(nodesNumbers[i+1].innerText)
        console.log(restaValores);
    }return restaValores;
}
function multiplicacion(nodesNumbers){
    for(i = 0; i < nodesNumbers.length; i = i+2){
        multiplicacionValores = parseInt(nodesNumbers[i].innerText) * parseInt(nodesNumbers[i+1].innerText)
        console.log(Math.round( multiplicacionValores));
    }return multiplicacionValores;
}
function division(nodesNumbers){
    for(i = 0; i < nodesNumbers.length; i = i+2){
        divisionValores = parseInt(nodesNumbers[i].innerText) / parseInt(nodesNumbers[i+1].innerText)
        console.log(Math.trunc(divisionValores) );
    }return divisionValores;
}

