import Vue from 'vue';
import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API
});

Vue.prototype.$http = instance;
