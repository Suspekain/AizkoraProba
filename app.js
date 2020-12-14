const os = require('os');
const fs = require('fs');

const ni = require('./eka.js');

let cpu = os.cpus();
let sistema = os.platform();
let erabiltzailea = os.hostname();

let pc = JSON.stringify(cpu);

//console.log(ni.salto);
console.log(ni.erakutsi(7));

/*fs.appendFile('testua.txt', `PCaren ezarpenak: ${pc} `, function(error) {
    if (error) {
        console.log('Arazoren bat egon da');
    }
});
*/

setTimeout(() => {
    console.log('Amaitu')
}, 2000);