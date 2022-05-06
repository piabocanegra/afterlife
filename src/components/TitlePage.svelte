<script>
  import NavigationArrow from "./NavigationArrow.svelte";
</script>

<div class="page" id="page_1">
  <h1>Hell and Heaven: Who goes and what happens?</h1>
  <h4>A look into what 6,000+ U.S. adults think about the afterlife</h4>
  <div id="image_wrapper">
    <img src="/images/angels.png" alt="angels">
  </div>
  <NavigationArrow link="#page_2" isAtBottom={false} />
</div>

<style>
  div {
    text-align: center;
    position: relative;
    background-color: #DDC3B1;
  }

  div#image_wrapper {
    width: 100%;
    position: absolute;
    bottom: 0%;
    margin-left: auto;
    margin-right: auto;
  }

  img {
    text-align: center;
  }

  @font-face {
  font-family: "Concorde";
  src: url("/fonts/ConcordeRegular.ttf") format('ttf');
  }

  @font-face {
  font-family: "Founders";
  src: url("/fonts/FoundersGroteskLight.otf") format('otf');
  }

  h1 {
  font-family: Concorde
  }

  h4 {
  font-family: Founders
  }

</style>
