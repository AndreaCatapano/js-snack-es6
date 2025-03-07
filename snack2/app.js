//Creare un array di oggetti di squadre di calcio.
//Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
//Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
//Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
//Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


const championship = [
    {name : "Napoli", score : 0, fouls: 0},
    {name : "Roma", score : 0, fouls: 0},
    {name : "Milan", score : 0, fouls: 0},
    {name : "Inter", score : 0, fouls: 0},
    {name : "Juventus", score : 0, fouls: 0}
]

const championshipFouls = []

const randomNumber = (min, max) => {
    return parseInt(Math.random() * (max - min) + min);
}

for (let i = 0; i < championship.length; i++){
    team = championship[i];
    team.score = randomNumber(3, 100);
    team.fouls = randomNumber(1, 40);
    championshipFouls.push({nome: team.name, fouls: team.fouls})
    console.log(`${team.name} ha fatto ${team.score} punti ed ha subito ${team.fouls} falli`)
}


console.log(championshipFouls)