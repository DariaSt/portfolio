<template lang="pug">
  li.item--add
    button(type="button").add__btn
      add
      .add__btn-text Добавить работу
</template>

<script>
export default{
    components: {
      add : () => import("./add.vue")
    }
  };
</script>

<style lang="postcss">
  @import "../../styles/mixins.pcss";

  .item--add{
    background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .add__btn{
    @include phones{
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }
  }


  .add__btn-text{
    margin-top: 30px;
    color: #ffffff;
    font-size: 18px;
    font-weight: 700;

    @include phones{
      margin: 0 0 0 10px
    }
  }
</style>