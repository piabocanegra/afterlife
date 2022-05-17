<script>
  	import { fade } from 'svelte/transition';
    import NavigationArrow from '../components/NavigationArrow.svelte';

    export let currIndex;
    console.log(currIndex);
</script>

<div class="page" id="page_2">
  <h1>I believe in...</h1>
  <p transition:fade>Heaven and hell</p>
  <p transition:fade>Only heaven</p>
  <p transition:fade>Only hell</p>
  <p transition:fade>Neither heaven nor hell but I believe in an afterlife</p>
  <p transition:fade>Neither heaven nor hell and I do not believe in an afterlife</p>
  <NavigationArrow link="#page_3" isAtBottom={true} arrowType="3"/>
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
  font-family: Founders Grotesk Light
  }


</style>
