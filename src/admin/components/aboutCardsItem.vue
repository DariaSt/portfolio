<template lang="pug">
  form(action='#' method='POST').form
    .cards-item__naming
      input(type="text" value="Workflow").form__field.form__field-border.cards-item__name
      btnsRedact
    ul.cards-item__list
      li.cards-item__row
        input(type="text" value="git").cards-item__cell-name.form__field
        input(type="number" value="100").cards-item__cell-percent.form__field
        span.cards-item__cell-percent-span %
        btnsRedact.cards-item__cell-btns
      li.cards-item__row
        input(type="text" value="terminal").cards-item__cell-name.form__field
        input(type="number" value="90").cards-item__cell-percent.form__field
        span.cards-item__cell-percent-span %
        btnsRedact.cards-item__cell-btns
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
  };
</script>

<style lang="postcss">
  
</style>