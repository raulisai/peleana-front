<!-- Cell.svelte -->
<script>
	export let value;
	export let col;
	export let row;
	import { pieceMusic, pieceGhost, pieceFire, pieceAdn } from '$lib/Icons.js';
	import { takeCell, turnoPlayer, piecePlayers, pieceActive } from '$stores/storeGame.js';

	let pieces = [pieceMusic, pieceGhost, pieceFire, pieceAdn];
	let isActive = false;
	let InMove = false;
	let isPiece = false;
	let imgPlayer = $pieceActive.typePiece;
	$: clasCell = isActive
		? 'cell bg-gradient-to-br from-blue-300 to-white border-gray-500 w-1/16 h-1/16 lg:p-2 flex items-center justify-center transform hover:scale-110 transition-transform duration-300'
		: 'cell bg-gradient-to-br from-gray-300 to-white border-gray-500 w-1/16 h-1/16 lg:p-2 flex items-center justify-center transform hover:scale-110 transition-transform duration-300';

	$: if (InMove) {
		imgPlayer = imgPlayer;
	} else {
		imgPlayer = $pieceActive.typePiece;
	}

	function handleclick() {
		if ($takeCell === 1) {
			isPiece = true;
			takeCell.set(0);
			InMove = true;

			piecePlayers.update((obj) => {
				// Modifica el objeto según tus necesidades
				obj[$pieceActive.fromPlayer].pieces[$pieceActive.numbPiece - 1].InInitialPosition = false;
				obj[$pieceActive.fromPlayer].pieces[$pieceActive.numbPiece - 1].row = row;
				obj[$pieceActive.fromPlayer].pieces[$pieceActive.numbPiece - 1].col = col;
				return obj;
			});

      console.log($piecePlayers);
		}
	}
</script>

{#if isPiece}
	<button on:click={handleclick} class={clasCell}>
		{@html pieces[imgPlayer]}
	</button>
{:else}
	<button
		on:click={handleclick}
		class="cell border bg-gradient-to-br from-gray-300 lg:p-2 to-white border-gray-500 w-1/16 h-1/16  flex items-center justify-center transform hover:scale-105 transition-transform duration-300"
	>
		<span class="text-gray-800">{value}</span>
	</button>
{/if}
