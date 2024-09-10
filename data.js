const fs = require('fs');

let file = fs.readFileSync('Проект.txt', {encoding: 'utf-8'});
filterFile = file.split('\r\n\r\n\r\n');
filterFile = filterFile[0].split('\r\n\r\n');
// filterFile = filterFile.filter((elem) => elem != filterFile[0]);
let tagsFile = new Array;
for (let elem of filterFile){
    elem = elem.split('\r\n');
    tagsFile.push({id: Number(elem[0].slice(2)), class: Number(elem[1].split(': ')[1]), level: Number(elem[2].split(': ')[1]), tags: elem[3].split(': ')[1].split(', ').join('/')});
}
console.log(tagsFile)

module.exports.default = tagsFile;