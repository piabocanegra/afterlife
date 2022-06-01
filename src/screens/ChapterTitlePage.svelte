<script>
  import NavigationArrow from '../components/NavigationArrow.svelte';

  export let index;
  export let chapterTitle;
  export let showSubtitles = false;
</script>

<div class="page" id={"page_"+index}>
  <h2>{chapterTitle}</h2>
  {#if showSubtitles}
    <p>(that's not heaven or hell)</p>
  {/if}
  <NavigationArrow link={"#page_"+(index+1)} isAtBottom={false} arrowType="4"/>
</div>

<style>
  h2 {
    font-weight: 400;
  }
  div {
    padding-top: 250px;
    text-align: center;
    position: relative;
    background-color: #DDC3B1;
  }

  @font-face {
    font-family: "Concorde";
    src: url("/fonts/ConcordeRegular.ttf") format('ttf');
  }

  @font-face {
    font-family: "Founders Grotesk Light";
    src: url("/fonts/FoundersGroteskLight.otf") format('otf');
  }

  h2 {
    font-family: Concorde;
    margin: 0px;
  }

  p {
    font-family: Founders Grotesk Light;
    font-size: 20px;
  }
</style>
