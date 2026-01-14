import {z} from 'zod';

const LoginSchema = z.object({
    email:z.email(),
    password:z.string().min(8,"Password must be greater than 8 characters")
    .max(255,"Password must be less than 255 characters."),
    
});

export default LoginSchema;