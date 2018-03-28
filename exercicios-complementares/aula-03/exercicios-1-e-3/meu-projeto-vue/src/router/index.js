import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Exercicio01 from '@/components/Exercicio01';
import Exercicio03 from '@/components/Exercicio03';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },

    {
      path: '/Exercicio01',
      name: 'Exercicio01',
      component: Exercicio01,
    },

    {
      path: '/Exercicio03',
      name: 'Exercicio03',
      component: Exercicio03,
    },
  ],
});
