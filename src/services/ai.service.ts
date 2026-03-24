import OpenAI from "openai";
import { env } from "../config/env";

const client = new OpenAI({
  apiKey: env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
});

export const analyzeResume = async (resumeText: string) => {
  const prompt = `
You are an expert resume reviewer.

Analyze the following resume and return JSON:

{
  "strengths": [],
  "weaknesses": [],
  "suggestions": []
}

Resume:
${resumeText}
`;

  const response = await client.chat.completions.create({
    model: "openrouter/free", // ✅ auto-picks an available free model
    messages: [
      { role: "system", content: "You are a helpful career assistant." },
      { role: "user", content: prompt },
    ],
    temperature: 0.3,
  });

  return response.choices[0].message.content;
};