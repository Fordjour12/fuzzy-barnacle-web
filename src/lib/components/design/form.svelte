<script lang="ts">
    import * as Form from '$lib/components/ui/form'
    import {registerFormSchema} from '$lib/components/design/(form)/schema'
	import type { SuperValidated } from 'sveltekit-superforms'
    import type {RegisterFormSchemaType} from '$lib/components/design/(form)/schema'


    export let form:SuperValidated<RegisterFormSchemaType>

</script>


<Form.Root method="POST" {form} schema={registerFormSchema} let:config>
  <Form.Field {config} name="username">
    <Form.Item>
      <Form.Label>Username</Form.Label>
      <Form.Input />
      <Form.Description>This is your public display name.</Form.Description>
      <Form.Validation />
    </Form.Item>
  </Form.Field>
  <Form.Button>Submit</Form.Button>
</Form.Root>




