//Creare un array di oggetti:
//Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
//Stampare a schermo la bici con peso minore.

const bikes = [
    {nome : "x", peso: 60},
    {nome : "y", peso: 35},
    {nome : "w", peso: 40},
    {nome : "z", peso: 45}
]

let maxWeight = 0;
let heavierBike = 0;

for (let i = 0; i < bikes.length; i++){
    const bike = bikes[i];
    const bikeWeight = bike.peso;
    if (bikeWeight > maxWeight){
        maxWeight = bikeWeight;
        heavierBike = i;
    }
}

console.log(`La bicicletta più pesante è ${bikes[heavierBike].nome} con ${bikes[heavierBike].peso}kg`);