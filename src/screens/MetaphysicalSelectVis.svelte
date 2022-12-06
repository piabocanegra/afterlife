<script>
  import NavigationArrow from '../components/NavigationArrow.svelte';

  export let index;
  let showButton = true;

  // hardcoded values
  let labelList = [
    "Younger Americans are more likely to believe in reincarnation than older Americans.",
    "Most Americans don't believe some interaction is possible between the living and the dead.",
    "Most say that it is possible to feel the presence of deceased."
  ];

  let imageList = [
    "../images/reincarnation.svg",
    "../images/livingdead.svg",
    "../images/dead.svg"
  ];

  $: buttonText = "Check my answers";

  function handleOnclick() {
    showButton = false;

    // validate selection 
    let select0 = document.getElementById("select_0").value;
    let select1 = document.getElementById("select_1").value;
    let select2 = document.getElementById("select_2").value;

    let button = document.getElementById("button_text");

    if (select0 == "true" & select1 == "false" & select2 == "true") {
      buttonText = "Great job, you got it correct."
      button.style.color = "white";
      button.style.textDecoration = "none";
    } else {
      buttonText = "Not quite, click here to try again!";
      button.onclick = function() {
        showButton = true;
        buttonText = "Check my answers";
        button.style.color = "#9B795F";
        button.style.textDecoration = "none";
      }
      button.style.cursor = "pointer";
      button.style.color = "#C95033";
      button.style.textDecoration = "underline";
    }
  }

  let isMobile = (window.screen.width <= 480);

</script>

<div class="page" id={"page_"+index}>
  <h1>What do people think about other metaphysical matters?</h1>
  <div>
    {#each [0, 1, 2] as i}
      <div class="horizontal">
        <img src={imageList[i]} alt="selection"/>
        <div class="vertical">
          <p>{labelList[i]}</p>
          <select id={"select_"+i}>
            <option value="none">-</option>
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </div>
      </div>
    {/each}

    <!-- Button or result text -->
    {#if showButton}
      <img id="button" src="../images/button.svg" alt="button img" on:click={handleOnclick}/>
    {/if}
    <p id="button_text">{buttonText}</p>
  </div>

  <NavigationArrow link={"page_"+(index+1)} overrideY="1%" arrowType="4" hideText={true}/>

</div>

<style>
  div {
    text-align: center;
    position: relative;
    flex-direction: column;
    background-color: #313B33;
  }

  .horizontal {
    text-align: left;
    flex-direction: row;
    display: flex;
    margin: auto;
    max-width: 900px;
  }

  .vertical {
    text-align: left;
    padding: 10px;
  }

  select {
    border: 3px solid #9B795F;
    background-color: none;
  }

  h1 {
    font-family: 'Source Serif Pro', serif;
    color: #9B795F;
  }

  p {
    font-size: 14pt;
    font-family: 'Source Sans Pro', sans-serif;
    color: #9B795F;
    font-weight: 300;
  }

  option, select {
    color: #9B795F;
    font-size: 12pt;
    background-color: #313B33;
    font-family: 'Source Sans Pro', sans-serif;
  }

  img {
    width: 120px;
  }

  #button {
    cursor: pointer;
    position: absolute;
    left: 50%;
    bottom: -14%;
    margin-left: -150px;
    width: 300px;
  }

  #button_text {
    font-weight: 400;
  }

  /* phone screens */
  @media screen and (max-width: 480px) {
    h1 {
      font-size: 20pt;
      max-width: 95%;
    }
    p {
      font-size: 12pt;
    }
    #button {
      bottom: -12%;
    }
    #button_text {
      font-weight: 400;
      margin-top: 40px;
    }
  }

</style>
