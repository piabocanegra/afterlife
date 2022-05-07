<script>
  export let bubbleId;
  // map of ids to fixed positions of fun fact bubbles
  let funFactPositionMap = {
    "1": [80, 90],
    "2": [85, 8],
    "3": [50, 50],
    "4": [50, 50]
  }

  // map of ids to hardcoded text for fun facts
  let funFactTextMap = {
    "1": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "2": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "3": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "4": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  }

  // variables for image bubble
  let top = funFactPositionMap[bubbleId][0] + "%";
  let left = funFactPositionMap[bubbleId][1] + "%";
  let translateString = "translate(-"+ top + ", -" + left + ")";
  
  // variables for tooltip text
  let tooltipText = funFactTextMap[bubbleId];
  let tooltipTop = 0;
  let tooltipLeft = 0;
  let tooltipTranslate = "";
  let tooltipVisibility = false;

  function handleMouseOver() {
    let topMargin = (funFactPositionMap[bubbleId][0] > 50) ? -5 : 5;
    let leftMargin = (funFactPositionMap[bubbleId][1] > 50) ? -8 : 16;
    tooltipTop = funFactPositionMap[bubbleId][0] + topMargin + "%";
    tooltipLeft = funFactPositionMap[bubbleId][1] + leftMargin + "%";
    tooltipTranslate = "translate(-"+ tooltipTop + ", -" + tooltipLeft + ")";
    tooltipVisibility = true;
  }

  function handleMouseOut() {
    tooltipVisibility = false;
    console.log("mouseout");
  }
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
  <!-- TODO: change image to question mark -->
<img style="--top: {top}; --left: {left}; --translate: {translateString}"   
  on:mouseover={handleMouseOver}
  on:mouseout={handleMouseOut}
  src="/images/chevron.png" alt="question mark"/>

{#if tooltipVisibility}
<div id="tooltip" style="--tooltipTop: {tooltipTop}; --tooltipLeft: {tooltipLeft}; --tooltipTranslate: {tooltipTranslate}">
  {tooltipText}
</div>
{/if}

<style>
  div#tooltip {
    font-size: 16px;
    position: absolute;
    z-index: 10;
    white-space: pre-line;
    /* TODO change color */
    background-color: beige;
    border-radius: 5px;
    border: 1px solid #cdcdcd;
    text-align: left;
    max-width: 250px;
    padding: 10px;
    top: var(--tooltipTop);
    left: var(--tooltipLeft);
    transform: var(--tooltipTranslate);
  }
  img {
    position: absolute;
    top: var(--top);
    left: var(--left);
    transform: var(--translate);
    width: 40px;
    height: 40px;
  }
</style>