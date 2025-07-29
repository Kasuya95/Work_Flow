const fs = require("fs");
fs.copyFileSync(".env.test", ".env");
console.log("🧪 Switching to TEST environment...");
require("child_process").exec("docker-compose up --build", (_, out) =>
  console.log(out)
);
