<script>
  export let position;
  export let text;
  export let tooltipOffset;

  // variables for image bubble
  let x = position[0];
  let y = position[1];

  // variables for tooltip text
  let tooltipText = text;
  let tooltipTop = 0;
  let tooltipLeft = 0;
  let tooltipTranslate = "";
  let tooltipVisibility = false;

  function handleMouseOver() {
    tooltipVisibility = true;
  }

  function handleMouseOut() {
    tooltipVisibility = false;
  }

 
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<image x={x} y={y} width=20 height=20 on:mouseover={handleMouseOver} on:mouseout={handleMouseOut} href="/images/definition.svg" />

{#if tooltipVisibility}
  <rect x={x-125} y={y+30} width=190 height={tooltipText.length*20} rx=5 ry=5/>
  {#each tooltipText as txt, i}
    <text x={x-30} y={y+50+i*15}>{txt}</text>
  {/each}
{/if}


<style>
  image {
    cursor: pointer;
  }

  text {
    font-size: 14px;
    text-anchor: middle;
  }

  rect {
    stroke-width: 1px;
    stroke: black;
    fill: none;
  }
</style>
