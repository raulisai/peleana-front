<script>
	export let value;
	export let col;
	export let row;
	import { pieceMusic, pieceGhost, pieceFire, pieceAdn } from '$lib/pieces.js';
	import {takeCell,pieceActive,cellACtive,piecePlayers,turnoPlayer} from '$lib/store.js';

	let pieces = [pieceMusic, pieceGhost, pieceFire, pieceAdn];
	let players= {
		20:"player1",
		30:"player2",
		40:"player3",
		50:"player4"
	};
	$: isPiece = $piecePlayers[players[value]].pieces[value / 10 - 1];
	let isActive = false;

	$: clasCell = isActive
		? 'cell bg-gradient-to-br from-blue-300 to-white border-gray-500 w-14 h-14 p-2 flex items-center justify-center transform hover:scale-110 transition-transform duration-300'
		: 'cell bg-gradient-to-br from-gray-300 to-white border-gray-500 w-14 h-14 p-2 flex items-center justify-center transform hover:scale-110 transition-transform duration-300';

	function handleclick() {
		
		if($takeCell === 0 ||($pieceActive.row === row && $pieceActive.col === col) ){
			isActive = !isActive;
		if (isActive) {
			takeCell.set(1);
			cellACtive.set(value);
			pieceActive.update(obj => {
      // Modifica el objeto según tus necesidades
      obj.value = value;
      obj.row = row;
      obj.col = col;
      return obj;
    });

		}else{
			takeCell.set(0);
			cellACtive.set(0);
			pieceActive.update(obj => {
      // Modifica el objeto según tus necesidades
      obj.value = 0;
      obj.row = 0;
      obj.col = 0;
      return obj;
    });
		}
		}else{
			alert("Tienes una pieza activa");
		}
	}
</script>

{#if isPiece}
	<button on:click={handleclick} class={clasCell}>
		{@html pieces[value / 10 - 2]}
	</button>
{:else}
	<div
		class="cell bg-gradient-to-br from-gray-300 to-white border-gray-500 w-14 h-14 p-2 flex items-center justify-center transform hover:scale-110 transition-transform duration-300"
	></div>
{/if}

<style>
</style>
