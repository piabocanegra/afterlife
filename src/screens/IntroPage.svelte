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

  p {
    font-family: Founders Grotesk Light;
    font-size: 18pt;
  }
</style>
