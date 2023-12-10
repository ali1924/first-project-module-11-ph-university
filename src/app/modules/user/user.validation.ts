import { z } from 'zod'

const userValidationSchema = z.object({
  id: z.string(),
  password: z
    .string()
    .max(20, { message: 'Password must be not more than 20 character' }),
  needPasswordChange: z.boolean().optional(),
  role: z.enum(['admin', 'faculty', 'student']),
  status: z.enum(['in-progress', 'blocked']).default('in-progress'),
  isDeleted: z.boolean().optional().default(false),
})

export default userValidationSchema
