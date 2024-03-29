<script>
  import { fade, draw } from 'svelte/transition';
  import { scaleLinear } from 'd3-scale';
  import { afterUpdate } from 'svelte';
  import NavigationArrow from '../components/NavigationArrow.svelte';
  import DefinitionBubble from '../components/MiniDefinitionBubble.svelte';

  export let index;
  export let currIndex;
  let delayInterval = 650;
  let imageSize = 70;
  let graphTooltipText = "";

  $: yScale = scaleLinear()
		.domain([0, 100])
		.range([340, 100]);

  $: yMobileScale = scaleLinear()
		.domain([0, 100])
		.range([120,300]);

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

  let definitionText = [
    ["A person who believes in", "Jesus Christ and follows", "his teachings"],
    [""],
    ["A person who believes", "that nothing is known or", "can be known of the", "existence or nature of God"],
    ["A person who doesn't", "believe in the existence", "of God(s)"]
  ];

  let tooltipText = [
    "% of Christians who <br/>believe in heaven: 92%", 
    "% of Christians who <br/>believe in hell: 79%",
    "% of people who do not identify <br/>with any particular religion <br/>believe in heaven: 50%", 
    "% of people who do not identify <br/>with any particular religion <br/>believe in hell: 39%",
    "% of Agnostics who <br/>believe in heaven: 26%", 
    "% of Agnostics who <br/>believe in hell: 14%",
    "% of Atheists who <br/>believe in heaven: 3%", 
    "% of Atheists who <br/>believe in hell: 1%",
  ]

  function handleMouseOver(e) {
    let tooltip = document.getElementById("graph_tooltip");
    tooltip.style.visibility = "visible";
    tooltip.style.left = (e.clientX+15) + "px";
    tooltip.style.top = (e.clientY-40) + "px";

    let index = this.getAttribute("index");

    graphTooltipText = tooltipText[index];
  }

  function handleMouseOut() {
    let tooltip = document.getElementById("graph_tooltip");
    tooltip.style.visibility = "hidden";
  }

  // run animations once
  $: animationAlreadyRan = false;
  $: delayInterval = !animationAlreadyRan ? 650 : 0;

  afterUpdate(() => {
  document.addEventListener('scroll', function() {
    if (document.getElementById("page_"+index).getBoundingClientRect().bottom - 20 <= window.innerHeight) {
        animationAlreadyRan = true;
      }
    });
  });

  let isMobile = (window.screen.width <= 480);

</script>

<div class="page" id={"page_"+index}>
  <h1>Who believes in heaven and hell?</h1>
  {#if currIndex >= index}
    {#if isMobile}
      <svg width=350 height=550>

        <g in:fade={{delay: delayInterval*7}}>
          <text id="topTooltip" x=20 y=10>% who say they believe in</text>
          <text id="topTooltip" x=20 y=25>heaven and hell...</text>
        </g>
        
        <line in:draw={{delay: delayInterval*4, duration: 2000}} x1=110 x2=110 y1=50 y2=460 stroke="black"/>

        <g in:fade={{delay: delayInterval*6}}>
          <rect x={110} y={130} height={315} width={190}/>
          <text id="rectText" x={115} y={150}>RELIGIOUSLY UNAFFILIATED</text>
        </g>

        {#each [0, 1, 2, 3] as i}
        <g in:fade={{delay: delayInterval*(i+1)}}>
          <text id="bold_font" x={25} y={100*(i+1)}>{labelList[i][0]}</text>
          <text id="bold_font" x={25} y={100*(i+1)+15}>{labelList[i][1]}</text>

          <line id="yellow" x2={110} x1={yMobileScale(percentList[i][0])} y2={100*(i+1)-20} y1={100*(i+1)-20}/>
          <line id="red" x2={110} x1={yMobileScale(percentList[i][1])} y2={100*(i+1)+15} y1={100*(i+1)+15}/>

          <text id="bold" y={100*(i+1)-20+5} x={yMobileScale(percentList[i][0])+25}>{percentList[i][0] + "%"}</text>
          <text id="bold" y={100*(i+1)+15+5} x={yMobileScale(percentList[i][1])+25}>{percentList[i][1] + "%"}</text>
          {#if i != 1}
            <DefinitionBubble position = {[0, 100*(i+1)-35/2+2]} isOffsetted={true} isMobile={true} text = {definitionText[i]}/>
          {/if}
        </g>
        {/each}

        <g in:fade={{delay: delayInterval*7}}>
          <text class="tooltip" id="bold_tooltip" x={115} y=465>Belief in heaven and hell is</text>
          <text class="tooltip" id="bold_tooltip" x={115} y={465+15}>less common among religiously</text>
          <text class="tooltip" id="bold_tooltip" x={115} y={465+30}>unaffiliated Americans</text>
        </g>

      </svg>
    {:else}
      <svg width=800 height=500>
        <g in:fade={{delay: delayInterval}}>
          <text id="topTooltip" x=20 y=10>% who say they believe in</text>
          <text id="topTooltip" x=20 y=25>heaven and hell...</text>
        </g>

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
            <DefinitionBubble position = {[200*(i+1)-100+35, 355]} isOffsetted={true} text = {definitionText[i]}/>
          {/if}

          <!-- svelte-ignore a11y-mouse-events-have-key-events -->
          <rect id="hover" index={i*2} x={200*(i+1)-120-30} y={yScale(percentList[i][0])-imageSize} width={60} height={yScale(0)-yScale(percentList[i][0])+imageSize} on:mousemove={handleMouseOver} on:mouseout={handleMouseOut}/>
          <!-- svelte-ignore a11y-mouse-events-have-key-events -->
          <rect id="hover" index={i*2+1} x={200*(i+1)+50-120-30} y={yScale(percentList[i][1])-imageSize} width={60} height={yScale(0)-yScale(percentList[i][1])+imageSize} on:mousemove={handleMouseOver} on:mouseout={handleMouseOut}/>
        {/each}

        <line x1=50 x2=780 y1=340 y2=340 stroke="black"/>

        <g in:fade={{delay: delayInterval}}>
          <text class="tooltip" id="bold_tooltip" x={390} y=35>Belief in heaven and hell is less common</text>
          <text class="tooltip" id="bold_tooltip" x={390} y=50>among religiously unaffiliated Americans</text>
        </g>
        <path in:draw={{delay: delayInterval, duration: 1500}} d="M 380 38 H 280 V 80"/>
      </svg>
    {/if}
  {/if}
    
  <div id="graph_tooltip">{@html graphTooltipText}</div>

  {#if isMobile}
    <NavigationArrow link={"page_"+(index+1)} overrideY="1%" arrowType="1"/>
  {:else}
    <NavigationArrow link={"page_"+(index+1)} arrowType="1"/>
  {/if}
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
    font-weight: 300;
  }

  #bold {
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
    visibility: hidden;
    padding: 15px;
    font-family: 'Source Sans Pro', sans-serif;
  }

  #bold_font {
    font-family: 'Source Sans Pro', sans-serif;
  }

  #bold_tooltip {
    font-weight: 400;
    font-size: 12pt;
    text-anchor: start;
  }

  path {
    fill: none;
    stroke: black;
  }

  /* phone screens */
  @media screen and (max-width: 480px) {
    h1 {
      font-size: 20pt;
      max-width: 95%;
    }
    #bold_font {
      text-anchor: start;
    }
    #bold_tooltip {
      font-size: 10pt;
    }
  }

</style>
