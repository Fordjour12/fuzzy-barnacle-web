import { superValidate } from 'sveltekit-superforms/client'
import type { PageServerLoad } from './$types'
import { signInFormSchema } from './schema'

export const load: PageServerLoad = async () => {
	return {
		form: superValidate(signInFormSchema)
	}
}
