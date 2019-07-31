<template lang="pug">
  .cards-item__addskill
    .form__field-border.form__field-name
      input(type="text" placeholder="Новый навык").cards-addskill__name.form__field
    .form__field-border.form__field-percent
      input(type="number" placeholder="100").cards-addskill__percent.form__field
      span %
    button(type="button")
      circleplus.cards-addskill__img
</template>

<script>
export default{
    components: {
      circleplus : () => import("./circleplus.vue")
    }
  };
</script>

<style lang="postcss">
  @import "../../styles/mixins.pcss";

  .cards-item__addskill{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-left: 50px;

    @include tablets{
      margin: 0;
    }
  }

  .form__field-border:nth-child(2){
    margin-left: 10px;
  }

  .form__about--add{
    .cards-item__addskill{
      position: absolute;
      bottom: 20px;
      right: 20px;

      @include tablets{
        left: 10px;
        right: 10px;
      }
    }
  }

  .form__field-name{
    flex: 3;
  }

  .form__field-percent{
    flex: 1;
    display: flex;
    flex-wrap: nowrap;
  }

  .cards-addskill__name{
    padding-left: 20px;
    opacity: 0.5;
  }

  .cards-addskill__percent{
    padding-left: 10px;
    width: 50%;
  }

  .cards-addskill__img{
    height: 40px;
    margin-left: 10px;
  }

</style>