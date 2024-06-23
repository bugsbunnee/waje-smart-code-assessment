import { z } from 'zod';

export const schema = z.object({
    email: z.string().min(1, { message: 'Please provide an email address'}).email({ message: 'Invalid email address' }),
    password: z.string().min(1, { message: 'Please enter your password!' }),
});

export type UserLogin = z.infer<typeof schema>;
