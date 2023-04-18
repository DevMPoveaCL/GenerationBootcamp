function sumar(){
    const forma = document.getElementById('forma');
    let operadorA = forma['operadorA'];
    let operadorB = forma['operadorB'];
    let resultado = parseInt(operadorA.value) + parseInt(operadorB.value);
    if(isNaN(resultado))
        resultado = "No hay numeros para sumar"
    document.getElementById('resultado').innerHTML = `${resultado}`;
    console.log(resultado)
}