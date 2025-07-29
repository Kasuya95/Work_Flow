# Project Walkthrough & CLI Usage

This document provides a step-by-step guide on how to use the different workflows in this project. Each section explains a specific `npm` script, its purpose, the command to run it, and the expected output.

This allows you to understand the project's lifecycle without needing to run the commands yourself.

---

## 1. Development Workflow

This workflow is used for active development. It starts the server, which will automatically reload on file changes, and uses the development environment variables.

**Command:**
```bash
npm run dev
```

**What Happens:**
1.  The `scripts/dev.js` script runs.
2.  It copies the contents of `.env.dev` to a new `.env` file.
3.  It executes `docker-compose up --build`.
4.  Docker builds the image (if it's the first time) and starts the container.
5.  The server starts and listens on port **3000**.

**Expected Output (in your terminal):**
```
> work-flow@1.0.0 dev
> node scripts/dev.js

📦 Switching to DEV environment...
[+] Building 0.1s (10/10) FINISHED
...
app-1  |
app-1  | > work-flow@1.0.0 start
app-1  | > node src/index.js
app-1  |
app-1  | ✅ Server is running on port 3000
app-1  | 🌐 API: http://localhost:3000/api
```

**To Stop:** Press `Ctrl+C` in the terminal.

---

## 2. Testing Workflow

This workflow simulates running the application in a test environment.

**Command:**
```bash
npm run test
```

**What Happens:**
1.  The `scripts/test.js` script runs.
2.  It copies `.env.test` to `.env`.
3.  It executes `docker-compose up --build`.
4.  The server starts and listens on port **4000**.

**Expected Output:**
```
> work-flow@1.0.0 test
> node scripts/test.js

🧪 Switching to TEST environment...
[+] Building 0.1s (10/10) FINISHED
...
app-1  |
app-1  | > work-flow@1.0.0 start
app-1  | > node src/index.js
app-1  |
app-1  | ✅ Server is running on port 4000
app-1  | 🌐 API: http://localhost:4000/api
```

**To Stop:** Press `Ctrl+C` in the terminal.

---

## 3. Deployment Workflow (Production)

This workflow deploys the application to a production-like environment. The container runs in the background (detached mode).

**Command:**
```bash
npm run deploy
```

**What Happens:**
1.  The `scripts/deploy.js` script runs.
2.  It copies `.env.prod` to `.env`.
3.  It executes `docker-compose up --build -d`.
4.  The container starts in the background and the application runs on port **80**.

**Expected Output:**
```
> work-flow@1.0.0 deploy
> node scripts/deploy.js

🚀 Deploying to PRODUCTION...
[+] Building 0.1s (10/10) FINISHED
[+] Running 1/1
 ✔ Container app-app-1  Started
```

**How to check the status:**
```bash
docker-compose ps
```

**To Stop:**
```bash
docker-compose down
```

---

## 4. Automated CI/CD Pipeline

This is a fully automated script that simulates a CI/CD pipeline, taking the application from build to deployment.

**Command:**
```bash
npm run pipeline
```

**What Happens & Expected Output:**
The script will execute and log each stage sequentially.

```
> work-flow@1.0.0 pipeline
> node scripts/pipeline.js

🚀 Starting CI/CD Pipeline...

[1/3] Building Docker image...
> docker-compose build
[+] Building 0.1s (10/10) FINISHED

[2/3] Running tests...
Switching to TEST environment...
Starting containers for testing...
> docker-compose up -d
[+] Running 1/1
 ✔ Container app-app-1  Started
✅ Containers started. Assuming tests passed if server runs.
Shutting down test environment...
> docker-compose down
[+] Removing 1/1
 ✔ Container app-app-1  Removed

[3/3] Deploying to Production...
Switching to PRODUCTION environment...
> docker-compose up --build -d
[+] Building 0.0s (0/0)
[+] Running 1/1
 ✔ Container app-app-1  Started

✅ Pipeline finished successfully! Application deployed to production on port 80.
```
This final state leaves the application running in production mode, accessible on port 80.
