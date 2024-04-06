<script>
	import { gameStart } from '$stores/storeGame.js';
</script>

<div class="flex flex-col">
	<h3>juega Poleana</h3>
	<button class="btn hover:bg-blue-500">Juega Online</button>
	<button
		on:click={() => {
			gameStart.set(true);
		}}
		class="btn hover:bg-blue-500">Computer</button
	>
	<button class="btn hover:bg-blue-500">Jugar con amigos</button>
	<div class="bg-gray-200/30">
		<h3>Jugar en local con amigos</h3>
		<input type="number" placeholder="N" class="bg-gray-200 rounded-lg p-2 my-2 w-20" />
		<button class="btn hover:bg-blue-500">Jugar</button>
	</div>
</div>

<style>
	.btn {
		@apply bg-blue-400 text-white font-bold py-5 w-80 rounded my-5;
	}
</style>
