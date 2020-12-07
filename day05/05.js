const util = require('../util');


let fname = 'input1.txt';
let file = util.readFile(__dirname+'\\'+fname);
if (typeof file === 'undefined') {
    console.log('No se puede leer el archivo');
} else {
    console.log('------------------------ part 1 ------------------------');
    let lineas = file.split('\n');
    lineas = lineas.map(value => value.replace(/(\r\n|\n|\r)/gm, ""));

    let ids = [];
    for (let linea of lineas) {
        let id = getSeat(linea);
        ids.push(id);
    }
    ids = ids.sort((a, b) => a - b);
    console.log('el id mas alto es:', ids[ids.length - 1]);
    
    console.log('------------------------ part 2 ------------------------');
    
    for (let i = 0; i < ids.length; i++) {
        let find = ids.findIndex(value => value === ids[i] + 1);
//        console.log(find)
        if (find === -1) {
            console.log('faltante:', ids[i] + 1);
            console.log(ids[i]);
//            console.log('indice', i)
//            console.log('siguiente', ids[i+1])
        }
    }
    
}


function getSeat(input) {
    let ini = 0;
    let fin = 127;
    let row = 0;
    for (let i = 0; i <= 6; i++) {
        let half = parseInt((fin - ini) / 2);
        if (input[i] === 'F') {
            ini = ini;
            fin = ini + half;
        }
        if (input[i] === 'B') {
            ini = ini + half + 1;
            fin = fin;
        }
        row = ini;
    }
    
    ini = 0;
    fin = 7;
    let col = 0;
    for (let i = 7; i <= 9; i++) {
        let half = parseInt((fin - ini) / 2);
        if (input[i] === 'L') {
            ini = ini;
            fin = ini + half;
        }
        if (input[i] === 'R') {
            ini = ini + half + 1;
            fin = fin;
        }
        col = ini;
    }
    return row * 8 + col;
}