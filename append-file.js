const fs = require("node:fs");

fs.appendFileSync("nuevo_archivo.txt", "\nappend", "utf8");
