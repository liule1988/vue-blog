import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Movie from '../components/movie.vue'
import Article from '../components/Article.vue'
import Article_detail from '../components/article_detail.vue'
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
          component:Article

        },
        {
          path: 'article',
          component: Movie

        },
        {
          path:'article/:id',
          name:'aa',
          component:Article_detail
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
