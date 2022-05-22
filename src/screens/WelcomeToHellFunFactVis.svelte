<script>
  import FunFactBubble from "../components/FunFactBubble.svelte";
  import NavigationArrow from "../components/NavigationArrow.svelte";

  export let index;
</script>

<div class="page" id={"page_"+index}>
  <img src="/images/satan.jpeg" alt="satan"/>
  <h3>Welcome to hell!</h3>
  <FunFactBubble bubbleId="3"/>
  <NavigationArrow link={"#page_"+(index+1)} isAtBottom={true} arrowType="2"/>
</div>

<style>
  div {
    text-align: center;
    position: relative;
  }
  h3 {
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 75px;
    padding-right: 75px;
    max-width: 30%;
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    font-family: Concorde;
    color: #9B795F
  }
  img {
    height: 100vh;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    object-fit: cover;
  }

  @font-face {
  font-family: "Concorde";
  src: url("/fonts/ConcordeRegular.ttf") format('ttf');
  }

  @font-face {
    font-family: "Founders Grotesk Light";
    src: url("/fonts/FoundersGroteskLight.otf") format('otf');
  }

</style>
