<script>
  import { fade, draw } from 'svelte/transition';
  import NavigationArrow from '../../components/NavigationArrow.svelte';

  export let currIndex;
  export let index;
  let delayInterval = 650;

  // hardcoded values
  let imageList = [
    "../images/free.svg",
    "../images/reunited.svg",
    "../images/god reunion.svg",
    "../images/healthy.svg",
    "../images/animals.svg"
  ];

  let percentList = ["69%","65%", "62%", "60%", "48%"];

  let labelList = [
    ["Free from suffering", ""],
    ["Reunited with loved", "ones"],
    ["Can meet God", ""],
    ["Have perfectly", "healthy bodies"],
    ["Reunited with pets or", "animals they knew on Earth"]
  ];
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div class="page" id={"page_"+index}>
  <h1>You are in heaven.</h1>
  {#if currIndex >= index}
    <svg width=1000 height=450>
      <g transition:fade={{delay: delayInterval*7}}>
        <text class="tooltip" id="topTooltip" x=20 y=20>Out of the US adults who believe in heaven, they</text>
        <text class="tooltip" id="topTooltip" x=20 y=35>(%) said that heaven is where you are**...</text>
      </g>

      {#each [0, 1, 2, 3, 4] as i}
        <g transition:fade={{delay: delayInterval*(i+1)}}>
          <text id="bold" x={170*(i+1)-25} y=110>{percentList[i]}</text>
          <image x={170*(i+1)-25-85} y={220-85} width=170 height=170 href={imageList[i]}/>
          <text x={170*(i+1)-25} y=350>{labelList[i][0]}</text>
          <text x={170*(i+1)-25} y=370>{labelList[i][1]}</text>
        </g>
      {/each}

      <line in:draw={{delay: delayInterval*6, duration: 2000}} x1=50 x2=920 y1=310 y2=310 stroke="black"/>

      <g transition:fade={{delay: delayInterval*7}}>
        <text class="tooltip" x=20 y=430>**Survey participants had the option to</text>
        <text class="tooltip" x=20 y=445>select several characteristics</text>
      </g>

      <g transition:fade={{delay: delayInterval*8}}>
        <text class="tooltip" x={50+170*3} y=35>There is more agreement on what heaven</text>
        <text class="tooltip" x={50+170*3} y=50>looks like (compared to hell)!</text>
      </g>
      <path in:draw={{delay: delayInterval*8, duration: 1500}} d="M 550 38 H 480 V 80"/>

    </svg>
  {/if}
  <NavigationArrow link={"#page_"+(index+1)} isAtBottom={true} arrowType="4"/>
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

  #bold {
    font-weight: bold;
    font-size: 16px;
  }

  .tooltip {
    text-anchor: start;
    font-size: 12px;
    font-family: "Founders Grotesk Light"
  }

  #topTooltip {
    font-style: italic;
    font-family: "Founders Grotesk Light"
  }

  line {
    stroke-width: 0.75px;
  }

  path {
    fill: none;
    stroke: black;
  }

</style>
