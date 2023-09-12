import { z } from 'zod'

const signupFormSchema = z.object({
	name: z.string().min(2).max(100),
	email: z.string().email(),
	password: z.string().min(10)
})

export type SignUpFormSchemaType = typeof signupFormSchema

export { signupFormSchema }
