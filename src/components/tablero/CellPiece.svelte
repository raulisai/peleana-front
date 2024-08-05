<script>
	export let value;
	export let col;
	export let row;
	import { pieceMusic, pieceGhost, pieceFire, pieceAdn } from '$lib/Icons.js';
	import {takeCell,turnoPlayer,pieceActive,cellACtive,piecePlayers} from '$stores/storeGame.js';

	let piece = [pieceMusic, pieceGhost, pieceFire, pieceAdn];
	let players = ['player1', 'player2','player3','player4'];
	let tipePiece = (value/10) - 2;
	let textPlayer=players[tipePiece];
	let isActive = false;
	let isPiece=true;
	let ficha;

   if(row === 1){
	ficha= col-6;
   }else if(col === 1){
	ficha= row-6;
   }else if(row === 14){
	ficha= col-6;
	}else if(col === 14){
	ficha= row-6;
	   }


	$: clasCell = isActive
		? 'cell bg-gradient-to-br from-blue-300 to-white border-gray-500 w-1/16 h-1/16 p-2 flex items-center justify-center transform hover:scale-110 transition-transform duration-300'
		: 'cell bg-gradient-to-br from-gray-300 to-white border-gray-500 w-1/16 h-1/16 p-2 flex items-center justify-center transform hover:scale-110 transition-transform duration-300';

	function handleclick() {
	
		if(($takeCell === 0 ||($pieceActive.row === row && $pieceActive.col === col)) && tipePiece == $turnoPlayer){//se desactiva o activa la variable si se toca dos veces o una odnde no tenga nada seleccionado
			isActive = !isActive;//desactivado
		if (isActive) {
			
			takeCell.set(1);
			cellACtive.set(value);
			pieceActive.update(obj => {
      // Modi$pieceActiveca el objeto según tus necesidades	
	  obj.fromPlayer=textPlayer,
	  obj.numbPiece=$piecePlayers[textPlayer].pieces[ficha].value;
	  obj.typePiece=tipePiece
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
	  obj.fromPlayer='',
	  obj.numbPiece=0;
	  obj.typePiece=0;
      obj.value = 0;
      obj.row = 0;
      obj.col = 0;
      return obj;
    });
		}
		}else{
			tipePiece != $turnoPlayer ? alert("No son tu fichas") : alert("Tienes una pieza activa");
			
		}
	}
</script>

{#if $piecePlayers[textPlayer].pieces[ficha].InInitialPosition}
	<button on:click={handleclick} class={clasCell}>
		{@html piece[tipePiece]}
	</button>
{:else}
	<div
		class="cell bg-gradient-to-br from-gray-300 to-white border-gray-500 w-1/16 h-1/16  flex items-center justify-center transform hover:scale-110 transition-transform duration-300"
	></div>
{/if}

<style>
</style>
