<template lang="pug">
  .block
    button.block__btn(type="button" @click="reset") Отмена
    button.block__btn.works__btn(type="button" @click="submit") Сохранить
</template>

<script>
</script>

<style lang="postcss">
  @import "../../styles/mixins.pcss";

  .block{
    display: flex;
    justify-content: flex-end;
    margin-bottom: 30px;

    @include tablets{
      justify-content: center;
    }
  }
  .block__btn{
    color: #383bcf;
    font-size: 16px;
    font-weight: 600;
  }
  .block__btn.works__btn{
    margin-left: 50px;
    color: #fff;
  }
</style>