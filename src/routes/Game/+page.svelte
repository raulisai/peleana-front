<script>
	import { gameStart } from '$stores/storeGame.js';
	import Board from '$components/tablero/Board.svelte';
	import SiderLeft from '$components/menuGame/MenuGame.svelte';
	import { onMount } from 'svelte';

   
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
			<div class=" lg:mx-20 w-[70%] lg:w-[80%] h-screen     ">
				<Board />
			</div>
			
		</section>
		
	{:else}
		<section class="flex-1 lg:ml-36">
			<SiderLeft optionDefault='NewGame' />
		</section>
	{/if}
</main>
