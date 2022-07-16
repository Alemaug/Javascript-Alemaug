function calculadora(primerNumero, segundoNumero, operacion) {
    switch (operacion) {
        case "+":
            return primerNumero + segundoNumero;
            break;
        case "-":
            return primerNumero - segundoNumero;
            break;
        case "*":      
            return primerNumero * segundoNumero;
            break;
        case "/":
            return primerNumero / segundoNumero;
            break;    
        default:
            return 0;
            break;
    }
}

let primerNumero = parseInt(prompt('Ingrese Primer numero'));
let operacion = prompt("ingrese tipo de operacion: +, -, * o /");
let segundoNumero = parseInt(prompt('Ingrese Segundo numero'));
    if (calculadora != calculadora) {
         alert('Error, ingrese nuevamente. ')   
        } else {
            console.log('El Resultado es: ');
            console.log(calculadora(primerNumero, segundoNumero, operacion));
            
        }


