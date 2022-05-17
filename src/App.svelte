<script>
	import * as d3 from 'd3';
	import Scroller from '@sveltejs/svelte-scroller';
	import TitlePage from './screens/TitlePage.svelte';
	import HeavenHellFunFactVis from './screens/HeavenHellFunFactVis.svelte';
	import WelcomeToHellFunFactVis from './screens/WelcomeToHellFunFactVis.svelte';
	import WelcomeToHeavenFunFactVis from './screens/WelcomeToHeavenFunFactVis.svelte';
	import SelectBeliefVis from './screens/SelectBeliefVis.svelte';

	// variables for tracking scrolling progress
	let top = 0;
	let threshold = 0.05;
	let bottom = 1;
	let index;
	let count;
</script>

<main>
<Scroller top={top} bottom={bottom} threshold={threshold} bind:index bind:count>
	<div slot="background"></div>

	<div slot="foreground">
		<section><TitlePage/></section>
		<section><SelectBeliefVis currIndex={index+1}/></section>
		<section><HeavenHellFunFactVis/></section>
		<section><WelcomeToHellFunFactVis/></section>
		<section><WelcomeToHeavenFunFactVis/></section>
	</div>
</Scroller>
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