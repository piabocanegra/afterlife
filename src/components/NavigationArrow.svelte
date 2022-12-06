<script>
  import { polyfill, scrollIntoView } from "seamless-scroll-polyfill";

  export let link;
  export let arrowType;
  export let overrideY = null;
  export let hideText = false;
  export let textColor = "#000000";

  let imgSrc = {
    "1": "/images/chevron-black-nofill.svg",
    "2": "/images/chevron-gold-whitefill.svg",
    "3": "/images/chevron-black-border.svg",
    "4": "/images/chevron-gold-nofill.svg"
  }

  let src = imgSrc[arrowType];
  let defaultPercent = (window.screen.width <= 480) ? "10%" : "5%";
  let bottomPercent = (overrideY != null) ? overrideY : defaultPercent;

  function scrollToElement() {
    const el = document.querySelector("#"+link);
    if (el) {
      polyfill();
      scrollIntoView(el, {
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  }

  let isSafari = navigator.userAgent.match(/Macintosh/i);
  
</script>

<div style="bottom: {bottomPercent}">
  {#if (isSafari && !hideText)}
    <p style="color: {textColor}">Scroll</p>
  {/if}
  <button type="button" id={"arrow_"+link} on:click={scrollToElement}>
    <img src={src} alt="arrow">
  </button>
</div>

<style>
  img {
    width: 50px;
    height: 50px;
  }
  button {
    background: none;
    border: none;
    cursor: pointer;
  }
  div {
    position: absolute;
    left: 50%;
    margin-left: -30px;
  }
  p {
    font-size: 10pt;
    font-family: 'Source Sans Pro', sans-serif;
    margin-bottom: -15px;
  }
</style>
