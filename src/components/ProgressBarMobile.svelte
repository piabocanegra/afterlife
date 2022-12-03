<script>
  export let index;
  export let total;
  export let offset;

  let numberList = [...Array(total).keys()];
  
  console.log(total)
</script>

<div>
  <svg width={total*16+10} height=40>
    {#each numberList as i}
    <a href={"#page_"+(i+1)}>
      {#if index == i}
        <circle cx={10+16*i} cy={16} r={7} style="--bgColor: #AF9583"/>
      {:else}
        <circle cx={10+16*i} cy={16} r={3} style="--bgColor: #C7AF9E"/>
      {/if}
    </a>
    {/each}
  </svg>
</div>

<style>
  div {
    position: absolute; 
    z-index: 1000;
    width: 100%;
    text-align: start;
  }
  circle {
    fill: var(--bgColor);
  }
  svg {
    position: fixed;
    left: 50%; 
    top: 0%; 
    transform: translateX(-50%);
  }
</style>
