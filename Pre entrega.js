console.log('Primer Pre entrega');

const precioUnidad = 100;
const sabor = [
    'Carne', 'Pollo', 'Choclo', 'Jamon y Queso', 'Verdura'
]

const pedido = {}
const personas = {}

const obtenerNombre = () => {
    const nombre = prompt('Ingrese un nombre: ');
    if (personas[nombre]){
        alert('La persona ya existe, ingrese otro nombre');
        obtenerNombre()
        return;
    }
      return nombre;  
}

const guardarPersona = () => {
    const nombre = obtenerNombre();
    const gustos = prompt('Ingrese los gustos : ');

    personas[nombre] = gustos.split(',');
}

alert('Bienvenidos a Alemaug Empanadas');

const debeIniciar = prompt('¿Desea hacer su pedido?');

if (debeIniciar.toLowerCase() === 'si') {
    guardarPersona();

    const debeContinuar = prompt('Continuar con otra persona')
    if (debeContinuar.toLowerCase() === 'si') {
        guardarPersona();
    }
} else {
    alert('Gracias, vuelva pronto :)');
}
