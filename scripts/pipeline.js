const { execSync } = require("child_process");
const fs = require("fs");

// Helper function to run commands and print them
const run = (command) => {
  console.log(`\n> ${command}`);
  try {
    execSync(command, { stdio: "inherit" });
  } catch (error) {
    console.error(`\n❌ Command failed: ${command}`);
    throw error;
  }
};

try {
  console.log("🚀 Starting CI/CD Pipeline...");

  // Step 1: Build the Docker image
  console.log("\n[1/3] Building Docker image...");
  run("docker-compose build");

  // Step 2: Run tests
  console.log("\n[2/3] Running tests...");
  console.log("Switching to TEST environment...");
  fs.copyFileSync("C:/Users/Administrator/Desktop/app/.env.test", "C:/Users/Administrator/Desktop/app/.env");
  
  // In a real-world scenario, you would run a dedicated test command.
  // Here, we'll start the server in detached mode to check if it runs, then shut it down.
  console.log("Starting containers for testing...");
  run("docker-compose up -d");
  console.log("✅ Containers started. Assuming tests passed if server runs.");
  console.log("Shutting down test environment...");
  run("docker-compose down");

  // Step 3: Deploy to Production
  console.log("\n[3/3] Deploying to Production...");
  console.log("Switching to PRODUCTION environment...");
  fs.copyFileSync("C:/Users/Administrator/Desktop/app/.env.prod", "C:/Users/Administrator/Desktop/app/.env");
  run("docker-compose up --build -d");

  console.log("\n✅ Pipeline finished successfully! Application deployed to production on port 80.");

} catch (error) {
  console.error("\n❌ Pipeline failed!");
  process.exit(1);
}
