import http from 'http';
import fs from 'fs';
const server = http.createServer((req, res) => {
    fs.readFile('config.json', 'utf8', (err, data) => {
        if (err) {
            res.writeHead(500, {
                "Content-Type": "text/plain"
            });
            res.end("Error reading config.json");
            return;
        }
        res.writeHead(200, {
            "Content-Type": "application/json"
        });
        res.end(data);
    });
});
server.listen(3000, () => {
    console.log("Server running on port 3000");
});