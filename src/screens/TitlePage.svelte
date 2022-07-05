<script>
  import NavigationArrow from '../components/NavigationArrow.svelte';

  export let index;
</script>

<div class="page" id={"page_"+index}>
  <h1>Heaven and Hell: Who goes and what happens?</h1>
  <p>A look into what 6,000+ U.S. adults think about the afterlife</p>
  <img id="sun" src="/images/white-sun.svg" alt="white sun"/>
  <img id="angels" src="/images/angels.png" alt="angels"/>
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

  h1 {
    font-family: 'Source Serif Pro', serif;
  }

  p {
    font-family: 'Source Sans Pro', sans-serif;
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
