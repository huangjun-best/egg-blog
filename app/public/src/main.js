// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueCookie from 'vue-cookie';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import App from './App';
// import VueMarkdown from 'vue-markdown';
import router from './router';

Vue.use(VueCookie);
Vue.use(iView);
// Vue.use(VueMarkdown);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
