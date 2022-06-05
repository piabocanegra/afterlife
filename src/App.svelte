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
	import AfterlifePercentVis from './screens/percentvis/AfterlifePercentVis.svelte';
	import SunrayVis from './screens/SunrayVis.svelte';
	import ReligionLineVis from './screens/ReligiouslyUnaffiliatedLineVis.svelte';
	import Takeaways from './screens/TakeawayPage.svelte';
	import MetaphysicalSelectVis from './screens/MetaphysicalSelectVis.svelte';
	import NonBelieversLineVis from './screens/NonbelieversLineVis.svelte';

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
	let intro4 = "66% of the sample were Christians.";
</script>

<main>
<Scroller top={top} bottom={bottom} threshold={threshold} bind:index bind:count>
	<div slot="background"></div>

	<div slot="foreground">
		<section><TitlePage index={1}/></section>
		<section><IntroPage index={2} paragraph1={intro1} paragraph2={intro2}/></section>
		<section><IntroPage index={3} paragraph1={intro3} paragraph2={intro4}/></section>
		<section><SelectBeliefVis index={4} currIndex={index+1}/></section>
		<section><ReligionLineVis index={5} currIndex={index+1}/></section>

		<section><HeavenHellFunFactVis index={6}/></section>
		<section><WelcomeToHellFunFactVis index={7}/></section>
		<section><HellPercentVis index={8} currIndex={index+1}/></section>

		<section><WelcomeToHeavenFunFactVis index={9}/></section>
		<section><HeavenPercentVis index={10} currIndex={index+1}/></section>

		<section><ChapterTitlePage chapterTitle={heavenChapter} index={11}></ChapterTitlePage></section>
		<section><PeopleDoNotBelieveInGodVis index={12} currIndex={index+1}/></section>
		<section><NonBelieversLineVis index={13} currIndex={index+1}/></section>
		<section><SunrayVis currIndex={index+1} index={14}/></section>

		<section><ChapterTitlePage chapterTitle={earthChapter} index={15} showSubtitles={true}></ChapterTitlePage></section>
		<section><AfterlifePercentVis index={16} currIndex={index+1}/></section>
		<section><MetaphysicalSelectVis index={17}/></section>
		<section><Takeaways index={18}/></section>
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
		color: #000000;
	}
	:global(div.page) {
		text-align: center;
		width: 100%;
		min-height: 100vh;
		max-height: 100vh;
		background-color: #DDC3B1;
	}
</style>
