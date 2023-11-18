<!-- Board.svelte -->
<script>
    import Cell from './cell.svelte';
  
    const boardShape = [
      [8,1,1,1,1,1,7,1,1,7,1,1,1,1,1,7],
      [1,1,1,0,0,1,5,5,5,5,1,0,0,1,1,1],
      [1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1],
      [1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
      [1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1],
      [8,5,1,0,0,0,0,0,0,0,0,0,0,1,5,6],
      [1,5,1,0,0,0,0,0,0,0,0,0,0,1,5,1],
      [1,5,1,0,0,0,0,0,0,0,0,0,0,1,5,1],
      [8,5,1,0,0,0,0,0,0,0,0,0,0,1,5,6],
      [1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1],
      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1],
      [1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1],
      [1,1,1,0,0,1,5,5,5,5,1,0,0,1,1,1],
      [9,1,1,1,1,1,9,1,1,9,1,1,1,1,1,6],
    ];
  </script>
  
  <style>
    /* Estilos opcionales para el tablero */
    .board {
      display: grid;
      grid-template-columns: repeat(16, 1fr);
      gap: 4px;
      padding: 20px;
    }
  </style>
  
  <div class="board">
    {#each boardShape as row, rowIndex}
      {#each row as cell, cellIndex}
        {#if cell !== 0}
          <!-- Muestra el componente de celda solo si el valor no es 0 -->
          <Cell value={cell} />
        {/if}
      {/each}
    {/each}
  </div>
  