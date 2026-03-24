import { email, z } from "zod";

export const resumeSchema = z.object({
    name: z.string().min(2, "Name must have atleast 2 chars"),
    email: z.string().email("Invalid email format"),
    resumeText: z.string().min(50, "Resume content too short"),
});

export type ResumeInput = z.infer<typeof resumeSchema>;