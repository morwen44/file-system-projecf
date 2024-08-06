const fs = require("node:fs");

const data = fs.readFileSync("nuevo_archivo.txt", "utf-8");

console.log(data);
