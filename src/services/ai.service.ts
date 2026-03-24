import OpenAI from "openai";
import { env } from "../config/env";
import { aiResponseSchema } from "../validators/aiResponse.validator";

const client = new OpenAI({
  apiKey: env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
});

export const analyzeResume = async (resumeText: string) => {
  const prompt = `
Return ONLY valid JSON (no markdown, no extra text):
{
  "strengths": [],
  "weaknesses": [],
  "suggestions": []
}

Resume:
${resumeText}
`;

  const response = await client.chat.completions.create({
    model: "openrouter/free",
    messages: [
      { role: "system", content: "You are a helpful career assistant." },
      { role: "user", content: prompt },
    ],
    temperature: 0.2,
  });

  const raw = response.choices[0].message.content ?? "";

  const cleaned = raw
    .replace(/^```(?:json)?\s*/i, "")
    .replace(/```\s*$/i, "")
    .trim();

  let parsed;
  try {
    parsed = JSON.parse(cleaned);
  } catch (err) {
    console.error("JSON PARSE ERROR:", raw);
    throw new Error("Invalid AI response format");
  }

  const result = aiResponseSchema.safeParse(parsed);
  if (!result.success) {
    console.error("ZOD VALIDATION ERROR:", result.error);
    throw new Error("AI response structure invalid");
  }

  return result.data;
};