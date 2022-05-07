<script>
  export let link;
  export let isAtBottom;
  let bottomPercent = isAtBottom ? "5%" : "35%";
  // TODO: move scrolling logic to this class to hide link
</script>

<div style="bottom: {bottomPercent}">
  <a href={link}>
    <img src="/images/chevron.png" alt="arrow">
  </a>
</div>

<style>
  img {
    width: 50px;
    height: 50px;
  }
  div {
    left: 50%;
    margin-left: -25px;
    position: absolute;
  }
</style>