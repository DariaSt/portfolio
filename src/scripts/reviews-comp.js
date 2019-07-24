import Vue from 'vue';
import Flickity from 'vue-flickity';

const btns = {
  template: "#reviews-btns"
}

const reviewsHeader = {
  template: "#reviews-header",
  components: {
    btns
  }
}

const display = {
  template: "#reviews-display",
  data(){
    return {
      flickityOptions: {
        initialIndex: 3,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true
    
        // any options from Flickity can be used
        }
    }
  },
  methods: {
    next() {
      console.log('next');
      this.$refs.flickity.next();
    },
 
    previous() {
      this.$refs.flickity.previous();
    }
  },
  props: {
    reviews: Array
  },
  components:{
    Flickity
  }
}

new Vue({
  el: "#reviews-component",
  template: "#reviews-container",
  components: {
    reviewsHeader, display
  },
  data(){
    return {
      reviews: []
    }
  },
  methods: {
    makeArrWithRequiredImages(data){
      return data.map(item => {
        const requirePic = require(`../images/content/${item.authorPic}`);
        item.authorPic = requirePic;
        return item;
      })
    }
  },
  created(){
    const data = require('../data/reviews-comp.json');
    this.reviews = this.makeArrWithRequiredImages(data);
  }
})