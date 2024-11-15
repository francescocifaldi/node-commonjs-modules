//Crea una funzione che accetta tre parametri: hobbyOne, hobbyTwo, hobbyThree. La funzione dovrebbe restituire un oggetto con una proprietà hobbies, che è un array di hobby.

function hobbiesGenerator (firstHobby, secondHobby, thirdHobby){
    return {hobbies:[firstHobby,secondHobby,thirdHobby]}
}
module.exports = hobbiesGenerator;