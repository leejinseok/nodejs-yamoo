var fs = require('fs');
var cssDoc = "#nodejs {margin:0;padding:0}";
var options = {encoding:'utf8'};
console.log('문서쓰기시작');
fs.writeFileSync('files/style.css', cssDoc, options);
console.log('문서쓰기끝');
