<script>
  export let link;
  // TODO: move scrolling logic to this class
</script>

<a href={link}>
  <img src="/images/chevron.png" alt="arrow">
</a>

<style>
  img {
    width: 50px;
    height: 50px;
    position: fixed;
    bottom: 5%;
  }
</style>