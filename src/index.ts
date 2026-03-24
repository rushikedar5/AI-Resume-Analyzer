import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("AI Resume Analyzer Running 🚀")
}) 

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})