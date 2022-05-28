<script>
  import NavigationArrow from '../components/NavigationArrow.svelte';

  export let index;
  export let paragraph1;
  export let paragraph2;
</script>

<div class="page" id={"page_"+index}>
  <h3>{paragraph1}</h3>
  <h3>{paragraph2}</h3>
  <NavigationArrow link={"#page_"+(index+1)} isAtBottom={false} arrowType="3"/>
</div>

<style>
  h3 {
    font-weight: 400;
  }

  div {
    padding-top: 150px;
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

  h3 {
    font-family: Founders Grotesk Light;
  }
</style>
