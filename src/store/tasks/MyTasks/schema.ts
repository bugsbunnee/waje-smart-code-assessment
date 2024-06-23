import { z } from 'zod';

export const schema = z.object({
    title: z.string().min(1, { message: "Provide a title!" }).max(50),
});

export type NewTask = z.infer<typeof schema>;
