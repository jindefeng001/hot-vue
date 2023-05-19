import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import index from '../views/index.vue'
import urlList from '../views/hotUrl/urlList.vue'
import addUrl from '../views/hotUrl/addUrl.vue'
import updateUrl from '../views/hotUrl/addUrl.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '',
    component: index,
    name: 'url',
    children: [{
        path: '/index',
        component: Home,
        meta: [],
      },
      {
        path: '/list',
        component: urlList,
        meta: { title: '网站链接', icon: 'table', access: ['0101'] }
      },
      {
        path: '/add',
        name: 'addUrl',
        component: addUrl,
        meta: { title: '添加链接', icon: 'tree', access: ['0102'] }
      },
      {
        path: '/update/:id',
        name: 'updateUrl',
        hidden: true,
        component: addUrl,
        meta: { title: '修改链接', icon: 'tree', access: ['0103'] }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
