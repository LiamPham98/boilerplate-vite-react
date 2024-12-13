import z from "zod";

const userSchema = z.object({
  name: z.string(),
  gender: z.string(),
  phone: z.string(),
});

export type User = z.infer<typeof userSchema>;
