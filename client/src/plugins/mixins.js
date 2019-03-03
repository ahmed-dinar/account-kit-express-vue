import Vue from 'vue';

const mixins = {
  data(){
    return {
      ROUTE_BASE: process.env.NODE_ENV === 'production' ? '/client/' : '/'
    }
  }
};

Vue.mixin(mixins);
