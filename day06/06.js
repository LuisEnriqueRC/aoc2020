const util = require('../util');
const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
    "p","q","r","s","t","u","v","w","x","y","z"];


let fname = 'input1.txt';
let file = util.readFile(__dirname+'\\'+fname);
if (typeof file === 'undefined') {
    console.log('No se puede leer el archivo');
} else {
    console.log('------------------------ part 1 ------------------------');
    let lineas = file.split('\n');
    lineas = lineas.map(value => value.replace(/(\r\n|\n|\r)/gm, ""));
//    console.log(lineas)

//    let respuestas = [];
//    alphabet.forEach(value => respuestas[value] = 0);
    let group = '';
    let totalResp = 0;
    for (let linea of lineas) {
        group += linea;
        if (linea === '') {
            let respuestas = {};
            for (let letra of group) {
                if (typeof respuestas[letra] === 'undefined') respuestas[letra] = 1;
                else continue;
            }
            totalResp += Object.keys(respuestas).length;
            group = '';
        }
    }
    console.log('total respuestas', totalResp);
    
    console.log('------------------------ part 2 ------------------------');
    
    
    let respGrupo = [];
    let letrasEncontradas = 0;
    for (let linea of lineas) {
        respGrupo.push(linea);
        if (linea === '') {
            respGrupo.pop();
            for (let letra of alphabet) {
                if (respGrupo.every(value => value.includes(letra))) letrasEncontradas++;
            }
            respGrupo = [];
        }
    }
    console.log('letrasEncontadas', letrasEncontradas)
    
    
}