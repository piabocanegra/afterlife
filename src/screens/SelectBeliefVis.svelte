<script>
  	import { fade } from 'svelte/transition';
    import NavigationArrow from '../components/NavigationArrow.svelte';

    export let currIndex;

    function handleMouseOver() {
      let resultId = "#r_" + this.getAttribute("i");
      let lastOpacity = d3.select("#o_5").style("opacity");
      
      if (currIndex >= 2 && lastOpacity == 1) {
        d3.select(resultId).style("opacity", "100");
      }
    }

    function handleMouseOut(e) {
      let resultId = "#r_" + this.getAttribute("i");
      //TODO: add slow fade-out
      d3.select(resultId).style("opacity", "0");
    }
</script>


<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div class="page" id="page_2">
  <h1>I believe in...</h1>
  {#if currIndex >= 2}
    <p i="1" class="option" on:mouseover={handleMouseOver} on:mouseout={handleMouseOut} transition:fade={{ delay: 600 }}>Heaven and hell</p>
    <p id="r_1" class="result">You picked this. xx% of adults have the same belief!</p>
    <p i="2" class="option" on:mouseover={handleMouseOver} on:mouseout={handleMouseOut} transition:fade={{ delay: 1200 }}>Only heaven</p>
    <p id="r_2" class="result">You picked this. xx% of adults have the same belief!</p>
    <p i="3" class="option" on:mouseover={handleMouseOver} on:mouseout={handleMouseOut} transition:fade={{ delay: 1800 }}>Only hell</p>
    <p id="r_3" class="result">You picked this. xx% of adults have the same belief!</p>
    <p i="4" class="option" on:mouseover={handleMouseOver} on:mouseout={handleMouseOut} transition:fade={{ delay: 2400 }}>Neither heaven nor hell but I believe in an afterlife</p>
    <p id="r_4" class="result">You picked this. xx% of adults have the same belief!</p>
    <p i="5" id="o_5" class="option" on:mouseover={handleMouseOver} on:mouseout={handleMouseOut} transition:fade={{ delay: 3000 }}>Neither heaven nor hell and I do not believe in an afterlife</p>
    <p id="r_5" class="result">You picked this. xx% of adults have the same belief!</p>
    <NavigationArrow link="#page_3" isAtBottom={true} arrowType="3"/>
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
    color: red;
  }

  .option {
    cursor: pointer;
  }
</style>
