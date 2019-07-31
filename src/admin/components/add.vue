<template lang="pug">
  svg(class="svg-circleplus" viewBox="0 0 100 100")
    circle(cx="50" cy="50" r="45" fill="transparent")
    line(x1="32.5" y1="50" x2="67.5" y2="50" stroke-width="3")
    line(x1="50" y1="32.5" x2="50" y2="67.5" stroke-width="3")
</template>

<script>
</script>

<style lang="postcss">
  @import "../../styles/mixins.pcss";

.svg-circleplus{
  height: 150px;
  stroke: #fff;

  @include phones{
    height: 50px;
  }
}
</style>