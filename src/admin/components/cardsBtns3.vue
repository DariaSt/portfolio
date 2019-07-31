<template lang="pug">
  .block__btns
    button(type="button").block-btns__btn.block-btns__redact
      .block-btns__text Править
      img(src='../../images/content/worksEdit.png').block-btns__redact-img
    button(type="button").block-btns__btn.block-btns__del     
      .block-btns__text Удалить
      img(src='../../images/content/worksDel.png').block-btns__del-img
</template>

<script>
</script>

<style lang="postcss">
  .block__btns{
    display: flex;
    justify-content: space-between;
  }
  .block-btns__btn{
    display: flex;
    align-items: flex-end;
  }
  .block-btns__text{
    margin-right: 10px;
    opacity: 0.5;
    font-size: 16px;
    font-weight: 600;
  }
</style>