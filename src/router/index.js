import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/home',
      component: resolve => require(['../components/common/Home.vue'], resolve),
      children: [
        {
          path: '/',
          component: resolve => require(['../components/page/Index.vue'], resolve)
        },
        {
          path: '/classmanage',
          component: resolve => require(['../components/page/ClassManage.vue'], resolve)
        },
        {
          path: '/绩效薪资管理',
          component: resolve => require(['../components/page/绩效薪资管理.vue'], resolve)
        }
      ]
    },
    {
      path: '/login',
      component: resolve => require(['../components/page/Login.vue'], resolve)
    }
  ]
})
