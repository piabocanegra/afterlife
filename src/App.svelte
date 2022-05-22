<script>
	import Scroller from '@sveltejs/svelte-scroller';
	import TitlePage from './screens/TitlePage.svelte';
	import ChapterTitlePage from './screens/ChapterTitlePage.svelte';
	import IntroPage from './screens/IntroPage.svelte';
	import HeavenHellFunFactVis from './screens/funfact/HeavenHellFunFactVis.svelte';
	import WelcomeToHellFunFactVis from './screens/funfact/WelcomeToHellFunFactVis.svelte';
	import WelcomeToHeavenFunFactVis from './screens/funfact/WelcomeToHeavenFunFactVis.svelte';
	import SelectBeliefVis from './screens/hovervis/SelectBeliefVis.svelte';
	import PeopleDoNotBelieveInGodVis from './screens/hovervis/PeopleDoNotBelieveInGodVis.svelte';
	import HellPercentVis from './screens/percentvis/HellPercentVis.svelte';
	import HeavenPercentVis from './screens/percentvis/HeavenPercentVis.svelte';

	// variables for tracking scrolling progress
	let top = 0;
	let threshold = 0.1;
	let bottom = 1;
	let index;
	let count;

	// chapter titles
	let heavenChapter = "But, who is in heaven?";
	let earthChapter = "Let's visit the afterlife!";

	// intro paragraph text
	let intro1 = "Do our lives extend beyond the grave?";
	let intro2 = "Many of us have views on this very question, but they are rarely expressed.";
	let intro3 = "Pew Research Center surveyed 6,485 American adults in September 2021 about the afterlife, specifically their views on heaven, hell, reincarnation, fate, prayer, and other metaphysical matters."
	let intro4 = "tbd";
</script>

<main>
<Scroller top={top} bottom={bottom} threshold={threshold} bind:index bind:count>
	<div slot="background"></div>

	<div slot="foreground">
		<section><TitlePage index={1}/></section>
		<section><IntroPage index={2} paragraph1={intro1} paragraph2={intro2}/></section>
		<section><IntroPage index={3} paragraph1={intro3} paragraph2={intro4}/></section>
		<section><SelectBeliefVis index={4} currIndex={index+1}/></section>
		<!-- TODO: line chart -->

		<section><HeavenHellFunFactVis index={5}/></section>
		<section><WelcomeToHellFunFactVis index={6}/></section>
		<section><HellPercentVis index={7} currIndex={index+1}/></section>

		<section><WelcomeToHeavenFunFactVis index={8}/></section>
		<section><HeavenPercentVis index={9} currIndex={index+1}/></section>


		<section><ChapterTitlePage chapterTitle={heavenChapter} index={10}></ChapterTitlePage></section>
		<section><PeopleDoNotBelieveInGodVis index={11} currIndex={index+1}/></section>
		<!-- TODO: line chart  -->
		<!-- TODO: sunray chart  -->

		<section><ChapterTitlePage chapterTitle={earthChapter} index={12}></ChapterTitlePage></section>
		<!-- TODO: percentage chart  -->
		<!-- TODO: static infograph -->
		<!-- TODO: final summary page  -->
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
		max-height: 100vh;
	}
</style>