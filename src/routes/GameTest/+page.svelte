<script>
	import { gameStart } from '$stores/storeGame.js';
	import Board from '$components/tablero/Board.svelte';
	import SiderLeft from '$components/menuGame/MenuGame.svelte';
	import { onMount } from 'svelte';



	const simular_game =() =>{
		console.log('init game simulator');
	}
   
</script>

<svelte:head>
	<title>Poleana game</title>
	<meta name="description" content="Game Polena" />
</svelte:head>

<main
	class="flex flex-row h-screen  justify-center bg-gradient-to-br from-blue-400 to-white border-gray-500"
>
<!-- Validate if game start for estructure of columns-->
{#if $gameStart}
		
		<section class="flex-1">
			<div class=" lg:mx-20 w-[70%] lg:w-[80%]  ">
				<Board />
			</div>
			
			
		</section>
		<section class="flex flex-col  mt-10">
			<h4 class="mb-10 ml-5 text-4xl text-orange-950">Testing</h4>
			<button type="button" on:click={simular_game} class="btnBlue">simular Game</button>
			<button type="button" on:click={simular_game} class="btnBlue">Try Game vs machine</button>
			<button type="button" on:click={simular_game} class="btnBlue">Reset</button>
		</section>
		
		
	{:else}
		<section class="flex-1 lg:ml-36">
			<SiderLeft optionDefault='NewGame' />
		</section>
	{/if}
</main>


<style>

	.btnBlue{
		@apply text-white bg-blue-700  font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2;

		&:hover{
            @apply bg-blue-800;
			transition: all 0.2s ease-in-out;
        }
	}
</style>

