<script>
	import { iconGame, iconNewGame, iconfrends } from '$lib/Icons.js';
	import OpGame from './OpGame.svelte';
	import OpNewGame from './OpNewGame.svelte';
	import OpFrends from './OpFrends.svelte';

	export let optionDefault;

	let optionActive = optionDefault;
</script>

<div
	class="flex flex-col text-center items-center lg:w-4/5 lg:h-2/4 lg:ml-12 lg:mt-32 bg-slate-100/10 rounded-lg shadow-lg"
>
	<!-- menu -->
	<div class="flex flex-row w-full">
		<button
			class="flex-1 hover:bg-blue-600/10"
			on:click={() => {
				optionActive = 'Game';
			}}
		>
			<div class="ml-14">{@html iconGame}</div>
			<span>Game</span>
		</button>

		<button
			on:click={() => {
				optionActive = 'NewGame';
			}}
			class="flex-1 bg-slate-100/20 hover:bg-blue-600/10"
		>
			<div class="ml-14">{@html iconNewGame}</div>
			<span>New Game</span>
		</button>

		<button
			on:click={() => {
				optionActive = 'Frends';
			}}
			class="flex-1 bg-slate-100/20 hover:bg-blue-600/10"
		>
			<div class="ml-14">{@html iconfrends}</div>
			<span>Amigos</span>
		</button>
	</div>

	{#if optionActive === 'Game'}
		<OpGame />
	{:else if optionActive === 'NewGame'}
		<OpNewGame />
	{:else if optionActive === 'Frends'}
		<OpFrends />
	{/if}
</div>
