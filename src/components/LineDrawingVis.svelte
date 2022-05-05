<script>
  	import { fade } from 'svelte/transition';
    import NavigationArrow from './NavigationArrow.svelte';
</script>

<div id="page_2">
  <h1>I believe in...</h1>
  <p transition:fade>Heaven and hell</p>
  <p transition:fade>Only heaven</p>
  <p transition:fade>Only hell</p>
  <p transition:fade>Neither heaven nor hell but I believe in an afterlife.</p>
  <p transition:fade>Neither heaven nor hell and I do not believe in an afterlife.</p>
  <!-- <NavigationArrow link="#page_1"/> -->
</div>

