<template lang="pug">
  nav
    ul.nav
      li.nav__item.nav__item--active
        a.nav__item-link(href="#") Обо мне
      li.nav__item
        a.nav__item-link(href="#") Работы
      li.nav__item
        a.nav__item-link(href="#") Отзывы
</template>

<script>
</script>

<style lang="postcss">
.nav{
  display: flex;
  background-color: #fff;

  &__item{
    padding: 28px;

    &--active{
      border-bottom: 3px solid #383bcf;

      .nav__item-link{
        color: #383bcf;
        font-weight: 600;
      }
    }
  }

  &__item-link{
    color: #414c63;;
    font-size: 16px;
    text-decoration: none;
  }
}
</style>