<script>
  import { fade } from 'svelte/transition';
  import { afterUpdate } from 'svelte';
  import NavigationArrow from '../../components/NavigationArrow.svelte';

  export let currIndex;
  export let index;
  let hasUserSelectedText = false;

  // hardcoded text
  let beliefText = [
    "Heaven and hell",
    "Only heaven",
    "Only hell",
    "Neither heaven nor hell but I believe in an afterlife",
    "Neither heaven nor hell and I do not believe in an afterlife",
    "I don't have an answer"
  ];
  let mouseoverText = [
    "You picked this. 61% of adults have the same belief!",
    "You picked this. 13% of adults have the same belief!",
    "You picked this. 1% of adults have the same belief!",
    "You picked this. 7% of adults have the same belief!",
    "You picked this. 17% of adults have the same belief!",
    "You picked this. 1% of adults have the same belief!"
  ];

  function handleMouseOver() {
    let resultId = "#r_" + this.getAttribute("i");
    let lastOpacity = d3.select("#o_5").style("opacity");
    let hoverId = "#o_" + this.getAttribute("i");

    if (currIndex >= index && lastOpacity == 1 && !hasUserSelectedText) {
      d3.select(resultId).style("opacity", "100");
      d3.select(hoverId).style("font-weight", 400);
    }
  }

  function handleMouseOut() {
    let resultId = "#r_" + this.getAttribute("i");
    let hoverId = "#o_" + this.getAttribute("i");

    if (!hasUserSelectedText) {
      d3.select(resultId).style("opacity", "0");
      d3.select(hoverId).style("font-weight", 200);
    }
  }

  function getMouseoverText(index, isHardcoded) {
    return (isHardcoded) ? "Click here to select this belief." : mouseoverText[index];
  }

  function handleOnClick() {
    if (!hasUserSelectedText) {
      let i = this.getAttribute("i");
      hasUserSelectedText = true;
      d3.select("#r_" + i).style("opacity", "1");
      d3.select("#r_" + i).text(getMouseoverText(i, false));

      d3.selectAll(".option").style("cursor", "initial");
    }
  }

  // run animations once
  $: animationAlreadyRan = false;
  $: delayInterval = !animationAlreadyRan ? 600 : 0;

  afterUpdate(() => {
    document.addEventListener('scroll', function() {
    if (document.getElementById("page_"+index).getBoundingClientRect().bottom - 20 <= window.innerHeight) {
        animationAlreadyRan = true;
      }
    });
  });

  let isMobile = (window.screen.width <= 480);

</script>


<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div class="page" id={"page_"+index}>
  <h1>I believe in...</h1>
  <p id="instruction">(Select an option and find out how you compare to U.S. adults.)</p>
  {#if currIndex >= index}
    {#each [0, 1, 2, 3, 4, 5] as index}
      <p i={index}
        id={"o_" + index}
        class="option"
        on:click={handleOnClick}
        on:mouseover={handleMouseOver}
        on:mouseout={handleMouseOut}
        in:fade={{ delay: delayInterval*(index+1) }}>
        {beliefText[index]}
      </p>
      <p id={"r_" + index} class="result">{getMouseoverText(index, true)}</p>
    {/each}

    {#if isMobile}
      <NavigationArrow link={"page_"+(index+1)} overrideY="1%" arrowType="1"/>
    {:else}
      <NavigationArrow link={"page_"+(index+1)} arrowType="1"/>
    {/if}
  {/if}
</div>

<style>
  div {
    text-align: center;
    position: relative;
  }

  h1 {
    font-family: 'Source Serif Pro', serif;
    padding-bottom: 0em;
  }

  p {
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 200;
    font-size: 14pt;
  }

  #instruction {
    padding-bottom: 1em;
    font-weight: 400;
    margin-left: 10%;
    margin-right: 10%;
  }

  .result {
    opacity: 0;
    color: #c95033;
    font-weight: 400;
  }

  .option {
    cursor: pointer;
  }

  /* phone screens */
  @media screen and (max-width: 480px) {
    h1 {
      font-size: 20pt;
      max-width: 100%;
    }
    p {
      font-size: 14pt;
      margin-left: 15px;
      margin-right: 15px;
    }
  }

</style>
