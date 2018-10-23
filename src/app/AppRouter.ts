import Vue from 'vue';
import Router from 'vue-router';

import Bling2Dashboard from './bling2-dashboard/Bling2Dashboard.vue';
import MouseTrackingRouter from './mouse-tracking/MouseTrackingRouter';


Vue.use(Router);

export default new Router({
  mode   : 'history',
  base   : process.env.BASE_URL,
  routes : [{
    path: '/',
    name: 'bling.title.link',
    component: Bling2Dashboard,
    meta: {
      iconCls: 'fa fa-star'
    }
  }, {
    path: '/mouse-tracking/',
    name: 'tracking.title.link',
    redirect: '/mouse-tracking/logs',
    component: () => import('./mouse-tracking/MouseTracking.vue'),
    children: MouseTrackingRouter,
    meta: {
      iconCls: 'fa fa-reply-all'
    }
  }]
});
