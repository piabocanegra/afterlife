<script>
  export let link;
  export let isAtBottom;
  let bottomPercent = isAtBottom ? "5%" : "35%";
  // TODO: move scrolling logic to this class to hide link
</script>

<a href={link}>
  <div style="bottom: {bottomPercent}">
    <img src="/images/chevron.png" alt="arrow">
  </div>
</a>

<style>
  img {
    width: 50px;
    height: 50px;
    text-align: center;
  }
  div {
    width: 100%;
    position: absolute;
    /* bottom: var(--bottomPercent); */
    margin-left: auto;
    margin-right: auto;
  }
</style>