import { z } from "zod";
// Schema for faculty signup
export const facultySignupSchema = z.object({
  designation: z.string().min(2).max(5),
  firstname: z.string().min(2).max(100),
  lastname: z.string().min(2).max(100),
  email: z.string().email(),
  password: z.string().min(8).max(100),
});
// Schema for faculty login
export const facultyLoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(100),
});
// Schema for student signup
export const studentSignupSchema = z.object({
  firstname: z.string().min(2).max(100),
  lastname: z.string().min(2).max(100),
  email: z.string().email(),
  password: z.string().min(8).max(100),
});
// Schema for student login
export const studentLoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(100),
});
