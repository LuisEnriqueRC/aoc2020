const util = require('../util');


let fname = 'input1.txt';
let file = util.readFile(__dirname+'\\'+fname);
if (typeof file === 'undefined') {
    console.log('No se puede leer el archivo');
} else {
    console.log('------------------------ part 1 ------------------------');
    let lineas = file.split('\n');
    lineas = lineas.map((value) => Number(value))
    let suma = 2020;
    let encontrado = false;
    for (let i = 0; i < lineas.length; i++) {
        if (encontrado) break;
        for (let j = 0; j < lineas.length; j++) {
            if (i !== j) {
                if (lineas[i] + lineas[j] === suma) {
                    console.log('encontrados!');
                    console.log(`${lineas[i]} * ${lineas[j]} = ${lineas[i] * lineas[j]}`);
                    encontrado = true;
                }
            }
            
        }
    }
    
    console.log('------------------------ part 2 ------------------------');

    // part 2
    
    encontrado = false;
    for (let i = 0; i < lineas.length; i++) {
        if (encontrado) break;
//        console.log(lineas[i]);
        for (let j = 0; j < lineas.length; j++) {
            if (encontrado) break;
            if (i !== j) {
//                console.log('  '+lineas[j]);
                for (let k = 0; k < lineas.length; k++) {
                    if (k !== i && k !== j) {
                        if (lineas[i] + lineas[j] + lineas[k] === suma) {
                            console.log('encontrados!');
                            console.log(`${lineas[i]} * ${lineas[j]} * ${lineas[k]} = ${lineas[i] * lineas[j] * lineas[k]}`);
                            encontrado = true;
                            break;
                        }
//                        console.log('    '+lineas[k]);
                    }
                }
            }
            
        }
    }
    
}


