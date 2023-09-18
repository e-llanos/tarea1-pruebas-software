import dotenv from "dotenv";

dotenv.config({ path: "env/.local.env" });

export default {
    HOST: process.env.HOST || "http://localhost",
    PORT: process.env.PORT || 3000,
};
