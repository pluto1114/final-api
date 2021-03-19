var _ = require('lodash');

const path = require('path')
var fs = require('fs');
var os = require('os');
var rl =  require('readline');

const Handlebars = require("handlebars");
const controllers = process.argv.slice(2)
var readWriteFileByLineWithProcess = function (readName, writeName, callback) {
    var readStream = fs.createReadStream(readName);
    var writeStream = fs.createWriteStream(writeName);
    var readLine = rl.createInterface({
        input: readStream
    })
    readLine.on('line', function (line) {
        var rs = callback(line);
        writeStream.write(rs + os.EOL);
    })
}

let entities = fs.readdirSync('src/entity', 'utf-8')
for (const entityName of entities) {
    const filepath = path.resolve('src/entity', entityName)

    if (entityName.includes('User')) {
        readWriteFileByLineWithProcess(filepath, './User2.ts', function (line) {
            console.log(line)
            let rs = line;
            return rs
        })
    }

}

console.log('\n\nProcess completed successfully.')

