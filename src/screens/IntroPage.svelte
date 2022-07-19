<script>
  import NavigationArrow from '../components/NavigationArrow.svelte';

  export let index;
  export let paragraph1;
  export let paragraph2;
</script>

<div class="page" id={"page_"+index}>
  <p id="padding">{paragraph1}</p>
  <p>{paragraph2}</p>
  <p></p>
  <NavigationArrow link={"#page_"+(index+1)} arrowType="1"/>
</div>

<style>
  div {
    text-align: center;
    position: relative;
    max-width: 1000px;
    margin: 0 auto;
    background-color: #DDC3B1;    
  }

  p {
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 400;
    font-size: 18pt;
  }

  #padding {
    padding-top:150px
  }

  /* phone screens */
  @media screen and (max-width: 480px) {
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      min-height: 100vh;
      flex-direction: column;
      align-content: space-around;
    }
    #padding {
      padding-top: 0px;
    }
    p {
      font-size: 12pt;
      padding-left: 2em;
      padding-right: 2em;
    }
  }
</style>
