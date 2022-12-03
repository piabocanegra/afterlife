<script>
  export let index;
  export let total;
  export let offset;

  let numberList = [...Array(total).keys()];
</script>

<div>
  <svg width=50 height=450>
    {#each numberList as i}
    <a href={"#page_"+(i+1)}>
      {#if index == i && offset > 0.1}
        <circle cx={25} cy={10+25*i} r={9} style="--bgColor: #AF9583"/>
      {:else}
        <circle cx={25} cy={10+25*i} r={5} style="--bgColor: #C7AF9E"/>
      {/if}
    </a>
    {/each}
  </svg>
</div>

<style>
  div {
    left: 95%;
    position: absolute; 
    height: 100%;
    z-index: 1000;
  }
  circle {
    fill: var(--bgColor);
  }
  svg {
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
  }
</style>
