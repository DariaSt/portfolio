<template lang="pug">
  section.section.reviews
   h2.base__title.reviews__title Блок «Отзывы»
   .reviews__new
    .base-subtitle
      h3.reviews-title Новый отзыв
    form.form.reviews-form
      .reviews-form__block-image
        .reviews-form__image
          img.reviews-form__image__img(src='../images/content/man-user.png')
        label.reviews-form__file
          input(type="file")
          span Добавить фото
      .reviews-form__text
        .reviews-form__row
          .row__item(:class="{error: validation.hasError('mail')}")
            label(for='user-name' class='form__subtitle')
              .form__text Имя автора
            .form__input-block
              input(type="text", v-model="user", name="user-name", id="user-name", class="form__input form__field")
            .message {{ validation.firstError('user') }}
          .row__item(:class="{error: validation.hasError('mail')}")
              label(for='user-post' class='form__subtitle')
                .form__text Титул автора
              .form__input-block
                input(type="text", v-model="post", name="user-post", id="user-post", class="form__input form__field")
              .message {{ validation.firstError('post') }}              
        .reviews-form__row
          .row__item(:class="{error: validation.hasError('mail')}")
            label(for='user-review' class='form__subtitle')
              .form__text Отзыв
            .form__textarea-block
              textarea(name="user-review", v-model="userReview", id="user-review", class="form__textarea")
            .message {{ validation.firstError('userReview') }}                          
        .reviews-form__row.reviews-form__row-btns
          .block
            button.block__btn(type="button" @click="reset") Отмена
            button.block__btn.works__btn(type="button" @click="submit") Сохранить
   ul.reviews__list
    itemAdd.reviews__item
    li.reviews__item
      .reviews-item__header
        img.reviews-item__header-img(src='../images/content/Владимир.png')
        .reviews-item__header-author
          .reviews-item__author-name Владимир Сабанцев
          .reviews-item__author-post Преподаватель
      .reviews-item__desc
        p.reviews-item__desc-text Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
        cardsBtns.reviews-item__desc-btn
    li.reviews__item
      .reviews-item__header
        img.reviews-item__header-img(src='../images/content/Владимир.png')
        .reviews-item__header-author
          .reviews-item__author-name Владимир Сабанцев
          .reviews-item__author-post Преподаватель
      .reviews-item__desc
        p.reviews-item__desc-text Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
        cardsBtns.reviews-item__desc-btn
</template>

<script>
import Vue from 'vue';
import SimpleVueValidation from 'simple-vue-validator';
const Validator = SimpleVueValidation.Validator;
Vue.use(SimpleVueValidation);

export default{
    components: {
      itemAdd : () => import("./components/itemAdd.vue"),
      cardsBtns : () => import("./components/cardsBtns3.vue"),
      formBtns : () => import("./components/formBtns.vue")
    },
    data: function () {
      return {
        user: '',
        post: '',
        userReview: ''
      };
    },
    validators: {
      user: function(value) {
        return Validator.value(value).required();
      },
      post: function(value) {
        return Validator.value(value).required();
      },
      userReview: function(value) {
        return Validator.value(value).required();
      }
    },
    methods: {
      submit: function() {
        console.log('sub');
        this.$validate()
          .then(function(success) {
            if (success) {
              alert('Validation succeeded!')
            }
          });
      },
      reset: function() {
        this.user = '';
        this.post = '';
        this.userReview = '';
        this.validation.reset();
      }
    }
};
</script>

<style lang="postcss">
  @import "../styles/mixins.pcss";

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

  .message{
    color: red;
  }

  .reviews__title{
    padding: 60px 0;
  }

  .reviews__new{
    background-color: #fff;
    box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
    padding: 30px;
    margin-bottom: 30px;
  }

  .reviews-form{
    display: flex;

    @include phones{
      flex-direction: column;
    }
  }

  .reviews-form__block-image{
    flex: 1;
    margin-right: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @include phones{
      margin: 0 0 30px 0;
    }
  }

  .reviews-form__image{
    background-color: #dee4ed;
    border-radius: 50%;
    width: 200px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 25px;
  }

  .reviews-form__file{
    cursor: pointer;
    color: #383bcf;
    font-size: 16px;
    font-weight: 600;
  }

  .reviews-form__text{
    flex: 3;
    padding-right: 15%;

    @include tablets{
      padding: 0;
    }
  }

  .reviews-form__row{
    display: flex;
    margin-bottom: 40px;

    @include phones{
      flex-direction: column;
    }
  }

  .row__item{
    flex: 1;
    &:nth-child(2n){
      margin-left: 20px;
    }

    @include phones{
      margin: 0 0 30px 0;

      &:nth-child(2n){
        margin-left: 0;
      }
    }
  }

  .reviews-form__row-btns{
    display: flex;
    justify-content: flex-end;
  }

  .reviews__list{
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 45px;
  }

  .reviews__item{
    width: 32%;
    margin-right: 2%;
    padding: 30px;
    box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
    background-color: #ffffff;

    &:nth-child(3n){
      margin-right: 0;
    }

    @include tablets{
      width: 48%;
    }

    @include phones{
      width: 100%;
      margin-bottom: 10px;
      margin-right: 0;
      padding: 30px 0;
    }
  }

  .reviews-item__header{
    display: flex;
    padding-bottom: 30px;
    border-bottom: 1px solid rgba(31, 35, 45, .15);
    margin-bottom: 30px;
  }

  .reviews-item__header-img{
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin-right: 20px;
  }

  .reviews-item__author-name{
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 5px;
  }

  .reviews-item__author-post, 
  .reviews-item__desc-text,
  .reviews-item__desc-btn{
    opacity: 0.7;
    font-size: 16px;
    font-weight: 600;
  }

  .reviews-item__desc-text{
    margin-bottom: 60px;
  }
  
</style>