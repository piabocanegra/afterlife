<script>
  import FunFactBubble from "../../components/FunFactBubble.svelte";
  import NavigationArrow from "../../components/NavigationArrow.svelte";

  export let index;
</script>

<div class="page" id={"page_"+index}>
  <img src="/images/late_penitents_celestial_rose.jpg" alt="late penitents and celestial rose"/>
  <h1>So what does heaven and hell look like?</h1>
  <p>Let's find out!</p>
  <FunFactBubble bubbleId="1"/>
  <FunFactBubble bubbleId="2"/>
  <NavigationArrow link={"#page_"+(index+1)} arrowType="2"/>
</div>

<style>
  div {
    text-align: center;
    position: relative;
  }

  h1 {
    max-width: 30%;
    padding: 0.5em;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    font-family: 'Source Serif Pro', serif;
    color: #9B795F
  }

  p {
    font-size: 20px;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 5px;
    padding-bottom: 5px;
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 300;
    color: #9B795F
  }

  img {
    height: 100vh;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    object-fit: cover;
  }

  /* phone screens */
  @media screen and (max-width: 480px) {
    h1 {
      font-size: 20pt;
      max-width: 100%;
    }

    p {
      top: 77%;
      font-size: 12pt;
    }
  }

</style>
