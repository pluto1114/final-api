var _ = require('lodash');

const path = require('path')
const fs = require('fs')
const Handlebars = require("handlebars");
const controllers = process.argv.slice(2)
var source = fs.readFileSync(path.resolve('src/tpl', 'controller.tpl'), 'utf-8');


var template = Handlebars.compile(source);


const controllerTplArr = []
for (const name of controllers) {
    var data = {
        "name": name,
        "capitalName": _.capitalize(name),
        "ext":"Ext"
    };
    controllerTplArr.push({
        name: name,
        capitalName: _.capitalize(name),
        tpl: template(data)
    })
}
let filePath = 'src/controller/'
for (const ctpl of controllerTplArr) {
    let file = path.resolve(__dirname, filePath) + `/${ctpl.capitalName}Controller.ts`
    if (!fs.existsSync(file)) {
        fs.writeFileSync(file, ctpl.tpl)
    }
}
console.log('\n\nProcess completed successfully.')

