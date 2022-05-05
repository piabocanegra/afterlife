<script>
  export let link;
  // TODO: move scrolling logic to this class to hide link
</script>

<a href={link}>
  <img src="/images/chevron.png" alt="arrow">
</a>

<style>
  img {
    width: 50px;
    height: 50px;
    position: absolute;
    bottom: 5%;
  }
</style>