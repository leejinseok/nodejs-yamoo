var fs = require('fs');
//async
console.log('파일 읽기 프로세스 시작');
fs.readFile('files/user.json', function(err,data){
    console.log('data : '+data);
})
console.log("파일 읽기 프로세스 끝");

//sync
var data = fs.readFileSync('files/user.json');
console.log(data);
