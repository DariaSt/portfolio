<template lang="pug">
  ul.tags
    li.tags-item
      span.tags-item__name HTML5
      button(type="button").tags-item__btn
        img.tags-item__img(src='../../images/content/cancel.png')
    li.tags-item
      span.tags-item__name Jquery
      button(type="button").tags-item__btn
        img.tags-item__img(src='../../images/content/cancel.png')
    li.tags-item
      span.tags-item__name Vue.js
      button(type="button").tags-item__btn
        img.tags-item__img(src='../../images/content/cancel.png')
</template>

<style lang="postcss">
  @import "../../styles/mixins.pcss";

  .tags{
    display: flex;
    margin-bottom: 50px;

    &-item{
      margin-left: 10px;
      padding: 7px 15px;
      background-color: #f4f4f4;
      border-radius: 15px;

      &:first-child{
        margin-left: 0;
      }
    }

    &-item__name{
      margin-right: 10px;

      @include phones{
        font-size: 13px;
      }
    }

    &-item__img{
      @include phones{
        width: 11px;
        height: 11px;
      }
    }

  }

  .image__tags.tags{
    position: absolute;
    bottom: 10px;
    right: 10px;
    margin-bottom: 0;

    .tags-item__btn{
      display: none;
    }
  }
</style>