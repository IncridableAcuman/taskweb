import { z } from 'zod';

const RegisterSchema = z.object({
    firstName: z.string().min(3, "Firstname must be greater than 3 characters.")
        .max(50, "Firstname must be less than 50 characters."),
    lastName: z.string().min(3, "Lastname must be greater than 3 characters.")
        .max(50, "Lastname must be less than 50 characters."),
            username:z.string().min(3,"Username must be greater than 3 characters.")
    .max(50,"Username must be less than 50 characters."),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be greater than 8 characters")
        .max(255, "Password must be less than 255 characters."),

});

export default RegisterSchema;