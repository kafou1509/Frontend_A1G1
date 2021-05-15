import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Contact from '@/components/Contact';
import Profile from '@/components/Profile';

Vue.use(Router);
/* eslint-disable */
export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
    },
    {
      path: '/upgrade',
      name: 'Upgrade',
      component: Upgrade,
    },
  ],
});
