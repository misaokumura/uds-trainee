import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import AlineVieira from '@/components/AlineVieira';
import Contador from '@/components/Contador';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },

    {
      path: '/sobre',
      name: 'AlineVieira',
      component: AlineVieira,
    },

    {
      path: '/contador',
      component: Contador,
    },
  ],
});
