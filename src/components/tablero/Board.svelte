<!-- Board.svelte -->
<script>
	import Cell from './Cell.svelte';
	import CenterBoard from './CenterBoard.svelte';
	import CellPiece from './CellPiece.svelte';
	import boardShape from '$lib/sourceBoard.js';
</script>

<div class="board lg:mt-10 z-0 bg-[#B68D54]">
	{#each boardShape as row, rowIndex}
		{#each row as cell, cellIndex}
			{#if cell === 0}
				<div class="cell w-1/16 h-1/16"></div>
			{:else if cell === 20 || cell === 30 || cell === 40 || cell === 50}
				<CellPiece value={cell} col={cellIndex} row={rowIndex} />
			{:else}
				<Cell value={cell} col={cellIndex} row={rowIndex} />
			{/if}
		{/each}
	{/each}
</div>
<!-- El centro del juego -->
<div class=" lg:w-1/2 md:w-3/5  sm:-mt-[60%]  2xl:-mt-[50%]  md:ml-28 lg:ml-52  z-10">
	<CenterBoard />
</div>

<style>
	/* Estilos opcionales para el tablero */
	.board {
		display: grid;
		grid-template-columns: repeat(16, 1fr);
		gap: 0; /* Elimina el espacio entre las celdas */
	}
	
</style>
