const util = require('../util');


let fname = 'input1.txt';
let file = util.readFile(__dirname+'\\'+fname);
let arrayArboles = [];
if (typeof file === 'undefined') {
    console.log('No se puede leer el archivo');
} else {
    console.log('------------------------ part 1 ------------------------');
    let lineas = file.split('\n');
    lineas = lineas.map(value => value.replace(/(\r\n|\n|\r)/gm, ""));
//    console.log(lineas);
    let mapa = repetirPatron(lineas, 1);
    traverseMap(mapa, 3, 1);
    console.log('total arboles', arrayArboles);
    
    console.log('------------------------ part 2 ------------------------');

    arrayArboles = [];
    mapa = repetirPatron(lineas, 1);
    traverseMap(mapa, 1, 1);
    traverseMap(mapa, 3, 1);
    traverseMap(mapa, 5, 1);
    traverseMap(mapa, 7, 1);
    traverseMap(mapa, 1, 2);
    console.log('arreglo arboles', arrayArboles);
    console.log('arboles multiplicados', arrayArboles.reduce((total, value) => total * value))
    
}


function traverseMap(mapa, right, down) {
//    console.log('mapa', mapa);
    let finished = false;
    let currentCol = 0;
    let currentRow = 0;
    let incompleto = false;
    let arboles = 0;
    while (!finished) {
        if (typeof mapa[currentRow + down][currentCol + right] !== 'undefined') {
//            console.log(mapa[currentRow + down][currentCol + right])
            if (mapa[currentRow + down][currentCol + right] === '#') arboles++;
            currentRow = currentRow + down;
            currentCol = currentCol + right;
            if (currentRow === mapa.length - 1) {
                console.log('terminado');
                console.log('arboles', arboles);
                arrayArboles.push(arboles);
                finished = true;
            }
        } else {
            console.log('Error. mapa incompleto.');
            finished = true;
            incompleto = true;
        }
    }
    if (incompleto) traverseMap( repetirPatron(mapa, 1), right, down );
}


function repetirPatron(arreglo, veces = 1) {
    let nuevo = [];
    let i = 0;
    for(let linea of arreglo) {
        nuevo[i] = linea + linea;
        let j = 1;
        while(j < veces) {
            nuevo[i] += linea;
            j++;
        }
        i++;
    }
    return nuevo;
}