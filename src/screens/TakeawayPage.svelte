<script>
  export let index;
</script>

<div class="page" id={"page_"+index}>
  <div id="page_padding">
    <h1>Heaven and Hell:<br> Key Takeaways</h1>
    <h5>Who goes?</h5>
    <p>Most Americans believe in heaven but there are differing views on who gets to be in heaven, specifically among Protestants and Catholics.</p>
    <h5>And what happens?</h5>
    <p>There is more agreement on what heaven is like compared to hell. Among people who do not believe in heaven and hell but do believe in the afterlife, there is not much consensus on what it's like.</p>
    <br>
    <p id="credits"><i>Credits: <a href="https://www.piaboc.me/">Pia Bocanegra</a>, <a href="https://les-huang.netlify.app/">Lesley Huang</a></i></p>
  </div>
</div>

<style>
  div.page {
    text-align: left;
    position: relative;
    background-color: #313B33;
  }

  div#page_padding {
    max-width: 1200px;
    margin: auto;
    padding: 0px 50px;
  }

  h1, h5 {
    font-family: 'Source Serif Pro', serif;
    color: #9B795F;
  }

  h1 {
    text-align: center;
  }

  p {
    font-size: 14pt;
    font-family: 'Source Sans Pro', sans-serif;
    color: #9B795F;
    font-weight: 300;
  }

  #credits, a {
    font-size: 12pt;
    font-family: 'Source Sans Pro', sans-serif;
    color: #9B795F;
  }

  /* phone screens */
  @media screen and (max-width: 480px) {
    div#page_padding {
      padding: 20px;
      margin: auto;
    }
    
    h1 {
      font-size: 20pt;
      max-width: 95%;
    }

    h5 {
      font-size: 16pt;
    }
    
    p {
      font-size: 12pt;
    }
  }
</style>
