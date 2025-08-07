import { z } from 'zod';

export const addToCardSchema = z.object({
    id: z.number({
        required_error: `The 'id' field is required`,
        invalid_type_error: 'The ID must be a number'
    })
});