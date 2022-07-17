<script>
  import { fade, draw } from 'svelte/transition';
  import { afterUpdate } from 'svelte';
  import NavigationArrow from '../../components/NavigationArrow.svelte';

  export let currIndex;
  export let index;

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
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div class="page" id={"page_"+index}>
  <h1>You are in heaven.</h1>
  {#if currIndex >= index}
    <svg width=1000 height=450>
      <g in:fade={{delay: delayInterval*7}}>
        <text class="tooltip" id="topTooltip" x=20 y=20>Out of the US adults who believe in heaven, they</text>
        <text class="tooltip" id="topTooltip" x=20 y=35>(%) said that heaven is where you are**...</text>
      </g>

      {#each [0, 1, 2, 3, 4] as i}
        <g in:fade={{delay: delayInterval*(i+1)}}>
          <text id="bold" x={170*(i+1)-25} y=110>{percentList[i]}</text>
          <image x={170*(i+1)-25-85} y={220-85} width=170 height=170 href={imageList[i]}/>
          <text id="bold_font" x={170*(i+1)-25} y=350>{labelList[i][0]}</text>
          <text id="bold_font" x={170*(i+1)-25} y=370>{labelList[i][1]}</text>
        </g>
      {/each}

      <line in:draw={{delay: delayInterval*6, duration: 2000}} x1=50 x2=920 y1=310 y2=310 stroke="black"/>

      <g in:fade={{delay: delayInterval*7}}>
        <text class="tooltip" x=20 y=430>**Survey participants had the option to select several characteristics</text>
      </g>

      <g in:fade={{delay: delayInterval*8}}>
        <text class="tooltip" id="bold_tooltip" x={50+170*3} y=35>There is more agreement on what heaven</text>
        <text class="tooltip" id="bold_tooltip" x={50+170*3} y=50>looks like (compared to hell)!</text>
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
    background-color: #FFF4EC;
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
  }

  .tooltip {
    text-anchor: start;
    font-size: 10pt;
    font-weight: 300;
    font-family: 'Source Sans Pro', sans-serif;
  }

  #topTooltip {
    font-style: italic;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 12pt;
  }

  line {
    stroke-width: 0.75px;
    stroke: #9B795F;
  }

  path {
    fill: none;
    stroke: #9B795F;
  }

  #bold_font {
    font-family: 'Source Sans Pro', sans-serif;
  }

  #bold_tooltip {
    font-weight: 400;
    font-size: 12pt;
  }

  /* phone screens */
  @media screen and (max-width: 480px) {
    h1 {
      font-size: 20pt;
      max-width: 95%;
    }
  }

</style>
