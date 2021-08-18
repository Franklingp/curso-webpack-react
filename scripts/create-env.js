const fs = require("fs");

// writing the env file with the enviorment variable
fs.writeFileSync("./.env", `API=${process.env.API}\n`);