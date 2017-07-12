import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import VueResource from 'vue-resource';
import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings';
import seller from 'components/seller/seller';
import 'common/stylus/index.styl';

Vue.use(VueResource);
Vue.use(VueRouter);
/* eslint-disable no-new */
const routes = [
  {path: '/', name: 'index', component: App, children: [{path: '/goods', component: goods}, {path: '/ratings', component: ratings}, {path: '/seller', component: seller}]}
];

const router = new VueRouter({
  linkActiveClass: 'active',
  routes
});

let app = new Vue({
  router
}).$mount('#app');
router.push('/goods');
export default app;

