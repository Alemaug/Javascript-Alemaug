
console.log('Cotizador de seguros');
alert('Solo valido a partir del modelo 2002 a 2022');
alert('Existen 3 tipos de coberturas: Responsabilidad civil, Terceros completos o Completo contra todo riesgo');

const obtenerPorcentaje = (porcentaje, valor) => (porcentaje * valor) / 100;
const obtenerAño = () => parseInt(prompt('Ingrese el año del vehiculo: '));

let año = obtenerAño();

while (año) {
    if (año >= 2002 && año <= 2022) {
        break
    } else {
        alert('El año ingresado es incorrecto, intente nuevamente');
        año = obtenerAño();
    }
}

const porcentajes = { rc: 0.4, terceros: 0.6, cc: 0.8 }
const valor = parseInt(prompt('Ingrese Valor de su vehiculo: '));
const cobertura = prompt('Seleccione tipo de cobertura: RC (Responsabilidad Civil), Terceros o CC (Cobertura Completa)');
const resultado = obtenerPorcentaje(porcentajes[cobertura.toLowerCase()], valor);

//alert('El valor cubierto del auto es: ' + resultado)
alert(`El valor cubierto del auto es: $${resultado}`);












