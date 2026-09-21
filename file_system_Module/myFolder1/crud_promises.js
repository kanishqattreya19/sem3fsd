import { readFile } from 'fs'
import fs from 'fs/promises'

function readFileContent(filename){
    const data = await readFile(filename , "utf8")
    console.log(data);
}
readFileContent("notes.txt")