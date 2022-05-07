<script>
	import Scroller from '@sveltejs/svelte-scroller';
	import TitlePage from './screens/TitlePage.svelte';
	import LineDrawingVis from './screens/LineDrawingVis.svelte';
	import HeavenHellFunFactVis from './screens/HeavenHellFunFactVis.svelte';
	import WelcomeToHellFunFactVis from './screens/WelcomeToHellFunFactVis.svelte';
	import WelcomeToHeavenFunFactVis from './screens/WelcomeToHeavenFunFactVis.svelte';

	let top = 0.1;
	let threshold = 0.5;
	let bottom = 0.9;
</script>


<main>
		<TitlePage/>
		<LineDrawingVis/>
		<HeavenHellFunFactVis/>
		<WelcomeToHellFunFactVis/>
		<WelcomeToHeavenFunFactVis/>
</main>


<style>
	main {
		text-align: center;
		margin: 0 auto;
	}
	:global(h1, h3) {
		padding: 1em;
    max-width: 50%;
    margin: auto;
		font-family: minion-pro-caption, serif;
		font-weight: 400;
		font-style: normal;
	}
	:global(div.page) {
		text-align: center;
		width: 100%;
		min-height: 100vh;
	}
</style>