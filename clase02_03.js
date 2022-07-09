console.log('Ejemplo con calificaciones');

let lower = 0
let upper = 10
let passed = 7

let grade1 = parseInt(prompt('Calificacion 1'));
// let grade2 = prompt('Calificacion 2')
// let grade3 = prompt('Calificacion 3)

if ( grade1 >= lower && grade1 <= upper ) 
    console.log('Calificaciones válidas');
    if ( grade1 >= passed && grade1 <= upper) {
        
} else {
    console.log('No validas :(');
}