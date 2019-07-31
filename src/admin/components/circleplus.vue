<template lang="pug">
  svg(class="svg-circleplus" viewBox="0 0 100 100")
    defs
      linearGradient(id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%")
        stop(offset="0%" style="stop-color:#006aed;")
        stop(offset="100%" style="stop-color:#3f35cb;")
    circle(cx="50" cy="50" r="45" fill="url(#grad1)")
    line(x1="32.5" y1="50" x2="67.5" y2="50" stroke-width="6")
    line(x1="50" y1="32.5" x2="50" y2="67.5" stroke-width="6")
</template>

<script>
</script>

<style lang="postcss">
.svg-circleplus{
  stroke: #fff;

  &.about__addgroup-ico{
    height: 21px;
  }
}
</style>