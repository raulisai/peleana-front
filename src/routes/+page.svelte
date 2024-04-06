<script>
    import { page } from '$app/stores'; 

</script>

<svelte:head>
	<title>Poleana Home</title>
	<meta name="description" content="Game Polena" />
</svelte:head>



<div class="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-sky-500 to-indigo-500  bg-cover bg-center">
    <h2 class="text-2xl md:text-4xl lg:text-6xl text-yellow-200 font-bold my-4 text-center">
        Comienza a jugar el mejor juego de tablero<br>
        <span class="text-4xl lg:text-8xl">Poleana</span>
    </h2>
    <a href="/Game" class="bg-indigo-600 text-white text-lg lg:text-2xl font-medium py-2 lg:py-4 px-4 lg:px-8 rounded-lg transition duration-300 ease-in-out hover:bg-indigo-700 hover:scale-105">
        Start
    </a>
</div>


 