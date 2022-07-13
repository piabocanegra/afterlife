<script>
  export let position;
  export let text;
  export let isOffsetted;

  // variables for image bubble
  let x = position[0];
  let y = position[1];

  // variables for tooltip text
  let tooltipText = text;
  let tooltipVisibility = false;

  function handleMouseOver() {
    tooltipVisibility = true;
  }

  function handleMouseOut() {
    tooltipVisibility = false;
  }

  function getTooltipXPos(x, isOffsetted) {
    return (isOffsetted) ? x-125 : x-93;
  }

  function getTextXPos(x, isOffsetted) {
    return (isOffsetted) ? x-30 : x;
  }

  function getRectPadding(i) {
    return (i > 2) ? i*20 : i*23;
  }
 
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<image x={x} y={y} width=20 height=20 on:mouseover={handleMouseOver} on:mouseout={handleMouseOut} href="/images/definition.svg" />

{#if tooltipVisibility}
  <rect x={getTooltipXPos(x, isOffsetted)} y={y+30} width=190 height={getRectPadding(tooltipText.length)} rx=7 ry=7/>
  {#each tooltipText as txt, i}
    <text x={getTextXPos(x, isOffsetted)} y={y+50+i*15}>{txt}</text>
  {/each}
{/if}


<style>
  image {
    cursor: pointer;
  }

  text {
    font-size: 12pt;
    font-weight: 400;
    font-family: 'Source Sans Pro', sans-serif;
    text-anchor: middle;
  }

  rect {
    stroke-width: 0.5px;
    fill: white;
    stroke: #9B795F;
  }
  
</style>
