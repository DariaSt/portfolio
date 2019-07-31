<template lang="pug">
  .cards__btns
    button(type="button").cards__btns-ok
      img(src='../../images/content/ok.png' v-on:click="checkForm").cards__btns-ok-img
    button(type="button").cards__btns-del        
      img(src='../../images/content/del.png').cards__btns-del-img
</template>

<script>
export default{
};
</script>