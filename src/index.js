import express from "express";
import cors from "cors";

import environment from "./config/environment.js";
import automobileRoutes from "./routes/automobileRoutes.js";

// Environment variables
const { PORT, HOST } = environment;

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use("/api", automobileRoutes);

// Start server
async function startServer() {
    try {
        app.listen(PORT, () => {
            console.log(`Server running on ${HOST}:${PORT}`);
        });
    } catch (error) {
        console.error('Error starting server:', error.message);
        process.exit(1);
    }
}

startServer();