<script>
  import FunFactBubble from "../../components/FunFactBubble.svelte";
  import NavigationArrow from "../../components/NavigationArrow.svelte";

  export let index;
</script>

<div class="page" id={"page_"+index}>
  <img src="/images/late_penitents_celestial_rose.jpg" alt="late penitents and celestial rose"/>
  <h3>So what does heaven and hell look like?</h3>
  <p>Let's find out!</p>
  <FunFactBubble bubbleId="1"/>
  <FunFactBubble bubbleId="2"/>
  <NavigationArrow link={"#page_"+(index+1)} isAtBottom={true} arrowType="2"/>
</div>

<style>
  div {
    text-align: center;
    position: relative;
  }

  h3 {
    max-width: 30%;
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
    color: #9B795F
  }
  
  img {
    height: 100vh;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    object-fit: cover;
  }

</style>
