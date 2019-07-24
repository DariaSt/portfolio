import Vue from 'vue';
import Flickity from 'vue-flickity';

export const bus = new Vue();

const btns = {
  template: "#reviews-btns",
  methods: {
    next() {
      this.$parent.$emit('next');
    },
 
    previous() {
      this.$parent.$emit('prev');
    }
  }
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
        prevNextButtons: false,
        pageDots: false,
        cellAlign: 'left',
        groupCells: 2
        // any options from Flickity can be used
        }
    }
  },
  props: {
    reviews: Array
  },
  components:{
    Flickity
  },
  methods: {
    changeFlickityOptions(){
      if (matchMedia('screen and (max-width: 320px)').matches ) {
        this.flickityOptions.groupCells = 1;
      }
      else{
        this.flickityOptions.groupCells = 2;
      }
    }
  },
  created(){
    this.changeFlickityOptions();
  }
}

new Vue({
  el: "#reviews-component",
  template: "#reviews-container",
  components: {
    reviewsHeader, display, Flickity
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
    },
    next(){
      this.$children[1].$refs.flickity.next();
    },
    prev(){
      this.$children[1].$refs.flickity.previous();
    }
  },
  created(){
    const data = require('../data/reviews-comp.json');
    this.reviews = this.makeArrWithRequiredImages(data);
  }
})