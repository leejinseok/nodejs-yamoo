var fs = require('fs');

console.log('파일 읽기 프로세스 시작');
var data = fs.readFileSync('files/user.json');
// console.log(data.toString());
var json2obj = JSON.parse(data.toString());
console.log(json2obj.nickname);
console.log("파일 읽기 프로세스 끝");
