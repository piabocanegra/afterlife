<script>
  export let link;
  export let arrowType;
  export let overrideY;

  let imgSrc = {
    "1": "/images/chevron-black-nofill.svg",
    "2": "/images/chevron-gold-whitefill.svg",
    "3": "/images/chevron-black-border.svg",
    "4": "/images/chevron-gold-nofill.svg"
  }
  // TODO: move scrolling logic to this class to hide link

  let src = imgSrc[arrowType];
  let defaultPercent = (window.screen.width <= 480) ? "10%" : "5%";
  let bottomPercent = (overrideY != null) ? overrideY : defaultPercent;
</script>

<div style="bottom: {bottomPercent}">
  <a href={link}>
    <img src={src} alt="arrow">
  </a>
</div>

<style>
  img {
    width: 50px;
    height: 50px;
  }
  
  a {
    margin: auto 0;
  }

  div {
    left: 50%;
    margin-left: -25px;
    position: absolute;
  }
</style>
