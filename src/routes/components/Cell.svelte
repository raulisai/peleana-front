<!-- Cell.svelte -->
<script>
    export let value;
    export let col;
	  export let row;
    import {pieceMusic, pieceGhost,pieceFire,pieceAdn} from '$lib/pieces.js';
    import {takeCell,turnoPlayer,piecePlayers} from '$lib/store.js';
    

    let pieces=[pieceGhost,pieceFire,pieceMusic,pieceAdn];
	  let isActive = false;
    let isPiece = false;
    $: clasCell = isActive
		? 'cell bg-gradient-to-br from-blue-300 to-white border-gray-500 w-14 h-14 p-2 flex items-center justify-center transform hover:scale-110 transition-transform duration-300'
		: 'cell bg-gradient-to-br from-gray-300 to-white border-gray-500 w-14 h-14 p-2 flex items-center justify-center transform hover:scale-110 transition-transform duration-300';

let imgPlayer = $piecePlayers[$turnoPlayer].typePiece;




    function handleclick() {

      if($takeCell === 1){
        isPiece = true;
        takeCell.set(0);
        piecePlayers.update(obj => {
      // Modifica el objeto según tus necesidades
      obj.player1.pieces[0].InInitialPosition= false
      return obj;
    });
      }
      console.log($piecePlayers);
    }
    
  </script>

{#if isPiece}
	<button on:click={handleclick} class={clasCell}>
		{@html pieces[imgPlayer]}
	</button>
{:else}
<button on:click={handleclick} class="cell border bg-gradient-to-br from-gray-300 to-white border-gray-500 w-14 h-14 p-2 flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
  <span class="text-gray-800">{value}</span>
</button>
{/if}
    
  


  