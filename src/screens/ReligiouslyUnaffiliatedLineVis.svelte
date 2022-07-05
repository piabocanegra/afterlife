<script>
  import { scaleLinear } from 'd3-scale';
  import NavigationArrow from '../components/NavigationArrow.svelte';
  import DefinitionBubble from '../components/MiniDefinitionBubble.svelte';

  export let index;
  let delayInterval = 650;
  let imageSize = 70;
  let graphTooltipText = "";

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

  function handleMouseOver1(e) {
    let tooltip = document.getElementById("graph_tooltip");
    tooltip.style.visibility = "visible";
    tooltip.style.left = (e.clientX+15) + "px";
    tooltip.style.top = (e.clientY-40) + "px";

    graphTooltipText = "% of Christians who <br/>believe in heaven: 92%";
  }

  function handleMouseOver2(e) {
    let tooltip = document.getElementById("graph_tooltip");
    tooltip.style.visibility = "visible";
    tooltip.style.left = (e.clientX+15) + "px";
    tooltip.style.top = (e.clientY-40) + "px";

    graphTooltipText = "% of Christians who <br/>believe in hell: 79%";
  }

  function handleMouseOut() {
    let tooltip = document.getElementById("graph_tooltip");
    tooltip.style.visibility = "hidden";
  }
</script>

<div class="page" id={"page_"+index}>
  <h1>Who believes in heaven and hell?</h1>
    <svg width=800 height=500>
      <text id="topTooltip" x=20 y=10>% who say they believe in</text>
      <text id="topTooltip" x=20 y=25>heaven and hell...</text>

      <rect x={200} y={yScale(100)} height={yScale(0)-yScale(100)} width={200*2.9}/>
      <text id="rectText" x={200+5} y={yScale(100)+15}>RELIGIOUSLY UNAFFILIATED</text>

      {#each [0, 1, 2, 3] as i}
        <text id="bold" x={200*(i+1)-120} y={yScale(percentList[i][0])-55}>{percentList[i][0] + "%"}</text>
        <text id="bold" x={200*(i+1)+50-120} y={yScale(percentList[i][1])-55}>{percentList[i][1] + "%"}</text>

        <image x={200*(i+1)-120-imageSize/2} y={yScale(percentList[i][0])-55} width={imageSize} height={imageSize} href="/images/heaven.svg"/>
        <image x={200*(i+1)+50-120-imageSize/2} y={yScale(percentList[i][1])-55} width={imageSize} height={imageSize} href="/images/hell.svg"/>
        <line id="yellow" x1={200*(i+1)-120-4} x2={200*(i+1)-120-4} y2={yScale(0)} y1={yScale(percentList[i][0])}/>
        <line id="red" x1={200*(i+1)+50-120-0.5} x2={200*(i+1)+50-120-0.5} y2={yScale(0)} y1={yScale(percentList[i][1])}/>

        <text id="bold_font" x={200*(i+1)-100} y=370>{labelList[i][0]}</text>
        <text id="bold_font" x={200*(i+1)-100} y=385>{labelList[i][1]}</text>

        {#if i != 1}
        <DefinitionBubble position = {[200*(i+1)-100+35, 355]} isOffsetted={true} text = {tooltipText[i]}/>
        {/if}
      {/each}

      <line x1=50 x2=780 y1=340 y2=340 stroke="black"/>

      <!-- svelte-ignore a11y-mouse-events-have-key-events -->
      <rect id="hover" x={50} y={yScale(120)} width={60} height={yScale(0)-yScale(120)} on:mousemove={handleMouseOver1} on:mouseout={handleMouseOut}/>
      <!-- svelte-ignore a11y-mouse-events-have-key-events -->
      <rect id="hover" x={110} y={yScale(110)} width={60} height={yScale(0)-yScale(110)} on:mousemove={handleMouseOver2} on:mouseout={handleMouseOut}/>
    </svg>
    <div id="graph_tooltip">{@html graphTooltipText}</div>

  <NavigationArrow link={"#page_"+(index+1)} isAtBottom={true} arrowType="1"/>
</div>

<style>
  div {
    text-align: center;
    position: relative;
  }

  h1 {
    font-family: 'Source Serif Pro', serif;
  }

  text {
    font-size: 12pt;
    text-anchor: middle;
    font-family: 'Source Sans Pro', sans-serif;
  }

  #topTooltip {
    text-anchor: start;
    font-size: 12pt;
    font-style: italic;
    color: black;
    font-family: 'Source Sans Pro', sans-serif;
  }

  #rectText {
    text-anchor: start;
    font-size: 12pt;
  }

  #bold {
    font-weight: bold;
    font-size: 12pt;
    font-family: 'Source Serif Pro', serif;
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

  #hover {
    opacity: 0;
  }

  div#graph_tooltip {
    color: black;
    font-size: 12pt;
    position: absolute;
    z-index: 10;
    white-space: pre-line;
    background-color: white;
    border-radius: 7px;
    text-align: left;
    max-width: 250px;
    padding: 15px;
    font-family: 'Source Sans Pro', sans-serif;
  }

  #bold_font {
    font-family: 'Source Sans Pro', sans-serif;
  }


</style>
