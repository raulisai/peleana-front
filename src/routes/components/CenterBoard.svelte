<!-- CenterComponent.svelte -->
<script>
	// Puedes agregar propiedades o eventos según tus necesidades
	import shootList from '$lib/gameTest.js';
	let count = 0;
	let dice1 = '';
	let dice2 = '';

	function shoot() {
		let row = shootList[count];
		dice1 = row[0];
		dice2 = row[1];
		count++;
		if (count == shootList.length) {
			count = 0;
		}
	}
</script>

<div class="flex flex-col items-center text-center r">
	<div class="bg-white w-32 h-32 mt-6">
		<p class="text-3xl mt-10">{dice1}</p>
	</div>
	<div class="bg-white w-32 h-32 my-6">
		<p class="text-3xl mt-10">{dice2}</p>
	</div>
	<div class="">
		<button on:click={shoot} class="bg-blue-300 w-72 h-12 rounded-md">Tiro</button>
	</div>
</div>

<style>
</style>
