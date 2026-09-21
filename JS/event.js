import fs from "fs";

// setTimeout(() => {
//     console.log("SetTimeOut");
// }, 1000);

// fs.readFile("intro.txt", "utf8", (err, data) => {
//     console.log("file read completed");
// });

// setInterval(() => {
//     console.log("set interval after 500 ms");
// }, 500);

// setImmediate(() => {
//     console.log("set immediate");
// });

fs.readFile("intro.txt", "utf8", (err,data)=>{
    console.log("file read completed");
    setTimeout(() => {
    console.log("set timeout");
    }, 1000);
    setImmediate(()=>{
        console.log("set immediate")
    })
})