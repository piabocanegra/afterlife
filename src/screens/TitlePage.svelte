<script>
  import NavigationArrow from '../components/NavigationArrow.svelte';

  export let index;
</script>

<div class="page" id={"page_"+index}>
  <h1>Heaven and Hell: Who goes and what happens?</h1>
  <p>A look into what 6,000+ U.S. adults think about the afterlife</p>
  <img id="sun" src="/images/white-sun.svg" alt="white sun"/>
  <!-- <div id="image_wrapper"> -->
  <img id="angels" src="/images/angels.png" alt="angels"/>
  <!-- </div> -->
  <NavigationArrow link={"#page_"+(index+1)} isAtBottom={false} arrowType="3"/>
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
  #angels {
    position: absolute;
    bottom: 0%;
    left: 50%;
    margin-left: -300px;
    width: 600px;
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

  #sun {
    left: 50%;
    margin-left: -157px;
    margin-bottom: -155px;
    bottom: 35%;
    position: absolute;
    width: 350px;
  }

</style>
