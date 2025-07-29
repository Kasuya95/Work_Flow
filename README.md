# Project Workflow Demo

This project demonstrates a simple Node.js and Express application with a complete development, testing, and deployment workflow using Docker and Docker Compose.

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/products/docker-desktop/)

## Installation

1.  Clone the repository or download the source code.
2.  Install the required npm packages:
    ```bash
    npm install
    ```

## Environment Variables

The application uses different `.env` files for each environment. These are automatically managed by the scripts.

-   `.env.dev`: Configuration for the development environment.
-   `.env.test`: Configuration for the testing environment.
-   `.env.prod`: Configuration for the production environment.

The key variables are:
-   `PORT`: The port the server will run on.
-   `NODE_ENV`: The current environment (e.g., `development`).
-   `API_URL`: The URL for the API.

## Available Scripts

The `package.json` file includes several scripts to manage the application lifecycle:

-   **`npm start`**
    -   Starts the application directly using `node`. This is the command used inside the Docker container.

-   **`npm run dev`**
    -   Switches to the **development** environment (`.env.dev`).
    -   Builds and starts the Docker containers using `docker-compose`.
    -   The application will be available on port **3000**.

-   **`npm run test`**
    -   Switches to the **testing** environment (`.env.test`).
    -   Builds and starts the Docker containers.
    -   The application will be available on port **4000**.

-   **`npm run deploy`**
    -   Switches to the **production** environment (`.env.prod`).
    -   Builds and starts the Docker containers in detached mode (`-d`).
    -   The application will be available on port **80**.

-   **`npm run pipeline`**
    -   Executes a complete CI/CD pipeline simulation:
    1.  **Build**: Builds the Docker image.
    2.  **Test**: Runs the application in the test environment to ensure it starts correctly, then shuts it down.
    3.  **Deploy**: If the test is successful, it deploys the application to the production environment.

## Workflow

The core of this project is its Docker-based workflow. Instead of running Node.js directly on your machine for development, you run it inside a container that mirrors the production environment. This ensures consistency and reduces environment-related bugs.
