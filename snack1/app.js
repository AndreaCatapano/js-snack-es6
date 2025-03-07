//Creare un array di oggetti:
//Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
//Stampare a schermo la bici con peso minore.

const bikes = [
    {nome : "x", peso: 200},
    {nome : "y", peso: 35},
    {nome : "w", peso: 100},
    {nome : "z", peso: 45}
]

let minWeight = 0;
let lightWeightBike = 0;

for (let i = 0; i < bikes.length; i++){
    const bike = bikes[i];
    const bikeWeight = bike.peso;

    if (i === 0){
        minWeight = bikeWeight;
        lightWeightBike = i;
    }

    if (bikeWeight < minWeight){
        minWeight = bikeWeight;
        lightWeightBike = i;
    }
}

console.log(`La bicicletta più leggera è ${bikes[lightWeightBike].nome} con ${bikes[lightWeightBike].peso}kg`);