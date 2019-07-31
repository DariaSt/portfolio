<template lang="pug">
  .authorization-content
    .authorization-header
      a.authorization__close.close
    h2.authorization__title Авторизация
    form.form.authorization__form
      .row__item
        label(for='login' class='form__subtitle')
          .form__text Логин
        .form__input-block
          input(type="text", name="login", id="login", class="form__input form__field")
      .row__item
          label(for='pass' class='form__subtitle')
            .form__text Пароль
          .form__input-block
            input(type="password", name="pass", id="pass", class="form__input form__field")
      .row__item-btn
        button(type="submit" class="form-btn")
          span.form-btn__text Отправить

</template>

<script>
</script>

<style lang="postcss">
  @import "../styles/mixins.pcss";

  .authorization-content{
    background-color: #ffffff;
    width: 563px;
    padding: 60px;

    @include phones{
      width: 100%;
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;
    }
  }

  .authorization-header{
    position: relative;
    margin-bottom: 20px;

    @include phones{
      position: static;
    }
  }

  .close {
    position: absolute;
    right: 0;
    top: 0;
    width: 20px;
    height: 20px;

    @include phones{
      top: 3%;
    }
  }
    
  .close:before, .close:after {
    position: absolute;
    left: 15px;
    content: ' ';
    height: 20px;
    width: 2px;
    background-color: #333;
  }

  .close:before {
    transform: rotate(45deg);
  }

  .close:after {
    transform: rotate(-45deg);
  }

  .authorization__title{
    text-align: center;
    font-size: 36px;
    font-weight: 600;
    margin-bottom: 34px;
  }

  .authorization__form{

    display: flex;
    flex-direction: column;
    justify-content: center;

    .row__item{
      margin: 0 0 20px 0;

      &:nth-child(2n){
        margin: 0 0 20px 0;
      }
    }
  }

  .row__item-btn{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .form-btn{
    padding: 30px 130px;
    border-radius: 40px 5px;
    background-color: #ffffff;
    background-image: linear-gradient(to right, #ad00ed 0%, #5500f2 100%);
  }

  .form-btn__text{
    color: #ffffff;
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
  }
</style>