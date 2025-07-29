const fs = require("fs");
fs.copyFileSync(".env.prod", ".env");
console.log("🚀 Deploying to PRODUCTION...");
require("child_process").exec("docker-compose up --build -d", (_, out) =>
  console.log(out)
);
