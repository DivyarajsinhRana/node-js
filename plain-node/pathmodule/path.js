const path = require("path");
console.log(path.dirname("D:/Node/node-js/pathmodule/path.js"));
console.log(path.extname("D:/Node/node-js/pathmodule/path.js"));
console.log(path.basename("D:/Node/node-js/pathmodule/path.js"));
const myPath = path.parse("D:/Node/node-js/pathmodule/path.js");
console.log(myPath);
console.log(myPath.base);