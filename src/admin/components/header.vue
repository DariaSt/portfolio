<template lang="pug">
    .header__content
      .header__base
        .header__user
          img.header__user-img(src='../../images/content/user.jpg')
          .header__user-name Ставрова Дарья
        .header__panel Панель администрирования
      .header__logout
        a.header__logout-link(href="/") Выйти
</template>

<script>
</script>

<style lang="postcss">
  @import "../../styles/mixins.pcss";

.header{
  &__content{
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    padding: 16px 0 20px 0;
  }
  &__base{
    display: flex;
    align-items: center;
  }
  &__user{
    display: flex;
    align-items: center;
    padding-right: 30px;
    font-size: 18px;
    font-weight: 600;
  }
  &__user-img{
    width: 45px;
    height: 45px;
    border-radius: 50%;
    margin-right: 20px;
  }
  &__panel{
    opacity: 0.5;
    font-size: 14px;
    font-weight: 400;

    @include phones{
      display: none;
    }
  }
  &__logout-link{
    opacity: 0.7;
    font-size: 16px;
    font-weight: 400;
    text-decoration: underline;
  }
}

</style>