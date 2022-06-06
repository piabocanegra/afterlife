<script>
  import { scaleLinear } from 'd3-scale';
  import { fade, draw } from 'svelte/transition';

  import NavigationArrow from '../components/NavigationArrow.svelte';
  import DefinitionBubble from '../components/MiniDefinitionBubble.svelte';

  export let index;
  export let currIndex;
  let delayInterval = 650;
  let imageSize = 70;

  let gapBtwLines = 75;

  $: yScale = scaleLinear()
		.domain([0, 100])
		.range([370, 140]);

  // hardcoded values
  let percentList = [
    68, 35,
    40, 39, 38, 40,
    41, 39
  ];

  let labelList = [
    ["Catholic"],
    ["Protestant"],
    ["18-29"],
    ["30-49"],
    ["50-64"],
    ["65+"],
    ["Democrat"],
    ["Republican"],
  ];

  let imageList = [
    "/images/catholic.svg",
    "/images/protestant.svg",
    "/images/18-29.svg",
    "/images/30-49.svg",
    "/images/50-64.svg",
    "/images/65.svg",
    "/images/democrat.svg",
    "/images/republican.svg",
  ];

  let tooltipText = [
    ["A person who believes in", "the Catholic church"],
    ["A person who believes in", "the Protestant church"]
  ];

  function getXPos(index) {
    let extraGap = 0;
    if (index > 5) {
      extraGap = gapBtwLines*2;
    } else if (index > 1) {
      extraGap = gapBtwLines;
    }
    return 75+gapBtwLines*(index+1)+extraGap;
  }
</script>

<div class="page" id={"page_"+index}>
  <h1>Who believes non-believers can go to heaven?</h1>
  {#if currIndex >= index}
    <svg width=1000 height=500>
      <g transition:fade={{delay: delayInterval*(10)}}>
        <text id="tooltipItalic" x=20 y=12>% who say people who do not believe in God can go to heaven...</text>
      </g>

      {#each [0, 1, 2, 3, 4, 5, 6, 7] as i}
        <g transition:fade={{delay: delayInterval*(i+1)}}>
          <text id="bold" x={getXPos(i)} y={yScale(percentList[i])-60}>{percentList[i] + "%"}</text>

          <image x={getXPos(i)-imageSize/2} y={yScale(percentList[i])-55} width={imageSize} height={imageSize} href={imageList[i]}/>
          <line x1={getXPos(i)+0.25} x2={getXPos(i)+0.25} y2={yScale(0)} y1={yScale(percentList[i])}/>

          <text id="bold_font" x={getXPos(i)} y={yScale(-7)}>{labelList[i]}</text>

          {#if i < 2}
            <DefinitionBubble position = {[getXPos(i)-10, yScale(-13)]} isOffsetted={false} text = {tooltipText[i]}/>
          {/if}
        </g>
      {/each}

      <g transition:fade={{delay: delayInterval*(9)}}>
        <text id="subtitle" x={(getXPos(0)+getXPos(1))/2} y=130>RELIGION</text>
        <text id="subtitle" x={(getXPos(2)+getXPos(5))/2} y=130>AGE</text>
        <text id="subtitle" x={(getXPos(6)+getXPos(7))/2} y=130>POLITICAL</text>
        <text id="subtitle" x={(getXPos(6)+getXPos(7))/2} y=150>ORIENTATION</text>
      </g>

      <g transition:fade={{delay: delayInterval*(10)}}>
        <text id="tooltip" x={(getXPos(0)+getXPos(1))/2} y=40>Catholics are 2x as likely as</text>
        <text id="tooltip" x={(getXPos(0)+getXPos(1))/2} y=55>Protestants to say that non-believers</text>
        <text id="tooltip" x={(getXPos(0)+getXPos(1))/2} y=70>can go to heaven</text>
        <line x1={(getXPos(0)+getXPos(1))/2} x2={(getXPos(0)+getXPos(1))/2} y1=80 y2=110/>

        <text id="tooltip" x={(getXPos(3)+getXPos(7))/2} y=50>There is not much variation across different</text>
        <text id="tooltip" x={(getXPos(3)+getXPos(7))/2} y=65>age groups and political orientations.</text>
        <line x1={(getXPos(2)+getXPos(5))/2} x2={(getXPos(2)+getXPos(5))/2} y1=100 y2=110/>
        <line x1={(getXPos(7)+getXPos(6))/2} x2={(getXPos(6)+getXPos(7))/2} y1=100 y2=110/>
        <line x1={(getXPos(7)+getXPos(3))/2} x2={(getXPos(3)+getXPos(7))/2} y1=80 y2=100/>
        <line x1={(getXPos(2)+getXPos(5))/2} x2={(getXPos(6)+getXPos(7))/2} y1=100 y2=100/>
      </g>
    </svg>
  {/if}
  <NavigationArrow link={"#page_"+(index+1)} isAtBottom={true} arrowType="1"/>
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

  @font-face {
    font-family: "Founders Grotesk Regular";
    src: url("/fonts/FoundersGroteskRegular.otf") format('otf');
  }

  h1 {
    font-family: Concorde;
    color: #9B795F;
  }

  text {
    font-size: 12pt;
    text-anchor: middle;
    fill: #9B795F;
  }

  #tooltipItalic {
    text-anchor: start;
    font-size: 12pt;
    font-style: italic;
  }

  #tooltip {
    font-size: 12pt;
    font-family: "Founders Grotesk Light";
  }

  #subtitle {
    font-family: "Founders Grotesk Light";
    font-size: 12pt;
  }

  #rectText {
    text-anchor: start;
    font-size: 12pt;
  }

  #bold {
    font-weight: bold;
    font-size: 12pt;
  }

  line {
    stroke: #9B795F;
    stroke-width: 1.5;
  }

  #bold_font {
    font-family: "Founders Grotesk Regular";
  }


</style>
