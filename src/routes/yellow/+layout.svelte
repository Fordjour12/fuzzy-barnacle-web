<script>
	import { Button } from '$lib/components/ui/button'
</script>

<main class="flex items-center h-screen">
	<div class="w-screen h-full bg-red-100 rounded-r-2xl overflow-y-hidden">
		<Button href="/" variant="ghost" class="absolute top-0 text-lg font-bold mt-4 ml-4"
			>Laundry Drop</Button
		>
		<video autoplay loop class="w-full h-full object-cover">
			<track kind="captions" />
			<source src="/landing-vid.mp4" srcset="" type="video/mp4" />
		</video>
	</div>

	<div class="mx-[2em] w-[70%]">
		<slot />
	</div>
</main>
