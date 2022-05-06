<script>
  import NavigationArrow from "./NavigationArrow.svelte";
</script>

<div class="page" id="page_1">
  <h1>Hell and Heaven: Who goes and what happens?</h1>
  <h5>A look into what 6,000+ U.S. adults think about the afterlife</h5>
  <div id="image_wrapper">
    <img src="/images/angels.png" alt="angels">
  </div>
  <NavigationArrow link="#page_2" isAtBottom={false} />
</div>

<style>
  div {
    position: relative;
    background-color: #DDC3B1;
    @font-face {
      font-family: "TitleFont";
    }
  }
  div#image_wrapper {
    width: 100%;
    position: absolute;
    bottom: 0%;
    margin-left: auto;
    margin-right: auto;
  }
  img {
    text-align: center;
  }
</style>
