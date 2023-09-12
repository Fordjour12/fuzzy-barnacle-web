<main class="flex items-center h-screen">
	<div class="w-screen bg-red-100 rounded-r-2xl object-cover">
		<video autoplay loop class="w-full h-full">
			<track kind="captions" />
			<source src="/landing-vid.mp4" srcset="" type="video/mp4" />
		</video>
	</div>

	<div class="mx-[2em] w-[70%]">
		<slot />
	</div>
</main>
