const db = require("./db/db.js");

main();

async function main() {
    db.connect();
}