<script>
  import { fade, draw } from 'svelte/transition';
  import NavigationArrow from '../../components/NavigationArrow.svelte';

  export let currIndex;
  export let index;
  let delayInterval = 650;

  // hardcoded values
  let imageList = [
    "../images/spirit.svg",
    "../images/reincarnation.svg",
    "../images/free_spirit.svg",
    "../images/rejoin.svg",
    "../images/growth.svg"
  ];

  let percentList = ["21%","17%", "11%", "8%", "4%"];

  let labelList = [
    ["Spirit lives on"],
    ["Reincarnation"],
    ["No suffering"],
    ["Rejoin universe"],
    ["Learning or growth"]
  ];
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div class="page" id={"page_"+index}>
  <h1>Among the people do not believe in heaven/hell but do believe in the afterlife, what does it look like?</h1>
  {#if currIndex >= index}
    <svg width=1000 height=450>
      <g transition:fade={{delay: delayInterval*7}}>
        <text id="topTooltip" x=20 y=20>Out of the US adults who believe in an afterlife,</text>
        <text id="topTooltip" x=20 y=35>they (%) said that the afterlife is where you are**...</text>
      </g>

      {#each [0, 1, 2, 3, 4] as i}
        <g transition:fade={{delay: delayInterval*(i+1)}}>
          <text id="bold" x={170*(i+1)-25} y=110>{percentList[i]}</text>
          <image x={170*(i+1)-25-85} y={220-85} width=170 height=170 href={imageList[i]}/>
          <text x={170*(i+1)-25} y=350>{labelList[i][0]}</text>
        </g>
      {/each}
      
      <line in:draw={{delay: delayInterval*6, duration: 2000}} x1=50 x2=920 y1=310 y2=310 stroke="black"/>

      <g transition:fade={{delay: delayInterval*7}}>
        <text id="bottomTooltip" x=20 y=410>**Survey participants had the option to</text>
        <text id="bottomTooltip" x=20 y=425>select several characteristics</text>
      </g>
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
    font-family: Concorde;
    max-width: 63%;
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

  #topTooltip {
    text-anchor: start;
    font-size: 12px;
    font-style: italic;
  }

  #bottomTooltip {
    text-anchor: start;
    font-size: 12px;
  }

  line {
    stroke-width: 0.75px;
  }

</style>
