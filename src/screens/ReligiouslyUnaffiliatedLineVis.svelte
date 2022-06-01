<script>
  import { draw } from 'svelte/transition';
  import { scaleLinear } from 'd3-scale';
  import NavigationArrow from '../components/NavigationArrow.svelte';
  import DefinitionBubble from '../components/MiniDefinitionBubble.svelte';
  import FunFactBubble from '../components/FunFactBubble.svelte';

  export let currIndex;
  export let index;
  let delayInterval = 650;
  let imageSize = 70;

  $: yScale = scaleLinear()
		.domain([0, 100])
		.range([340, 100]);

  // hardcoded values
  let percentList = [
    [92, 79],
    [50, 39],
    [26, 14],
    [3, 1],
  ];

  let labelList = [
    ["Christian", ""],
    ["Nothing in", "particular"],
    ["Agnostic", ""],
    ["Atheist", ""],
  ];

  let tooltipText = [
    ["A person who believes in", "Jesus Christ and follows his", "teachings"],
    [""],
    ["A person who believes", "that nothing is known or", "can be known of the", "existence or nature of God"],
    ["A person who doesn't", "believe in the existence", "of God(s)"]
  ];
</script>

<div class="page" id={"page_"+index}>
  <h1>Belief in heaven and hell is less common among religiously unaffiliated Americans</h1>
    <svg width=800 height=500>
      <text id="topTooltip" x=20 y=10>% who say they believe in</text>
      <text id="topTooltip" x=20 y=25>heaven and hell...</text>

      <rect x={200} y={yScale(100)} height={yScale(0)-yScale(100)} width={200*2.9}/>
      <text id="rectText" x={200+5} y={yScale(100)+15}>RELIGIOUSLY UNAFFILIATED</text>

      {#each [0, 1, 2, 3] as i}
        <text id="bold" x={200*(i+1)-120} y={yScale(percentList[i][0])-55}>{percentList[i][0] + "%"}</text>
        <text id="bold" x={200*(i+1)+50-120} y={yScale(percentList[i][1])-55}>{percentList[i][1] + "%"}</text>
        <!-- TODO change image href -->
        <image x={200*(i+1)-120-imageSize/2} y={yScale(percentList[i][0])-55} width={imageSize} height={imageSize} href="/images/heaven.svg"/>
        <image x={200*(i+1)+50-120-imageSize/2} y={yScale(percentList[i][1])-55} width={imageSize} height={imageSize} href="/images/hell.svg"/>
        <line id="yellow" x1={200*(i+1)-120-4} x2={200*(i+1)-120-4} y2={yScale(0)} y1={yScale(percentList[i][0])}/>
        <line id="red" x1={200*(i+1)+50-120-0.5} x2={200*(i+1)+50-120-0.5} y2={yScale(0)} y1={yScale(percentList[i][1])}/>

        <text x={200*(i+1)-100} y=370>{labelList[i][0]}</text>
        <text x={200*(i+1)-100} y=385>{labelList[i][1]}</text>

        {#if i != 1}
        <DefinitionBubble position = {[200*(i+1)-100+35, 355]} tooltipOffset = {[20, 20]} text = {tooltipText[i]}/>
        {/if}
      {/each}

      <line x1=50 x2=780 y1=340 y2=340 stroke="black"/>

    </svg>
  <NavigationArrow link={"#page_"+(index+1)} isAtBottom={true} arrowType="1"/>
</div>

<style>
  div {
    text-align: center;
    position: relative;
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
    font-family: Concorde
  }

  /* svg {
    border: 1px solid black;
  } */

  text {
    font-size: 14px;
    text-anchor: middle;
  }

  #topTooltip {
    text-anchor: start;
    font-size: 12px;
    font-style: italic;
  }

  #rectText {
    text-anchor: start;
    font-size: 12px;
  }

  #bold {
    font-weight: bold;
    font-size: 16px;
  }

  line {
    stroke: black;
    stroke-width: 1.5;
  }

  rect {
    fill: #C8AD9A;
    opacity: 0.5;
  }

  #yellow {
    stroke: #FFE2CE;
  }

  #red {
    stroke: #C95033;
  }

</style>
