<script>
  import { scaleLinear } from 'd3-scale';
  import { fade, draw } from 'svelte/transition';
  import { afterUpdate  } from 'svelte';

  import NavigationArrow from '../components/NavigationArrow.svelte';
  import DefinitionBubble from '../components/MiniDefinitionBubble.svelte';

  export let index;
  export let currIndex;
  let imageSize = 70;

  let gapBtwLines = 75;
  let mobileGapBtwLines = 40;

  $: yScale = scaleLinear()
		.domain([0, 100])
		.range([370, 140]);
  $: yMobileScale = scaleLinear()
		.domain([0, 100])
		.range([85, 300]);

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
    return (isMobile) ? 25+mobileGapBtwLines*(index+1)+extraGap : 75+gapBtwLines*(index+1)+extraGap;
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
  <h1>Who believes non-believers can go to heaven?</h1>
  {#if currIndex >= index}
    {#if isMobile}
      <svg width=350 height=550>
        <g in:fade={{delay: delayInterval*(10)}}>
          <text id="tooltipItalic" x=20 y=12>% who say people who do not believe</text>
          <text id="tooltipItalic" x=20 y={12+15}>in God can go to heaven...</text>
        </g>
        
        <line in:draw={{delay: delayInterval*6, duration: 2000}} x1=85 x2=85 y1=50 y2=525 stroke="black"/>

        <g in:fade={{delay: delayInterval*(10)}}>
          <text id="tooltip" x={110} y={getXPos(1)+50}>Catholics are 2x as likely as Protestants</text>
          <text id="tooltip" x={110} y={getXPos(1)+65}>to say that non-believers can go to heaven</text>
          <line x1={yMobileScale(105)} x2={yMobileScale(105)} y1={getXPos(1)-5} y2={getXPos(1)+35}/>
          <line x1={yMobileScale(85)} x2={yMobileScale(105)} y1={getXPos(1)-5} y2={getXPos(1)-5}/>

          <text id="tooltip" x={yMobileScale(70)} y=330>There is not</text>
          <text id="tooltip" x={yMobileScale(70)} y={330+15}>much variation</text>
          <text id="tooltip" x={yMobileScale(70)} y={330+30}>across different age</text>
          <text id="tooltip" x={yMobileScale(70)} y={330+45}>groups and political</text>
          <text id="tooltip" x={yMobileScale(70)} y={330+60}>orientations</text>
          <line x1={yMobileScale(65)} x2={yMobileScale(65)} y1={getXPos(2)+10} y2={getXPos(6)+30}/>
          <line x1={yMobileScale(65)} x2={yMobileScale(62)} y1={getXPos(2)+10} y2={getXPos(2)+10}/>
          <line x1={yMobileScale(65)} x2={yMobileScale(62)} y1={getXPos(6)+30} y2={getXPos(6)+30}/>
          <line x1={yMobileScale(65)} x2={yMobileScale(68)} y1={(getXPos(2)+10+getXPos(6)+30)/2} y2={(getXPos(2)+10+getXPos(6)+30)/2}/>
        </g>

        {#each [0, 1, 2, 3, 4, 5, 6, 7] as i}
          <g in:fade={{delay: delayInterval*(i+1)}}>
            <text id="bold" x={yMobileScale(percentList[i])+25} y={getXPos(i)+15} >{percentList[i] + "%"}</text>

            <line x1={yMobileScale(0)} x2={yMobileScale(percentList[i])} y2={getXPos(i)+10} y1={getXPos(i)+10}/>

            <text id="bold_font" x={75} y={getXPos(i)+10}>{labelList[i]}</text>
          </g>
        {/each}

        <g in:fade={{delay: delayInterval*(9)}}>
          <text id="subtitle" y={getXPos(0)-15} x=75>RELIGION</text>
          <text id="subtitle" y={getXPos(2)-15} x=75>AGE</text>
          <text id="subtitle" y={getXPos(6)-30} x=75>POLITICAL</text>
          <text id="subtitle" y={getXPos(6)-15} x=75>ORIENTATION</text>
        </g>
      </svg>
    {:else}
      <svg width=1000 height=500>
        <g in:fade={{delay: delayInterval*(10)}}>
          <text id="tooltipItalic" x=20 y=12>% who say people who do not believe in God can go to heaven...</text>
        </g>

        {#each [0, 1, 2, 3, 4, 5, 6, 7] as i}
          <g in:fade={{delay: delayInterval*(i+1)}}>
            <text id="bold" x={getXPos(i)} y={yScale(percentList[i])-60}>{percentList[i] + "%"}</text>

            <image x={getXPos(i)-imageSize/2} y={yScale(percentList[i])-55} width={imageSize} height={imageSize} href={imageList[i]}/>
            <line x1={getXPos(i)+0.25} x2={getXPos(i)+0.25} y2={yScale(0)} y1={yScale(percentList[i])}/>

            <text id="bold_font" x={getXPos(i)} y={yScale(-7)}>{labelList[i]}</text>

            {#if i < 2}
              <DefinitionBubble position = {[getXPos(i)-10, yScale(-13)]} isOffsetted={false} text = {tooltipText[i]}/>
            {/if}
          </g>
        {/each}

        <g in:fade={{delay: delayInterval*(9)}}>
          <text id="subtitle" x={(getXPos(0)+getXPos(1))/2} y=130>RELIGION</text>
          <text id="subtitle" x={(getXPos(2)+getXPos(5))/2} y=130>AGE</text>
          <text id="subtitle" x={(getXPos(6)+getXPos(7))/2} y=130>POLITICAL</text>
          <text id="subtitle" x={(getXPos(6)+getXPos(7))/2} y=150>ORIENTATION</text>
        </g>

        <g in:fade={{delay: delayInterval*(10)}}>
          <text id="tooltip" x={(getXPos(0)+getXPos(1))/2} y=40>Catholics are 2x as likely as</text>
          <text id="tooltip" x={(getXPos(0)+getXPos(1))/2} y=55>Protestants to say that non-believers</text>
          <text id="tooltip" x={(getXPos(0)+getXPos(1))/2} y=70>can go to heaven</text>
          <line x1={(getXPos(0)+getXPos(1))/2} x2={(getXPos(0)+getXPos(1))/2} y1=80 y2=110/>

          <text id="tooltip" x={(getXPos(3)+getXPos(7))/2} y=50>There is not much variation across different</text>
          <text id="tooltip" x={(getXPos(3)+getXPos(7))/2} y=65>age groups and political orientations</text>
          <line x1={(getXPos(2)+getXPos(5))/2} x2={(getXPos(2)+getXPos(5))/2} y1=100 y2=110/>
          <line x1={(getXPos(7)+getXPos(6))/2} x2={(getXPos(6)+getXPos(7))/2} y1=100 y2=110/>
          <line x1={(getXPos(7)+getXPos(3))/2} x2={(getXPos(3)+getXPos(7))/2} y1=80 y2=100/>
          <line x1={(getXPos(2)+getXPos(5))/2} x2={(getXPos(6)+getXPos(7))/2} y1=100 y2=100/>
        </g>
      </svg>
    {/if}
  {/if}

  {#if isMobile}
    <NavigationArrow link={"#page_"+(index+1)} overrideY="1%" arrowType="4"/>
  {:else}
    <NavigationArrow link={"#page_"+(index+1)} arrowType="4"/>
  {/if}
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

  #tooltipItalic {
    text-anchor: start;
    font-size: 12pt;
    font-style: italic;
    font-family: 'Source Sans Pro', sans-serif;
  }

  #tooltip {
    font-size: 12pt;
    font-family: 'Source Sans Pro', sans-serif;
  }

  #subtitle {
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 300;
    font-size: 12pt;
  }

  #rectText {
    text-anchor: start;
    font-size: 12pt;
  }

  #bold {
    font-family: 'Source Serif Pro', serif;
    font-size: 12pt;
  }

  line {
    stroke: #9B795F;
    stroke-width: 1.5;
  }

  #bold_font {
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 400;
  }

  /* phone screens */
  @media screen and (max-width: 480px) {
    h1 {
      font-size: 20pt;
      max-width: 95%;
    }
    #bold_font {
      text-anchor: end;
    }
    #subtitle {
      text-anchor: end;
      font-size: 10pt;
    }
    #tooltip {
      text-anchor: start;
      font-size: 10pt;
    }
  }


</style>
