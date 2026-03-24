import express, { Request, Response } from "express";
import { env } from "./config/env";
import { resumeSchema } from "./validators/resume.validator";

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

app.listen(env.PORT, () => {
  console.log(`Server running on http://localhost:${env.PORT}`);
});
