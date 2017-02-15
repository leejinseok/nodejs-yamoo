var fs = require('fs');

module.exports = function(jsSrc, exportJs){
    // console.log(jsSrc, exportJs);
    var mergeCode = '';
    jsSrc.forEach(function(file,index){
        // console.log(file,index);
        // var content = fs.readFileSync(file);
        // console.log("content : \n%s",content);
        mergeCode += fs.readFileSync(file);
    })
    console.log(mergeCode);
}

// function combineJS(){
//     console.log('combineJS 모듈');
// }
// module.exports = combineJS;
