<script>
  export let link;
  // TODO: move scrolling logic to this class to hide link
</script>

<a href={link}>
  <div>
  <img src="/images/chevron.png" alt="arrow">
</div>
</a>

<style>
  img {
    width: 50px;
    height: 50px;
    display: absolute;
    text-align: center;
  }
  div {
    width: 100%;
    position: absolute;
    bottom: 5%;
    margin-left: auto;
    margin-right: auto;
  }
</style>