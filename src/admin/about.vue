<template lang="pug">
  section.section.about
    .about__headline
      h2.base__title Блок «Обо мне»
      button(type="button").about__addgroup
        circleplus.about__addgroup-ico
        span.about__addgroup-text Добавить группу
    .about__cards
      cards  
</template>

<script>
export default{
    components: {
      circleplus : () => import("./components/circleplus.vue"),
      cards : () => import("./components/aboutCards.vue")
    }
  };
</script>

<style lang="postcss">
  @import "../styles/mixins.pcss";

.about{
  
  &__headline{
    display: flex;
    padding: 60px 0;

    @include phones{
      flex-direction: column;
    }
  }

  &__addgroup{
    margin-left: 60px;
    display: flex;
    align-items: center;

    @include phones{
      margin-left: 0;
      margin-top: 30px;
      padding: 0;
    }
  }

  &__addgroup-ico{
    height: 20px;
    margin-right: 12px;
  }

  &__addgroup-text{
    color: #383bcf;
    font-size: 16px;
    font-weight: 600;
  }
}
</style>