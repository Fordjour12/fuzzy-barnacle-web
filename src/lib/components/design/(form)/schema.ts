import { z } from 'zod'

const signInFromSchema = z.object({
	email: z.coerce
		.string({ invalid_type_error: 'Must be an email', required_error: 'Email is required' })
		.email('must be a valid email address'),
	password: z.coerce
		.string({ invalid_type_error: 'Enter a password', required_error: 'Password is required' })
		.min(8, 'must be a least 8 character')
		.max(100, 'must be at least 100 character')
})

const registerFormSchema = z.object({
	username: z.coerce
		.string({ invalid_type_error: 'Must be username  ', required_error: 'Username is required ' })
		.min(2, 'Must be a least 3 character')
		.max(100, 'Must be least 100 character'),
	email: z.coerce
		.string({ invalid_type_error: 'Must be email', required_error: 'Must be valid email' })
		.email('must be a valid email address'),
	password: z.coerce
		.string({ required_error: 'Must be a password' })
		.min(8, 'Must be at least 8 character')
		.max(100, 'Must at most 100 character')
})

export type SignInFromSchemaType = typeof signInFromSchema
export type RegisterFormSchemaType = typeof registerFormSchema

export { registerFormSchema, signInFromSchema }
