<script>
  import NavigationArrow from '../components/NavigationArrow.svelte';
</script>

<div class="page" id="page_1">
  <h1>Hell and Heaven: Who goes and what happens?</h1>
  <p>A look into what 6,000+ U.S. adults think about the afterlife</p>
  <div id="image_wrapper">
    <img src="/images/angels.png" alt="angels">
  </div>
  <NavigationArrow link="#page_2" isAtBottom={false} arrowType="1"/>
</div>

<style>
  h1 {
    font-weight: 400;
  }
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
    font-family: "Founders Grotesk Light";
    src: url("/fonts/FoundersGroteskLight.otf") format('otf');
  }

  h1 {
    font-family: Concorde;
  }

  p {
    font-family: Founders Grotesk Light;
  }

</style>
