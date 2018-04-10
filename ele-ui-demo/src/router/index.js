import Vue from 'vue'
import Router from 'vue-router'

// 在开发中，不使用延迟加载，因为加载太多的页面会导致webpack热更新太慢。所以只有在生产中使用延迟加载;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   如果“隐藏:true”将不会显示在侧栏中（默认为false）
* alwaysShow: true               如果设置为true，则总是显示根菜单，不管其子路由长度如何
*                                如果不设置始终显示，在孩子下面只有一条以上的路线
*                                它会变成嵌套模式，否则不会显示根菜单
* redirect: noredirect           如果“重定向:noredirect”不会在面包屑中重新定位
* name:'router-name'             这个名字是由“keep-alive”使用的（必须设置！！！）
* meta : {
    title: 'title'               在子菜单和面包屑（推荐设置）中显示名称
    icon: 'svg-name'             图标显示在侧边栏，
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [{
      path: 'dashboard', // 控制面板
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '企业首页', icon: 'dashboard' }
    }]
  },

  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: '表和树', icon: 'example' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: 'Table', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Tree', icon: 'tree' }
      }
    ]
  },

  {
    path: '/personal-details',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'PersonalDetails',
        component: () => import('@/views/personal-details/index'),
        meta: { title: '个人信息', icon: 'form' }
      }
    ]
  },
  {
    path: '/organ',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Organ',
        component: () => import('@/views/organ/index'),
        meta: { title: '我的组织', icon: 'form' }
      }
    ]
  },
  {
    path: '/work',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Work',
        component: () => import('@/views/work/index'),
        meta: { title: '我的工作', icon: 'form' }
      }
    ]
  },
  {
    path: '/policy-system',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'PolicySystem',
        component: () => import('@/views/policy-system/index'),
        meta: { title: '政策制度', icon: 'form' }
      }
    ]
  },
  {
    path: '/performance',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Performance',
        component: () => import('@/views/Performance/index'),
        meta: { title: '我的绩效', icon: 'form' }
      }
    ]
  },
  {
    path: '/learn',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Learn',
        component: () => import('@/views/learn/index'),
        meta: { title: '我的学习', icon: 'form' }
      }
    ]
  },
  {
    path: '/join',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Join',
        component: () => import('@/views/join/index'),
        meta: { title: '我的招聘', icon: 'form' }
      }
    ]
  },
  {
    path: '/consulting-work',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'ConsultingWork',
        component: () => import('@/views/consulting-work/index'),
        meta: { title: 'HR办事咨询', icon: 'form' }
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

