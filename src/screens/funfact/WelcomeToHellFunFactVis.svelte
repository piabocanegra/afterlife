<script>
  import FunFactBubble from "../../components/FunFactBubble.svelte";
  import NavigationArrow from "../../components/NavigationArrow.svelte";

  export let index;
</script>

<div class="page" id={"page_"+index}>
  <img src="/images/satan.jpeg" alt="satan"/>
  <h1>Welcome to hell!</h1>
  <FunFactBubble bubbleId="3"/>
  <NavigationArrow link={"page_"+(index+1)} arrowType="2" hideText={true}/>
</div>

<style>
  div {
    text-align: center;
    position: relative;
  }
  
  h1 {
    padding: 0.5em;
    max-width: 35%;
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    font-family: 'Source Serif Pro', serif;
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
  }

</style>
