<script>
  import { fade } from 'svelte/transition';
  import { afterUpdate } from 'svelte';
  import NavigationArrow from '../../components/NavigationArrow.svelte';

  export let currIndex;
  export let index;
  let hasUserSelectedText = false;

  // hardcoded text
  let beliefText = [
    "Can go to heaven",
    "Cannot go to heaven",
    "I don't have an answer",
    "I don't believe in heaven"
  ]
  let mouseoverText = [
    "You picked this. 39% agree with you.",
    "You picked this. 32% agree with you.",
    "You picked this. 2% agree with you.",
    "You picked this. 27% agree with you."
  ];

  function handleMouseOver() {
    let resultId = "#b_" + this.getAttribute("i");
    let lastOpacity = d3.select("#op_3").style("opacity");
    let hoverId = "#op_" + this.getAttribute("i");

    if (currIndex >= index && lastOpacity == 1 && !hasUserSelectedText) {
      d3.select(resultId).style("opacity", "100");
      d3.select(hoverId).style("font-weight", 400);
    }
  }

  function handleMouseOut() {
    let resultId = "#b_" + this.getAttribute("i");
    let hoverId = "#op_" + this.getAttribute("i");

    if (!hasUserSelectedText) {
      d3.select(resultId).style("opacity", "0");
      d3.select(hoverId).style("font-weight", 300);
    }
  }

  function getMouseoverText(index, isHardcoded) {
    return (isHardcoded) ? "Click here to select this belief." : mouseoverText[index];
  }

  function handleOnClick() {
    if (!hasUserSelectedText) {
      let i = this.getAttribute("i");
      hasUserSelectedText = true;
      d3.select("#b_" + i).style("opacity", "1");
      d3.select("#b_" + i).text(getMouseoverText(i, false));

      d3.selectAll(".option_god").style("cursor", "initial");
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

</script>


<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div class="page" id={"page_"+index}>
<h1>People who do not believe in God...</h1>
<p id="instruction">(Select an option and find out how you compare to U.S. adults.)</p>
{#if currIndex >= index}
  {#each [0, 1, 2, 3] as index}
    <p i={index}
      id={"op_" + index}
      class="option_god"
      on:click={handleOnClick}
      on:mouseover={handleMouseOver}
      on:mouseout={handleMouseOut}
      in:fade={{ delay: delayInterval*(index+1) }}>
      {beliefText[index]}
    </p>
    <p id={"b_" + index} class="result">{getMouseoverText(index, true)}</p>
  {/each}

  <NavigationArrow link={"page_"+(index+1)} arrowType="4" textColor="#9B795F"/>
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
  padding-bottom: 0em;
}

p {
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 300;
  font-size: 14pt;
  color: #9B795F;
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

.option_god {
  cursor: pointer;
}

/* phone screens */
@media screen and (max-width: 480px) {
  h1 {
    font-size: 20pt;
    max-width: 100%;
  }
	p {
		font-size: 12pt;
	}
  #instruction {
    font-size: 10pt;
  }
}

</style>
