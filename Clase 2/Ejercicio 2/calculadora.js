function sumar() {
    const operando1 = parseFloat(document.getElementById('operando1').value);
    const operando2 = parseFloat(document.getElementById('operando2').value);
    const resultado = operando1 + operando2;
    document.getElementById('resultado').textContent = resultado;
}

function restar() {
    const operando1 = parseFloat(document.getElementById('operando1').value);
    const operando2 = parseFloat(document.getElementById('operando2').value);
    const resultado = operando1 - operando2;
    document.getElementById('resultado').textContent = resultado;
}

function multiplicar() {
    const operando1 = parseFloat(document.getElementById('operando1').value);
    const operando2 = parseFloat(document.getElementById('operando2').value);
    const resultado = operando1 * operando2;
    document.getElementById('resultado').textContent = resultado;
}

function dividir() {
    const operando1 = parseFloat(document.getElementById('operando1').value);
    const operando2 = parseFloat(document.getElementById('operando2').value);
    if (operando2 === 0) {
        alert("No se puede dividir por cero.");
    } else {
        const resultado = operando1 / operando2;
        document.getElementById('resultado').textContent = resultado;
    }
}