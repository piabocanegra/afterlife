<script>
  export let bubbleId;
  // map of ids to fixed positions of fun fact bubbles
  let funFactPositionMap = {
    "1": [80, 90],
    "2": [10, 8],
    "3": [65, 30],
    "4": [70, 55]
  }

  // map of tooltip offsets
  let offsetMap = {
    "1": [5, -5],
    "2": [0, 6],
    "3": [8, 8],
    "4": [10, 12]
  }
  // map of ids to hardcoded text for fun facts
  let funFactTextMap = {
    "1": "<b>Gustave Doré</b> </br><i>Late Penitents (1868)</i> </br></br><b>Did you know?</b></br>These illustrations are wood engraved.",
    "2": "<b>Gustave Doré</b> </br><i>Celestial Rose (1868)</i> </br></br><b>Did you know?</b></br>Gustave Doré was a French artist, best known for his engravings that depict Dante Alighien's epic poem the Divine Comedy.",
    "3": "<b>Gustave Doré</b> </br><i>Satan (1890)</i>",
    "4": "<b>Gustave Doré</b> </br><i>Resplendent Souls (1868)</i>"
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
    let topMargin = offsetMap[bubbleId][0];
    let leftMargin = offsetMap[bubbleId][1];
    tooltipTop = funFactPositionMap[bubbleId][0] + topMargin + "%";
    tooltipLeft = funFactPositionMap[bubbleId][1] + leftMargin + "%";
    tooltipTranslate = "translate(-"+ tooltipTop + ", -" + tooltipLeft + ")";
    tooltipVisibility = true;
  }

  function handleMouseOut() {
    tooltipVisibility = false;
  }
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<!-- TODO: change image to question mark -->
<img style="--top: {top}; --left: {left}; --translate: {translateString}"
  on:mouseover={handleMouseOver}
  on:mouseout={handleMouseOut}
  src="/images/fact.svg" alt="question mark"/>

{#if tooltipVisibility}
<div id="tooltip" style="--tooltipTop: {tooltipTop}; --tooltipLeft: {tooltipLeft}; --tooltipTranslate: {tooltipTranslate}">
  {@html tooltipText}
</div>
{/if}

<style>
  div#tooltip {
    color: #9B795F;
    font-size: 12pt;
    position: absolute;
    z-index: 10;
    white-space: pre-line;
    background-color: white;
    border-radius: 7px;
    text-align: left;
    max-width: 250px;
    padding: 15px;
    top: var(--tooltipTop);
    left: var(--tooltipLeft);
    transform: var(--tooltipTranslate);
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 300;
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
