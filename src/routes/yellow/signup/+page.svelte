<script lang="ts">
	import { Button } from '$lib/components/ui/button'
	import * as Form from '$lib/components/ui/form'
	import type { PageData } from './$types'
	import { signupFormSchema } from './schema'

	export let data: PageData

	// export let form: SuperValidated<SignUpFormSchemaType>
</script>

<Button href="/yellow/login" class='float-none mb-[2em]'variant='outline'>Login</Button>

<h2>sign up route here</h2>

<Form.Root method="POST" form={data.form} schema={signupFormSchema} let:config>
	<!-- name -->
	<Form.Field {config} name="name">
		<Form.Item>
			<Form.Label>Username</Form.Label>
			<Form.Input />
			<Form.Description>This is your public display name.</Form.Description>
			<Form.Validation />
		</Form.Item>
	</Form.Field>

	<!-- Email -->
	<Form.Field {config} name="email">
		<Form.Item>
			<Form.Label>Email</Form.Label>
			<Form.Input />
			<Form.Description>This is your public display name.</Form.Description>
			<Form.Validation />
		</Form.Item>
	</Form.Field>

	<!--Password  -->
	<Form.Field {config} name="password">
		<Form.Item>
			<Form.Label>Password</Form.Label>
			<Form.Input />
			<Form.Description>This is your public display name.</Form.Description>
			<Form.Validation />
		</Form.Item>
	</Form.Field>
	<Form.Button>Submit</Form.Button>
</Form.Root>
