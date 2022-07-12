<script>
  import { draw } from 'svelte/transition';
  import { scaleLinear } from 'd3-scale';
  import NavigationArrow from '../components/NavigationArrow.svelte';

  export let currIndex;
  export let index;
  let imageSize = 120;

  $: yScale = scaleLinear()
		.domain([0, 100])
		.range([330, 5]);

  // run animations once
  $: animationAlreadyRan = false;
  $: duration = !animationAlreadyRan ? 1500 : 0;

  document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('scroll', function() {
      if (document.getElementById("page_"+index).getBoundingClientRect().bottom - 10 <= window.innerHeight) {
        animationAlreadyRan = true;
      }
    });
  });

</script>

<div class="page" id={"page_"+index}>
  <h1>Do Christians believe multiple religions lead to eternal life in heaven?</h1>
  {#if currIndex >= index}
    <svg width=800 height=450>
      <text id="topTooltip" x=20 y=20>% of US Christians who say**...</text>

      <text id="bold" x=250 y={yScale(58)-75}>58%</text>
      <image x={250-imageSize*0.45} y={yScale(58)-imageSize/2} width={imageSize} height={imageSize} href="../images/gold-sun.svg"/>
      <text x=250 y=350>Many religions can lead</text>
      <text x=250 y=370>to eternal life in heaven.</text>
      <line in:draw={{duration: duration}} x1=250 x2=250 y2={yScale(0)} y1={yScale(58)+imageSize*0.2}/>
      <line in:draw={{duration: duration}} x2=240 x1=250 y2={yScale(0)} y1={yScale(58)+imageSize*0.2}/>
      <line in:draw={{duration: duration}} x2=260 x1=250 y2={yScale(0)} y1={yScale(58)+imageSize*0.2}/>
      <line in:draw={{duration: duration}} x2=230 x1=250 y2={yScale(0)} y1={yScale(58)+imageSize*0.2}/>
      <line in:draw={{duration: duration}} x2=270 x1=250 y2={yScale(0)} y1={yScale(58)+imageSize*0.2}/>

      <text id="bold" x=550 y={yScale(31)-75}>31%</text>
      <image x={550-imageSize*0.45} y={yScale(31)-imageSize/2} width={imageSize} height={imageSize} href="../images/gold-sun.svg"/>
      <text x=550 y=350>My religion is the one</text>
      <text x=550 y=370>true faith.</text>
      <line in:draw={{duration: duration}} x1=550 x2=550 y2={yScale(0)} y1={yScale(31)+imageSize*0.2}/>

      <text id="noteTooltip" x=20 y=410>**This graph doesn't include results from Christians who don't believe in heaven or didn't have an answer.</text>
    </svg>
  {/if}
  <NavigationArrow link={"#page_"+(index+1)} isAtBottom={true} arrowType="4"/>
</div>

<style>
  div {
    text-align: center;
    position: relative;
    background-color: #FFF4EC;
  }

  h1 {
    font-family: 'Source Serif Pro', serif;
    color: #9B795F;
    max-width: 70%;
  }

  text {
    font-size: 12pt;
    text-anchor: middle;
    font-family: 'Source Sans Pro', sans-serif;
    fill: #9B795F;
  }

  #topTooltip {
    text-anchor: start;
    font-size: 12pt;
    font-style: italic;
    font-family: 'Source Sans Pro', sans-serif;
  }

  line {
    stroke: #9B795F;
    stroke-width: 0.75px;
  }

  #bold {
    font-size: 12pt;
    font-family: 'Source Serif Pro', serif;
  }

  #noteTooltip {
    text-anchor: start;
    font-size: 10pt;
    font-style: italic;
    font-family: 'Source Sans Pro', sans-serif;
  }

</style>
