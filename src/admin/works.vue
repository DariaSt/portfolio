<template lang="pug">
  section.section.works
   h2.base__title.works__title Блок «Работы»
   .works__redact
    .base-subtitle
      h3.redact-title Редактирование работы
    form.form.works__redact-form
      .form__block-img
        p.block-img__text Перетащите или загрузите для загрузки изображения
        label.block-img__file.works__btn
          input(type="file")
          span Загрузить
      .form__block-text
        .block-text__item
          label(for='text-name' class='form__subtitle')
            .form__text Название
          .form__input-block
            input(type="text", name="name", id="text-name", class="form__input form__field")
        .block-text__item
          label(for='text-link' class='form__subtitle')
            .form__text Ссылка
          .form__input-block
            input(type="text", name="link", id="text-link", class="form__input form__field")
        .block-text__item
          label(for='text-textarea' class='form__subtitle')
            .form__text Описание
          .form__textarea-block
            textarea(name="text-textarea", id="text-textarea", class="form__textarea")
        .block-text__item
          label(for='text-tag' class='form__subtitle')
            .form__text Добавление тэга
          .form__input-block
            input(type="text", name="tag", id="text-tag", class="form__input form__field")
        .block-text__tags-list
          tags
        formBtns
   ul.works__list
    itemAdd.works__item
    li.works__item.works__item--active
      .works__item-image
        img.image__img(src='../images/content/slider-1.jpg')
        tags.image__tags
      .works__item-desc
        h3.desc_title Сайт
        p.desc-text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
        a.desc-link(href="#") http://loftschool.ru
        .works__item-btns
          cardsBtns
    li.works__item
      .works__item-image
        img.image__img(src='../images/content/slider-1.jpg')
        tags.image__tags
      .works__item-desc
        h3.desc_title Сайт
        p.desc-text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
        a.desc-link(href="#") http://loftschool.ru
        .works__item-btns
          cardsBtns
</template>

<script>
export default{
    components: {
      itemAdd : () => import("./components/itemAdd.vue"),
      tags : () => import("./components/tags.vue"),
      cardsBtns : () => import("./components/cardsBtns3.vue"),
      formBtns : () => import("./components/formBtns.vue")
    }
  };
</script>

<style lang="postcss">
  @import "../styles/mixins.pcss";

  .works__title{
    padding: 60px 0;
  }
  
  .works__redact{
    background-color: white;
    box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
    padding: 20px;
    margin-bottom: 32px;

    @include phones{
      padding: 20px 0;
    }
  }


  .redact-title{
    
  }

  .works__redact-form{
    display: flex;
    flex-direction: row;

    @include tablets{
      flex-direction: column;
      padding: 0 50px;
    }

    @include phones{
      padding: 0 10px;
    }
  }

  .form__block-img{
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 1px solid #a1a1a1;
    background-color: #dee4ed;
    height: 276px;

    @include tablets{
      padding: 30px;
      width: 100%;
      margin-bottom: 30px;
    }
  }

  .block-img__text{
    width: 50%;
    text-align: center;
    opacity: 0.5;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 27px;
  }

  .block-img__file{
  }

  input[type="file"] {
    display: none;
  }

  .works__btn{
    padding: 12px 35px;
    cursor: pointer;
    border-radius: 25px;
    background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
    color: #ffffff;
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
  }

  .form__block-text{
    margin-left: 30px;
    flex: 1;
  }

  .block-text__item{
    margin-bottom: 20px;
  }

  .form__text{
    opacity: 0.5;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 20px;
  }

  .form__input-block{
    border-bottom: 1px solid #000;
    padding-bottom: 10px;
  }

  .form__input, .form__textarea{
    font-size: 16px;
    font-weight: 600;
  }

  .form__textarea{
    resize: none;
    width: 100%;
    padding: 20px;
    height: 150px;
  }

  .works__list{
    display: flex;
    flex-wrap: wrap;
  }

  .works__item{
    width: 32%;
    box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
    background-color: #ffffff;
    margin-right: 2%;
    margin-bottom: 30px;

    &--active{
      opacity: 0.6;
    }

    &:nth-child(3n){
      margin-right: 0;
    }

    @include tablets{
      width: 48%;
    }

    @include phones{
      width: 100%;
      margin-right: 0;
    }
  }

  .works__item-image{
    position: relative;
  }

  .works__item-desc{
    padding: 40px 35px;
  }

  .desc_title{
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 26px;
  }

  .desc-text{
    opacity: 0.7;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 30px;
  }

  .desc-link{
    color: #383bcf;
    font-size: 16px;
    font-weight: 600;
    text-decoration: none;
  }
  .works__item-btns{
    margin-top: 45px;
  }
</style>