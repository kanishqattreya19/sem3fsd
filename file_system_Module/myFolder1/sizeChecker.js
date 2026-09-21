const fs = require("fs");

function sizeChecker(filename){
    const limit = 2*1024*1024 //2mb
    const stats = fs.stat(filename)

    if(stats.size > limit){
        console.log("file should be less then $(limit)");
    }
    else{
        console.log("file has been submitted");
    }
}
sizeChecker("notes.txt")
