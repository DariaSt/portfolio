<template lang="pug">
  ul.about__cards-list
    li.about__cards-item.about__cards-item--add
      cardsItemAdd
    li.about__cards-item
      cardsItem
</template>

<script>
export default{
    components: {
      circleplus : () => import("./circleplus.vue"),
      cardsItem : () => import("./aboutCardsItem.vue"),
      cardsItemAdd : () => import("./aboutCardsItemAdd.vue")
    }
  };
</script>

<style lang="postcss">
  @import "../../styles/mixins.pcss";

  .about__cards-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .about__cards-item{
    padding: 20px;
    background: #fff;
    width: 49%;
    box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
    margin-bottom: 30px;

    @include phones{
      width: 100%;
    }
  }

  .about__cards-item--add{
    position: relative;
  }

  .form__field{
    height: 100%;
    border: none;
    outline: none;
  }

  .form__field-border{
    padding-bottom: 10px;
    border-bottom: 1px solid #414c63;
    opacity: 0.5;
  }

  .cards-item__list{
    margin-left: 20px;
  }

  .cards-item__naming{
    display: flex;
    justify-content: space-between;
    padding-bottom: 15px;
    border-bottom: 1px solid rgba(31, 35, 45, 0.15);
    margin-bottom: 30px;
  }

  .cards-item__name{
    width: 60%;
    margin-left: 20px;
    font-size: 18px;
    font-weight: 600;
    opacity: 0.51;
    color: #414c63;
  }

  .cards-item__row{
    display: flex;
    flex-wrap: nowrap;
    margin-bottom: 25px;
    justify-content: space-between;
  }

  .cards-item__cell-name{
    flex: 3;
  }

  .cards-item__cell-percent{
    flex: 1;
    width: 50%;
  }

  .cards-item__cell-btns{
    flex: 1;
    display: flex;
    justify-content: flex-end;
  }

  .cards-item__cell-percent-span{
    margin-right: 20px;
  }

  .cards-item__list{
    margin-bottom: 70px;
  }

</style>