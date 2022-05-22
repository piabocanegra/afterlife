<script>
  import { fade } from 'svelte/transition';
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
    "You picked this. 00% agree with you.",
    "You picked this. 11% agree with you.",
    "You picked this. 22% agree with you.",
    "You picked this. 33% agree with you."
  ];

  function handleMouseOver() {
    let resultId = "#b_" + this.getAttribute("i");
    let lastOpacity = d3.select("#op_3").style("opacity");

    if (currIndex >= index && lastOpacity == 1 && !hasUserSelectedText) {
      d3.select(resultId).style("opacity", "100");
    }
  }

  function handleMouseOut() {
    let resultId = "#b_" + this.getAttribute("i");
    if (!hasUserSelectedText) {
      d3.select(resultId).style("opacity", "0");
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
  
</script>


<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div class="page" id={"page_"+index}>
<h1>People who do not believe in God...</h1>
{#if currIndex >= index}
  {#each [0, 1, 2, 3] as index}
    <p i={index} 
      id={"op_" + index} 
      class="option_god" 
      on:click={handleOnClick} 
      on:mouseover={handleMouseOver} 
      on:mouseout={handleMouseOut} 
      transition:fade={{ delay: 600*(index+1) }}>
      {beliefText[index]}
    </p>
    <p id={"b_" + index} class="result">{getMouseoverText(index, true)}</p>
  {/each}
 
  <NavigationArrow link={"#page_"+(index+1)} isAtBottom={true} arrowType="3"/>
{/if}
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
font-family: Concorde
}

p {
  font-family: Founders Grotesk Light;
  font-size: 18px;
}

.result {
  opacity: 0;
  color: #c95033
}

.option_god {
  cursor: pointer;
}

</style>
