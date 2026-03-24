import express, { Request, Response } from "express";
import { env } from "./config/env";
import { resumeSchema } from "./validators/resume.validator";
import { upload } from "./config/mutler";
import { extractTextFromPDF } from "./utils/pdfParser";


const app = express();
app.use(express.json());

app.post("/analyze", (req: Request, res: Response) => {
  const result = resumeSchema.safeParse(req.body);

  if (!result.success) {
      return res.status(400).json({
        error: result.error.flatten(),
      });
    }

    const data = result.data;

    return res.json({
      message: "Validation successful ✅",
      data,
    });
});

app.post(
  "/upload",
  upload.single("resume"),
  async (req: Request, res: Response) => {
    try {
      console.log("FILE:", req.file);

      if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
      }

      if (req.file.mimetype !== "application/pdf") {
        return res.status(400).json({
          error: "Only PDF files allowed",
        });
      }

      const text = await extractTextFromPDF(req.file.buffer);

      return res.json({
        message: "Resume uploaded & parsed ✅",
        preview: text.substring(0, 200),
      });
    } catch (error) {
      console.error("UPLOAD ERROR:", error);
      return res.status(500).json({
        error: "Error processing file",
      });
    }
  }
);

app.listen(env.PORT, () => {
  console.log(`Server running on http://localhost:${env.PORT}`);
});
