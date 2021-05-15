import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Joboffer from '@/components/Joboffer';
import Profile from '@/components/Profile';
import Upgrade from '@/components/Upgrade';

Vue.use(Router);
/* eslint-disable */
export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/',
      name: 'Joboffer',
      component: Joboffer,
    },
    {
      path: '/',
      name: 'Profile',
      component: Profile,
    },
    {
      path: '/',
      name: 'Upgrade',
      component: Upgrade,
    },
  ],
});
