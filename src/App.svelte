<script>
	import Scroller from '@sveltejs/svelte-scroller';
	import TitlePage from './components/TitlePage.svelte';
	import LineDrawingVis from './components/LineDrawingVis.svelte';

	let top = 0.1;
	let threshold = 0.5;
	let bottom = 0.9;
</script>


<main>
		<TitlePage/>
		<LineDrawingVis/>
</main>


<style>
	main {
		text-align: center;
		max-width: 1000px;
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
	:global(div) {
		text-align: center;
		background-color: #cdcdcd;
		width: 100%;
		min-height: 100vh;
	}
</style>