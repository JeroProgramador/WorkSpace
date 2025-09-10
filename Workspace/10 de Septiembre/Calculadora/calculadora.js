function sumar(){
    let suma1 = document.getElementById("sumando1");
    let suma2 = document.getElementById("sumando2");

    let resultado = parseInt (suma1.value) + parseInt(suma2.value);

    let resultadohtml = document.getElementById("resultadosuma");
    resultadohtml.innerHTML = resultado;
    alert("mensaje deseado");
    alert(resultado);
}

function restar(){
    let resta1 = document.getElementById("restando1");
    let resta2 = document.getElementById("restando2");

    let resultado = parseInt (resta1.value) - parseInt(resta2.value);

    let resultadohtml = document.getElementById("resultadoresta");
    resultadohtml.innerHTML = resultado;
    alert("mensaje deseado");
    alert(resultado);
}

function multiplicar(){
    let multiplicacion1 = document.getElementById("multiplicando1");
    let multiplicacion2 = document.getElementById("multiplicando2");

    let resultado = parseInt (multiplicacion1.value) * parseInt(multiplicacion2.value);

    let resultadohtml = document.getElementById("resultadomultiplicacion");
    resultadohtml.innerHTML = resultado;
    alert("mensaje deseado");
    alert(resultado);
}

function dividir(){
    let dividido = document.getElementById("dividido");
    let dividendo = document.getElementById("dividendo");

    let resultado = parseFloat(dividido.value) / parseFloat(dividendo.value);

    let resultadohtml = document.getElementById("resultadodivision");
    resultadohtml.innerHTML = resultado;
    alert("mensaje deseado");
    alert(resultado);
}