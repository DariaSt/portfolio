<template lang="pug">
  form.form.form__about--add
    .cards-item__naming
      input(type="text" placeholder="Название новой группы" id="groupName" name="groupName").form__field.form__field-border.cards-item__name
      .cards__btns
        button(type="button").cards__btns-ok
          img(src='../../images/content/ok.png').cards__btns-ok-img
        button(type="button").cards__btns-del        
          img(src='../../images/content/del.png').cards__btns-del-img
    ul.cards-item__list
    addSkill
</template>


<script>
  export default{
    components: {
      circleplus : () => import("./circleplus.vue"),
      addSkill : () => import("./aboutAddSkill.vue"),
      btns : () => import("./cardsBtns.vue"),
      btnsRedact : () => import("./cardsBtns2.vue")
    }
  }
</script>

<style lang="postcss">
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
    color: #414c63;
  }

  .error {
    background: #F08080;
    width: 150px; 
    position: relative;
    top: -75px;
    left: 20px;
    display: none;
    
    &:before {
      content: "";
      height: 0; 
      width: 0;
      position: absolute; 
      left: 10px; 
      top: -10px;
      border-bottom: 10px solid #F08080;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
}
  }
  .error__text{
    padding: 10px;
    color: white;
  }
</style>