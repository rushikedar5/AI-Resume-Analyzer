import { z } from "zod";

export const aiResponseSchema = z.object({
  strengths: z.array(z.string()),
  weaknesses: z.array(z.string()),
  suggestions: z.array(z.string()),
});

export type AIResponse = z.infer<typeof aiResponseSchema>;
