<template lang="pug">
  .admin-wrap
    header.header-wrap
      .container
        headerComponent
    aside.sidebar
      .container
        sidebar
    .about-wrap
      .about-content
        .container      
          about
    .works-wrap
      .works-content
        .container
          works
    .reviews-wrap
      .reviews-content
        .container
          reviews
    .authorization-wrap
      .container
        authorization
</template>

<script>
  export default{
    components: {
      about : ()  => import("./about.vue"),
      works : ()  => import("./works.vue"),
      reviews : ()  => import("./reviews.vue"),
      authorization : ()  => import("./authorization.vue"),
      headerComponent : () => import("./components/header.vue"),
      sidebar : () => import("./components/sidebar.vue")
    }
  };
</script>

<style lang="postcss">
  @import "normalize.css";
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');
  @import "../styles/mixins.pcss";
  @import "../styles/layout/base.pcss";

  .header-wrap{
    background-image: linear-gradient(to right, #3e3e59 0%, #454573 100%);
  }

  .about-wrap, .works-wrap{
    background-image: url('../images/content/wrapperMain.png');
  }
  .about-content, .works-content{
    background: rgba(255, 255, 255, 0.9);
  }

  .base__title{
    font-size: 21px;
    font-weight: 700;
  }

  .base-subtitle{
    border-bottom: 1px solid rgba(31, 35, 45, 0.15);
    margin-bottom: 40px;

    h3{
      font-size: 18px;
      font-weight: 700;
      padding: 10px 25px;
    }
  }
</style>