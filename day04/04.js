const util = require('../util');


let fname = 'input1.txt';
let file = util.readFile(__dirname+'\\'+fname);
if (typeof file === 'undefined') {
    console.log('No se puede leer el archivo');
} else {
    console.log('------------------------ part 1 ------------------------');
    let lineas = file.split('\n');
    lineas = lineas.map(value => value.replace(/(\r\n|\n|\r)/gm, ""));
//    console.log(lineas);
    
    let validos = ['byr:', 'iyr:', 'eyr:', 'hgt:', 'hcl:', 'ecl:', 'pid:'];
    let regex = new RegExp(validos.join('|'), "g");
    let correctos = 0;
    let pass = '';
    for (let linea of lineas) {
        pass += linea + ' ';
        if (linea === '') {
            let matches = pass.match(regex);
            if (matches === null) continue;
            if (matches.length === validos.length) correctos++;
            pass = '';
        }
    }
    console.log('correctos', correctos);
    
    console.log('------------------------ part 2 ------------------------');
    
    
    correctos = 0;
    pass = '';
    for (let linea of lineas) {
        pass += linea + ' ';
        if (linea === '') {
            let matches = pass.match(regex);
            if (matches === null) continue;
            if (matches.length === validos.length) {
                let fields = pass.split(' ');
                let incorrecto = false;
                for (let value of fields) {
                    if (value != '') {
                        if (value.substring(0, 3) === 'byr') {
                            if (value.match(/byr:(19[2-9]\d|200[0-2])$/g) === null) {
                                incorrecto = true;
                                break;
                            }
                        }
                        if (value.substring(0, 3) === 'iyr') {
                            if (value.match(/iyr:(201\d|2020)$/g) === null) {
                                incorrecto = true;
                                break;
                            }
                        }
                        if (value.substring(0, 3) === 'eyr') {
                            if (value.match(/eyr:(202\d|2030)$/g) === null) {
                                incorrecto = true;
                                break;
                            }
                        }
                        if (value.substring(0, 3) === 'hgt') {
                            if (value.match(/(hgt:(1[5-8]\d|19[0-3])cm)|(hgt:(59|6\d|7[0-6])in)/g) === null) {
                                incorrecto = true;
                                break;
                            }
                        }
                        if (value.substring(0, 3) === 'hcl') {
                            if (value.match(/hcl:#[0-9a-f]{6}$/g) === null) {
                                incorrecto = true;
                                break;
                            }
                        }
                        if (value.substring(0, 3) === 'ecl') {
                            if (value.match(/ecl:(amb|blu|brn|gry|grn|hzl|oth)$/g) === null) {
                                incorrecto = true;
                                break;
                            }
                        }
                        if (value.substring(0, 3) === 'pid') {
                            if (value.match(/pid:\d{9}$/g) === null) {
                                incorrecto = true;
                                break;
                            }
                        }
                    }
                }
                
                if (!incorrecto) correctos++;
                
            }
            pass = '';
        }
    }
    console.log('correctos', correctos);
    
    
}