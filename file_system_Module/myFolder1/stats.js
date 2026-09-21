// const fs = require("fs");

// fs.stat("notes.txt", (err, stats) => {
//     if (err) {
//         console.log(err);
//         return;
//     }

//     console.log("Information about [notes.txt]", stats);
//     console.log("size of the file [notes.txt]",stats.size);
//     console.log("creation time ofthe file [notes.txt]",stats.birthtime.toISOString.split("T")[0]);
    

// });

fstat.stat("./myFolder1",(err,stats)=>{
    if(err){
        console.log(err);
        return
    }
    console.log(stats.size())
})