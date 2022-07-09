console.log('Primer entregable no obligatorio');

let h = parseInt(prompt('ingrese la cantidad de veces a ser saludado'));

if (h >= 1 && h <= 100) 

    for (let i = 0; i < h; i++) {
        alert('hola');
    
} else {
    alert('Ingrese nuevamente');
}
