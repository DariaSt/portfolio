import Vue from 'vue';

const btns = {
  template: "#slider-btns"
}

const thumbs = {
  template: "#slider-thumbs",
  props: {
    "works": Array,
    "currentWork": Object
  }
}

const display = {
  template: "#slider-display",
  props: {
    works: Array,
    currentWork: Object,
    currentIndex: Number
  },
  computed: {
    reversedWorks(){
      return [...this.works].reverse();
    }
  },
  components:{
    btns, thumbs
  }
}

const tags = {
  template: "#slider-tags",
  props: {
    tagsArray: Array
  }
}

const info = {
  template: "#slider-info",
  props: {
    currentWork: Object
  },
  computed: {
    tagsArray(){
      return this.currentWork.skills.split(', ');
    }
  },
  components: {
    tags
  }
}

new Vue({
  el: "#slider-component",
  template: "#slider-container",
  components: {
    display,
    info
  },
  data(){
    return {
      works: [],
      currentIndex: 0
    }
  },
  computed: {
    currentWork(){
      return this.works[this.currentIndex];
    }
  },
  watch: {
    currentIndex(value){
      const worksLengthFromZero = this.works.length - 1;
      if (value < 0) this.currentIndex = worksLengthFromZero;
      if (value > worksLengthFromZero) this.currentIndex = 0;
    }
  },
  methods: {
    makeArrWithRequiredImages(data){
      return data.map(item => {
        const requirePic = require(`../images/content/${item.photo}`);
        item.photo = requirePic;
        return item;
      })
    },
    handleSlide(direction){
      switch(direction)
      {
        case 'next':
          this.currentIndex++;
          break;
        case 'prev':
          this.currentIndex--;
          break; 
      }
    }
  },
  created(){
    const data = require("../data/works.json");
    this.works = this.makeArrWithRequiredImages(data);
  }
})