console.log('Ejemplo extra');

const TOTAL_INTERACIONES = 3
let total = 0

for (let i = 0; i < TOTAL_INTERACIONES; i++) {
    console.log('iteracion ' + i);
    total = total + parseInt(prompt('dame una calificació'))
}

let promedio = total / TOTAL_INTERACIONES
alert('El promedio es: ' + promedio)