//Creare un array di oggetti di squadre di calcio.
//Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
//Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
//Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
//Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


const campionato = [
    {name : "Napoli", score : 0, fouls: 0},
    {name : "Roma", score : 0, fouls: 0},
    {name : "Milan", score : 0, fouls: 0},
    {name : "Inter", score : 0, fouls: 0},
    {name : "Juventus", score : 0, fouls: 0}
]


const randomNumber = (min, max) => {
    return parseInt(Math.random() * (max - min) + min);
}