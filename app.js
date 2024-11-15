console.log('hello model!')

const nameGenerator = require('./names')
const hobbiesGenerator = require('./hobbies');
const personGenerator = require('./people')


console.log(nameGenerator('Umberto','Tozzi'));
console.log(hobbiesGenerator('Nuoto','Fai da te','fotografia'))
console.log(personGenerator())