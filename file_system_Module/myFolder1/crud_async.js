const fs = require("fs")

// callback method


// create file
fs.writeFile("notes.txt", "Hello World", (err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("success")
})

fs.readFile("notes.txt", (err, data)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(data)
})

// update file
const updateData = "Hello ECE-A";
fs.appendFileSync("notes.txt", updateData, (err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("File updated successfully");
})

