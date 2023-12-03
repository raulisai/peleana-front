<script>
	import { gameStart } from '$lib/store.js';
	import Board from '../components/Board.svelte';
	import SiderLeft from './siderLeft/SiderLeft.svelte';
	import SiderRight from './SiderRight.svelte';
</script>

<main
	class="flex flex-row h-screen justify-center bg-gradient-to-br from-blue-400 to-white border-gray-500"
>
	{#if $gameStart}
		<section class="flex-1">
			<SiderRight/>
		</section>
		<section class="flex-1">
			<Board />
		</section>

		<section class="flex-1">
			<SiderLeft optionDefault='Game' />
		</section>
	{:else}
		<section class="flex-2">
			<SiderRight  />
		</section>
		<section class="flex-1 lg:ml-36">
			<SiderLeft optionDefault='NewGame' />
		</section>
	{/if}
</main>
