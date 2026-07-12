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
        .min(1, "Phone number is required.")
        .regex(/^\+?[1-9]\d{1,14}$/, "Please enter a valid phone number"),

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