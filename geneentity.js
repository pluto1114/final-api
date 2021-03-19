var _ = require('lodash');

const path = require('path')
var fs = require('fs');
var os = require('os');
var rl = require('readline');

const Handlebars = require("handlebars");
const controllers = process.argv.slice(2)

let entities = fs.readdirSync('src/entity', 'utf-8')
for (const fileName of entities) {
    const filepath = path.resolve('src/entity', fileName)
    const entityName=fileName.substring(0,fileName.length-3)

    if (fs.existsSync(filepath)) {
        const data = fs.readFileSync(filepath, 'UTF-8');

        const lines = data.split(/\r?\n/);
        const output=[]
        lines.forEach((line,index) => {
            if(index === 0 && !line.includes('BaseEntity')){
                line='import { BaseEntity } from "typeorm";\r\n'+line;
            }
            if(line.includes(`export class ${entityName}`)){
                line=`export class ${entityName} extends BaseEntity {`
            }
            // console.log(line);
            output.push(line)
        });
        console.log(output.join('\r\n').toString())
        fs.writeFileSync(filepath, output.join('\r\n').toString())
    }

}

console.log('\n\n The process of entities completed successfully.')

