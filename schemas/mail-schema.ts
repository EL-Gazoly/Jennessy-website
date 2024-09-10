"use client";

import { z } from "zod";

export const mailScehma = z.object({
  email: z.string().email(),
  name: z.string().min(3),
  number: z
    .string()
    .min(3)
    .regex(/^\d+$/, "Phone number must contain only numbers"), // Regex to allow only digits
  message: z.string().min(3),
});
