<script>
  import { fade, draw } from 'svelte/transition';
  import { afterUpdate } from 'svelte';
  import NavigationArrow from '../../components/NavigationArrow.svelte';

  export let currIndex;
  export let index;

  // hardcoded values
  let imageList = [
    "../images/psychological.svg",
    "../images/aware.svg",
    "../images/physical.svg",
    "../images/god.svg",
    "../images/satan.svg"
  ];

  let percentList = ["53%","53%", "51%", "49%", "44%"];

  let labelList = [
    ["Experience", "pscyhological suffering"],
    ["Aware of the suffering", "created in the world"],
    ["Experience physical", "suffering"],
    ["Cannot have a", "relationship with God"],
    ["Can meet Satan", ""]
  ];

  // run animations once
  $: animationAlreadyRan = false;
  $: delayInterval = !animationAlreadyRan ? 650 : 0;
  $: duration = !animationAlreadyRan ? 2000 : 0;

  afterUpdate(() => {
  document.addEventListener('scroll', function() {
    if (document.getElementById("page_"+index).getBoundingClientRect().bottom - 20 <= window.innerHeight) {
        animationAlreadyRan = true;
      }
    });
  });

  let isMobile = (window.screen.width <= 480);
  let w = (350/4)+10;
  let imageSize = 80;
  let mobilePos = [[w-(125/2), 75], [w*3-(125/2), 75], [w-(125/2), 75+imageSize+75], [w*3-(125/2), 75+imageSize+75], [w*2-(125/2), 75+imageSize*2+150]];
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div class="page" id={"page_"+index}>
  <h1>You are in hell.</h1>
  {#if currIndex >= index}
  {#if isMobile}
    <!-- mobile svg -->
    <svg width=350 height=550>
      <g in:fade={{delay: delayInterval*7}}>
        <text class="tooltip" id="topTooltip" x=5 y=13>Out of the US adults who believe in hell, they (%)</text>
        <text class="tooltip" id="topTooltip" x=5 y=28>said that hell is where you**...</text>
      </g>

      {#each [0, 1, 2, 3, 4] as i}
        <g in:fade={{delay: delayInterval*(i+1)}}>
          <text id="bold" x={mobilePos[i][0]+imageSize/2} y={mobilePos[i][1]-10}>{percentList[i]}</text>
          <image x={mobilePos[i][0]} y={mobilePos[i][1]} width={imageSize} height={imageSize} href={imageList[i]}/>
          <text id="bold_font" x={mobilePos[i][0]+imageSize/2} y={mobilePos[i][1]+imageSize+15}>{labelList[i][0]}</text>
          <text id="bold_font" x={mobilePos[i][0]+imageSize/2} y={mobilePos[i][1]+imageSize+30}>{labelList[i][1]}</text>
        </g>
      {/each}

      <g in:fade={{delay: delayInterval*7}}>
        <text class="tooltip" x=5 y=530>**Survey participants had the option to select</text>
        <text class="tooltip" x=5 y=540>several characteristics</text>
      </g>
    </svg>
  {:else}
      <!-- desktop svg -->
      <svg width=1000 height=450>
        <g in:fade={{delay: delayInterval*7}}>
          <text id="topTooltip" x=20 y=20>Out of the US adults who believe in hell, they (%)</text>
          <text id="topTooltip" x=20 y=35>said that hell is where you**...</text>
        </g>

        {#each [0, 1, 2, 3, 4] as i}
          <g in:fade={{delay: delayInterval*(i+1)}}>
            <text id="bold" x={170*(i+1)-25} y=110>{percentList[i]}</text>
            <image x={170*(i+1)-25-85} y={220-85} width=170 height=170 href={imageList[i]}/>
            <text id="bold_font" x={170*(i+1)-25} y=350>{labelList[i][0]}</text>
            <text id="bold_font" x={170*(i+1)-25} y=370>{labelList[i][1]}</text>
          </g>
        {/each}

        <line in:draw={{delay: delayInterval*6, duration: duration}} x1=50 x2=920 y1=310 y2=310 stroke="black"/>

        <g in:fade={{delay: delayInterval*7}}>
          <text id="bottomTooltip" x=20 y=410>**Survey participants had the option to select several characteristics</text>
        </g>
      </svg>
    {/if}
  {/if}

  {#if isMobile}
    <NavigationArrow link={"page_"+(index+1)} overrideY="1%" arrowType="4" textColor="#9B795F"/>
  {:else}
    <NavigationArrow link={"page_"+(index+1)} arrowType="4" textColor="#9B795F"/>
  {/if}
</div>

<style>
  div {
    text-align: center;
    position: relative;
    background-color: #1E1E1E;
  }

  h1 {
    font-family: 'Source Serif Pro', serif;
    color: #9B795F;
  }

  text {
    font-size: 12pt;
    text-anchor: middle;
    fill: #9B795F;
  }

  #bold {
    font-family: 'Source Serif Pro', serif;
    font-size: 12pt;
    color: #9B795F;
  }

  #topTooltip {
    text-anchor: start;
    font-size: 12pt;
    font-style: italic;
    font-family: 'Source Sans Pro', sans-serif;
    color: #9B795F;
  }

  #bottomTooltip {
    text-anchor: start;
    font-size: 10pt;
    font-weight: 300;
    font-family: 'Source Sans Pro', sans-serif;
    color: #9B795F;
  }

  line {
    stroke-width: 0.75px;
    stroke: #9B795F;
  }

  #bold_font {
    font-family: 'Source Sans Pro', sans-serif;
  }

  /* phone screens */
  @media screen and (max-width: 480px) {
    h1 {
      font-size: 20pt;
      max-width: 95%;
    }
    .tooltip {
      text-anchor: start;
      font-size: 10pt;
      font-weight: 300;
      font-family: 'Source Sans Pro', sans-serif;
    }
  }
</style>
