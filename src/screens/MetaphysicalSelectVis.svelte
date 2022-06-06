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
  <NavigationArrow link={"#page_"+(index+1)} isAtBottom={true} arrowType="4"/>
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

  @font-face {
    font-family: "Concorde";
    src: url("/fonts/ConcordeRegular.ttf") format('ttf');
  }

  @font-face {
    font-family: "Founders Grotesk Light";
    src: url("/fonts/FoundersGroteskLight.otf") format('otf');
  }

  select {
    border: 3px solid #9B795F;
    background-color: none;
  }

  h1 {
    font-family: Concorde;
    color: #9B795F;
  }

  p {
    font-size: 14pt;
    color: #9B795F;
  }

  option, select {
    color: #9B795F;
    font-size: 12pt;
    background-color: #313B33;
    font-family: "Founders Grotesk Light";
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

</style>
