<script>
  import { fade, scale } from 'svelte/transition';
  import { elasticOut } from 'svelte/easing';
  import { fly } from 'svelte/transition'

  let dice = [1, 1];
  let isRolling = false;
  let selectedDice = [false, false];
  let NotisTurn = false;
  let valueDice = 0;

  const diceIcons = [
    'M10 12a2 2 0 100-4 2 2 0 000 4z',
    'M10 6a2 2 0 100-4 2 2 0 000 4zM10 18a2 2 0 100-4 2 2 0 000 4z',
    'M10 6a2 2 0 100-4 2 2 0 000 4zM10 18a2 2 0 100-4 2 2 0 000 4zM10 12a2 2 0 100-4 2 2 0 000 4z',
    'M6 6a2 2 0 100-4 2 2 0 000 4zM6 18a2 2 0 100-4 2 2 0 000 4zM14 6a2 2 0 100-4 2 2 0 000 4zM14 18a2 2 0 100-4 2 2 0 000 4z',
    'M6 6a2 2 0 100-4 2 2 0 000 4zM6 18a2 2 0 100-4 2 2 0 000 4zM14 6a2 2 0 100-4 2 2 0 000 4zM14 18a2 2 0 100-4 2 2 0 000 4zM10 12a2 2 0 100-4 2 2 0 000 4z',
    'M6 6a2 2 0 100-4 2 2 0 000 4zM6 12a2 2 0 100-4 2 2 0 000 4zM6 18a2 2 0 100-4 2 2 0 000 4zM14 6a2 2 0 100-4 2 2 0 000 4zM14 12a2 2 0 100-4 2 2 0 000 4zM14 18a2 2 0 100-4 2 2 0 000 4z'
  ];

  function rollDice() {
    isRolling = true;
    setTimeout(() => {
      dice = dice.map((value, index) => 
        Math.floor(Math.random() * 6) + 1
      );
      valueDice= 0;
      selectedDice = [false, false];
      isRolling = false;
      NotisTurn = true;
    }, 500);

    
    if (dice.every(die => die % 2 === 0)) {
      alert("tiras de nuevo !");
      NotisTurn = false;
    }
  }

  function toggleDiceSelection(index) {
    selectedDice[index] = !selectedDice[index];
    if (selectedDice.every(selected => selected)) {
      valueDice = dice.reduce((sum, current) => sum + current, 0);
    }else{
      if (!selectedDice[index]) {
        valueDice -= dice[index];
      } else {
        valueDice += dice[index];
      }
    }
    
   
    console.log(selectedDice);
    console.log(selectedDice.every(selected => selected));
    console.log(valueDice);
  }
</script>

<div class="w-full max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div class="p-8">
    <div class="flex justify-center space-x-8 mb-6">
      {#each dice as value, index}
        <div 
          class="text-4xl font-bold border-2"
          key={index}
          in:scale={{duration: 300, delay: 300, easing: elasticOut}}
     
          
          
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 20 20" fill="currentColor">
            <path d={diceIcons[value - 1]} />
          </svg>
        </div>
      {/each}
    </div>
    <div class="flex justify-center space-x-8 mb-4">
      {#each dice as _, index}
        <label class="flex items-center space-x-2">
          <input 
            type="checkbox" 
            bind:checked={selectedDice[index]} 
            on:click={() => toggleDiceSelection(index)}
            class="form-checkbox h-5 w-5 text-blue-600"
          >
          <span>Dado {index + 1}</span>
        </label>
      {/each}
    </div>
    <button 
      on:click={rollDice} 
      disabled={NotisTurn}
      class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isRolling ? "Tirando..." : "Tirar dados"}
    </button>
  </div>
</div>

<style>
  /* Estilos adicionales si son necesarios */
</style>