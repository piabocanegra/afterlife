<script>
  import { polyfill, scrollIntoView } from "seamless-scroll-polyfill";

  export let link;
  export let arrowType;
  export let overrideY = null;

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

</script>

<div style="bottom: {bottomPercent}">
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
  }
  div {
    position: absolute;
    left: 50%;
    margin-left: -30px;
  }
</style>
