<script>
  	import { fade } from 'svelte/transition';
</script>
<div>
  <h1>I believe in...</h1>
  <p transition:fade>Heaven and hell</p>
  <p transition:fade>Only heaven</p>
  <p transition:fade>Only hell</p>
  <p transition:fade>Neither heaven nor hell but I believe in an afterlife.</p>
  <p transition:fade>Neither heaven nor hell and I do not believe in an afterlife.</p>
</div>

