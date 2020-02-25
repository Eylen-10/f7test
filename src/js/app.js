// Import Vue
import Vue from 'vue';

// Import Framework7
import Framework7 from 'framework7/framework7-lite.esm.bundle.js';

// Import Framework7-Vue Plugin
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js';

// Import Framework7 Styles
import 'framework7/css/framework7.bundle.css';

// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.css';
// import '../assets/framework7-icons/css/framework7-icons.css';

// Import App Component
import App from '../components/app.vue';

import Routes from './routes.js'

// import store from './store'

// Init Framework7-Vue Plugin
Framework7.use(Framework7Vue);

// Init App
new Vue({
  el: '#app',
  // store,
  render: (h) => h(App),

  framework7: {
    root: '#app',
    routes:Routes,
    animateNavBackIcon: true, // 开启动画导航
    swipeBackPage: false, // 禁止左右滑动返回上一页
    swipePanel:'left'
  },

  // Register App Component
  // components: {
  //   app: App
  // },

});