// Importa la tua funzione da names.js
// Importa la tua funzione da hobbies.js
// Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con tre proprietà: firstName, lastName, hobbies. All’interno della tua funzione, usa le tue due funzioni precedenti per costruire l’oggetto.

const nameGenerator = require('./names')
const hobbiesGenerator = require('./hobbies');


function personGenerator(){
    const {firstName, lastName} = nameGenerator('Mickey','Mouse')
    const {hobbies} = hobbiesGenerator('A','B','C')
    return {firstName, lastName, hobbies}
}

module.exports=personGenerator;