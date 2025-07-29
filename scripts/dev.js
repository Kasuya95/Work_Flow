const fs = require("fs");
fs.copyFileSync(".env.dev", ".env");
console.log("📦 Switching to DEV environment...");
const { exec } = require("child_process");
exec("docker-compose up --build", (err, stdout, stderr) => {
  if (err) console.error(err);
  else console.log(stdout);
});
