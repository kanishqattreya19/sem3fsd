const fs = require("fs")
fs.writeFileSync("notes.txt","Hello Node.js")

const data = fs.readFileSync("notes.txt")
console.log('raed data: $(data)')

fs.appendFileSync("notes.txt", "ECE-A")