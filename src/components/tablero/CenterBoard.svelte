<!-- CenterComponent.svelte -->
<script>
	// Puedes agregar propiedades o eventos según tus necesidades
	import shootList from '$lib/gameTest.js';
	let count = 0;
	let dice1 = '';
	let isChecked_dice1 = false;
	let dice2 = '';
	let isChecked_dice2 = false;

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
	<div class="text-white mt-6">
		<p class="text-1xl mt-10">Selecciona el dado o dados a usar</p>
	</div>
	<div class="bg-white w-1/4 h-1/4 mt-6">
		<input type="checkbox" bind:checked={isChecked_dice1}  />
		<p class="text-2xl">{dice1}</p>
	</div>
	<div class="bg-white w-1/4 h-1/4 my-6">
		<input type="checkbox" bind:checked={isChecked_dice2}  />
		<p class="text-2xl">{dice2}</p>
	</div>
	<div>
		<p class="text-white">Turno Player: <strong>1</strong></p>
	</div>
	<div class="">
		<button on:click={shoot} class="bg-blue-300 w-48 h-8 rounded-md">Tiro</button>
	</div>
</div>

<style>
</style>
