var fs = require("fs");
var data=fs.readFileSync('Kumar.json');
const user = JSON.parse(data);
console.log("From file sysnc ");
console.log(user);