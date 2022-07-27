const obtenerAuto = (marca) => (modelo) => {
    return `La marca del auto es ${marca} y el año es ${modelo}`;
};

const obtenerFord = obtenerAuto('ford');
const obtenerVW = obtenerAuto('VW');

console.log(obtenerFord(2014));
console.log(obtenerVW(2016));