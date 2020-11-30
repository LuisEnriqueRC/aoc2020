const fs = require('fs');

module.exports = {
    
    readFile: (source) => {
        let data;
        try {
            data = fs.readFileSync(source, 'utf8');
        } catch (err) {
//            console.error(err)
        }
        return data;
    }
    
}