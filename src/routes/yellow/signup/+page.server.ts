import { superValidate } from 'sveltekit-superforms/client'
import type { PageServerLoad } from './$types'
import { signupFormSchema } from './schema'

export const load: PageServerLoad = async () => {
	return {
		form: superValidate(signupFormSchema)
	}
}
