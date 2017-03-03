import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Movie from '../components/movie.vue'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Hello,
      hidden:true,
      children: [
        {
          path: '',

        },
        {
          path: 'article',
          component: Movie

        },
        {
          path: 'movie',
          component: Movie

        },
        {
          path: 'me',
          component: Movie

        },

      ]
    },
  ]
})
