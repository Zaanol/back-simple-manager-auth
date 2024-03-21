import http from 'http';
import db from './db/db';

main();

async function main() {
    db.connect();
}

const server = http.createServer((req, res) => {
    if (req.url === '/api/test' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' })

        let response = [
            {
                id: "a1c90818-1bd0-4fd7-9b3e-78089e0a2534",
                name: "Willian Zanol"
            },
            {
                id: "04579d10-92cc-4957-9da2-70b30d728eed",
                name: "Danrlei Correa"
            }
        ];

        res.end(JSON.stringify(response))
    }
  });
  
  const PORT = process.env.PORT || 5000;
  
  server.listen(PORT, () => console.log(`Server running on port ${PORT}`));