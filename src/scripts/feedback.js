import Vue from 'vue';

const app = new Vue({
  el: '#feedbackForm',
  data: {
    errors: [],
    name: null,
    mail: null,
    message: null
  },
  methods: {
    checkForm: function (e) {
      if (this.name && this.mail && this.message) {
        return true;
      }

      if (!this.name) {
        this.$refs["error-name"].style.display="block";
      }
      else{
        this.$refs["error-name"].style.display="none";
      }

      if (!this.mail) {
        this.$refs["error-mail"].style.display="block";
      }
      else{
        this.$refs["error-mail"].style.display="none";
      }

      if (!this.message) {
        this.$refs["error-message"].style.display="block";
      }
      else{
        this.$refs["error-message"].style.display="none";
      }

      e.preventDefault();
    }
  }
})