import { z } from "zod"

export const signupSchema = z.object({
    name: z
        .string()
        .min(1, "Name is required")
        .min(4, "Name must be at least 4 characters.")
        .max(20, "Name cannot exceed 20 characters"),

    email: z
        .string()
        .min(1, "Email is required.")
        .email("Please enter a valid email address"),

    phone: z
        .string()
        .regex(/^[6-9]\d{9}$/, "Enter a valid Indian mobile number"),

    password: z
        .string()
        .min(8, "Password must be atleast 8 characters long.")

});

export const signinSchema = z.object({

    email: z
        .string()
        .min(1, "Email is required.")
        .email("Please enter a valid email address"),


    password: z
        .string()
        .min(8, "Password must be atleast 8 characters long.")

});

export type signupFormData = z.infer<typeof signupSchema>;
export type signinFormData = z.infer<typeof signinSchema>;