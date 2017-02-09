var fs = require('fs');

var styleDoc = 'files/style.css';
fs.watchFile(styleDoc,function(cur, prv){
    var doc = fs.readFileSync(styleDoc);
    console.log('변경된 문서 내용 : '+doc);
})

// watch dir
// fs.watch('files', function(event, filename){
//     console.log('event is : '+event);
//     if(filename){
//         console.log("filename provided : "+filename);
//     }
// })
