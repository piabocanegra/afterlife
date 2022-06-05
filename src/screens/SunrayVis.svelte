<script>
  import { draw } from 'svelte/transition';
  import { scaleLinear } from 'd3-scale';
  import NavigationArrow from '../components/NavigationArrow.svelte';

  export let currIndex;
  export let index;
  let imageSize = 120;

  $: yScale = scaleLinear()
		.domain([0, 100])
		.range([350, 20]);
</script>

<div class="page" id={"page_"+index}>
  <h1>Do Christians believe multiple religions lead to eternal life in heaven?</h1>
  {#if currIndex >= index}
    <svg width=800 height=450>
      <text id="topTooltip" x=20 y=20>% of US Christians who say...</text>

      <text id="bold" x=250 y={yScale(58)-75}>58%</text>
      <!-- TODO change svg to beige color -->
      <image x={250-imageSize*0.45} y={yScale(58)-imageSize/2} width={imageSize} height={imageSize} href="../images/gold-sun.svg"/>
      <text x=250 y=400>Many religions can lead</text>
      <text x=250 y=420>to eternal life in heaven.</text>
      <line in:draw={{duration: 1500}} x1=250 x2=250 y2={yScale(0)} y1={yScale(58)+imageSize*0.2}/>
      <line in:draw={{duration: 1500}} x2=240 x1=250 y2={yScale(0)} y1={yScale(58)+imageSize*0.2}/>
      <line in:draw={{duration: 1500}} x2=260 x1=250 y2={yScale(0)} y1={yScale(58)+imageSize*0.2}/>
      <line in:draw={{duration: 1500}} x2=230 x1=250 y2={yScale(0)} y1={yScale(58)+imageSize*0.2}/>
      <line in:draw={{duration: 1500}} x2=270 x1=250 y2={yScale(0)} y1={yScale(58)+imageSize*0.2}/>

      <text id="bold" x=550 y={yScale(31)-75}>31%</text>
      <image x={550-imageSize*0.45} y={yScale(31)-imageSize/2} width={imageSize} height={imageSize} href="../images/gold-sun.svg"/>
      <text x=550 y=400>My religion is the one</text>
      <text x=550 y=420>true faith.</text>
      <line in:draw={{duration: 1500}} x1=550 x2=550 y2={yScale(0)} y1={yScale(31)+imageSize*0.2}/>

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

  @font-face {
    font-family: "Concorde";
    src: url("/fonts/ConcordeRegular.ttf") format('ttf');
  }

  @font-face {
    font-family: "Founders Grotesk Light";
    src: url("/fonts/FoundersGroteskLight.otf") format('otf');
  }

  h1 {
    font-family: Concorde;
    color: #9B795F;
  }

  text {
    font-size: 14px;
    text-anchor: middle;
    font-family: "Founders Grotesk Light";
    fill: #9B795F;
  }

  #topTooltip {
    text-anchor: start;
    font-size: 12px;
    font-style: italic;
    font-family: "Founders Grotesk Light"
  }

  line {
    stroke: #9B795F;
    stroke-width: 0.75px;
  }

  #bold {
    font-weight: bold;
    font-size: 16px;
    font-family: "Concorde"
  }

</style>
