<script>
  import NavigationArrow from '../components/NavigationArrow.svelte';

  export let index;
  export let chapterTitle;
  export let showSubtitles = false;
</script>

<div class="page" id={"page_"+index}>
  <h2 style="padding-top: 250px;">{chapterTitle}</h2>
  {#if showSubtitles}
    <p>(that's not heaven or hell)</p>
  {/if}
  <NavigationArrow link={"#page_"+(index+1)} arrowType="4"/>
</div>

<style>
  h2 {
    color: #9B795F;
  }

  div {
    text-align: center;
    position: relative;
    background-color: #FFF4EC;
  }

  h2 {
    font-family: 'Source Serif Pro', serif;
    margin: 0px;
    color: #9B795F;
  }

  p {
    font-family: 'Source Sans Pro', sans-serif;
    font-family: 300;
    font-size: 14pt;
    color: #9B795F;
  }

  /* phone screens */
  @media screen and (max-width: 480px) {
    h2 {
      font-size: 18pt;
    }
    
    p {
      font-size: 12pt;
    }
  }
</style>
