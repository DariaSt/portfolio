<template lang="pug">
  .cards__redact-btns
    button(type="button").redact-btns__redact
      img(src='../../images/content/Pencil.png').redact-btns__redact-img
    button(type="button").redact-btns__del       
      img(src='../../images/content/trash.png').redact-btns__del-img
</template>

<style>
.cards-item__naming{
  .redact-btns__del {
    display: none;
  }
}
</style>