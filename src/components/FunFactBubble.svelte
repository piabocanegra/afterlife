<script>
  export let bubbleId;
  // map of ids to fixed positions of fun fact bubbles
  let funFactPositionMap = {
    "1": ["80%", "90%"],
    "2": ["85%", "8%"],
    "3": ["50%", "50%"],
    "4": ["50%", "50%"]
  }

  // map of ids to hardcoded text for fun facts
  let funFactTextMap = {
    "1": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "2": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "3": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "4": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  }

  let top = funFactPositionMap[bubbleId][0];
  let left = funFactPositionMap[bubbleId][1];
  let translateString = "translate(-"+ top + ", -" + left + ")"
</script>

<div style="--top: {top}; --left: {left}; --translate: {translateString}">
  <!-- TODO: change image to question mark -->
  <img src="/images/chevron.png" alt="question mark"/>
</div>

<style>
  div {
    position: absolute;
    top: var(--top);
    left: var(--left);
    transform: var(--translate);
  }
  img {
    width: 40px;
    height: 40px;
  }
</style>