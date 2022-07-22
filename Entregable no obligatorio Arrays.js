
const pjs = [
    {nombre: 'Mago', poder: 270, vida: 100},
    {nombre: 'Guerrero', poder: 350, vida: 150},
    {nombre: 'GladiadorMagico', poder: 320, vida: 180},
    {nombre: 'Elfa', poder: 200, vida: 140},
   
]




function DescriptionPlayers() {
    for (const  item of pjs) {
        console.log("Personaje " + item.nombre);
        console.log("Poder: " + item.poder );
        console.log("Vida: " + item.vida );
        
    }
}

pjs.reverse ()
DescriptionPlayers()