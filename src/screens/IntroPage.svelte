<script>
  import NavigationArrow from '../components/NavigationArrow.svelte';

  export let index;
  export let paragraph1;
  export let paragraph2;
</script>

<div class="page" id={"page_"+index}>
  <p>{paragraph1}</p>
  <p>{paragraph2}</p>
  <NavigationArrow link={"#page_"+(index+1)} isAtBottom={false} arrowType="1"/>
</div>

<style>
  div {
    padding-top: 150px;
    text-align: center;
    position: relative;
    max-width: 1000px;
    margin: 0 auto;
    background-color: #DDC3B1;
  }

  p {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 18pt;
  }
</style>
