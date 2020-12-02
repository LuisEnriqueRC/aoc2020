const util = require('../util');


let fname = 'input1.txt';
let file = util.readFile(__dirname+'\\'+fname);
if (typeof file === 'undefined') {
    console.log('No se puede leer el archivo');
} else {
    console.log('------------------------ part 1 ------------------------');
    let lineas = file.split('\n');
    let correctos = 0;
    for (let linea of lineas) {
//        console.log(linea)
        let parts = linea.split(' ');
        let correcto = isValidPassPolicy1(parts[0], parts[1].replace(':', ''), parts[2].replace(/(\r\n|\n|\r)/gm, ""));
        if (correcto) correctos++;
    }
    console.log('correctos: ', correctos);
    
    console.log('------------------------ part 2 ------------------------');
    
    correctos = 0;
    for (let linea of lineas) {
//        console.log(linea)
        let parts = linea.split(' ');
        let correcto = isValidPassPolicy2(parts[0], parts[1].replace(':', ''), parts[2].replace(/(\r\n|\n|\r)/gm, ""));
        if (correcto) correctos++;
    }
    console.log('correctos: ', correctos);
    
}


function isValidPassPolicy1(times, char, pass) {
    let limits = times.split('-');
    let limit1 = limits[0];
    let limit2 = limits[1];
    let regex = new RegExp(char, "g");
    let matches = pass.match(regex);
    if (matches === null) return false;
    if (matches.length >= limit1 && matches.length <= limit2) {
        return true;
    } else {
        return false;
    }
}


function isValidPassPolicy2(range, char, pass) {
//    console.log(range, char, pass);
    let positions = range.split('-');
    let pos1 = positions[0] - 1;
    let pos2 = positions[1] - 1;
    return (pass[pos1] === char ^ pass[pos2] === char)
}