import dotenv from "dotenv";

dotenv.config();

export const env = {
    PORT: process.env.PORT || 3001,
    OPENROUTER_API_KEY: process.env.OPENROUTER_API_KEY || "",
}
