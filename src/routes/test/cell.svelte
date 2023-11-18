<!-- Cell.svelte -->
<script>
    export let value;
  </script>
  
  <div class="cell border border-gray-300 w-16 h-16 flex items-center justify-center">
    {#if value === 0}
      <!-- Contenido específico cuando el valor es 0 -->
      <span class="text-red-500">Contenido 0</span>
    {:else}
      <!-- Contenido para otros valores -->
      <span>{value}</span>
    {/if}
  </div>
  