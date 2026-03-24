import express from "express";
import { env } from "./config/env";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("AI Resume Analyzer Running 🚀")
}) 

app.listen(env.PORT, () => {
    console.log(`Server running on http://localhost:${env.PORT}`);
})