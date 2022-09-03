import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '@/views/Login.vue'
import home from '@/views/Home.vue'
import user from '@/components/Menu/User.vue'
import root from '@/components/Menu/Root.vue'
import goods from '@/components/Menu/Goods.vue'
import order from '@/components/Menu/Order.vue'
import setting from '@/components/Menu/Setting.vue'
import userinfo from '@/components/Menu/Userinfo.vue'
Vue.use(VueRouter)
const router = new VueRouter({
// 定义路由规则
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: login },
    {
      path: '/home',
      redirect: '/home/user',
      component: home,
      // 子路由规则
      children: [
        { path: 'user', component: user },
        { path: 'root', component: root },
        { path: 'goods', component: goods },
        { path: 'order', component: order },
        { path: 'setting', component: setting },
        { path: 'userinfo/:id', component: userinfo, props: true }
      ]
    }
  ]
})
// 设置路由导航只有，取得了token验证才能进入home主页
// 将需要进行加密的页面写入一个数组
router.beforeEach((to, from, next) => {
  const newweb = ['/home', '/home/user', '/home/root', '/home/goods', '/home/order', '/home/setting']
  // eslint-disable-next-line eqeqeq
  if (newweb.indexOf(to.path) != -1) {
    // 在数组中找到对应的路由链接
    const token = localStorage.getItem('token')
    // 存储token
    if (token) {
      // 如果有token就放行
      next()
    } else {
      // 没有返回到login 页面
      next('/login')
    }
  } else {
    // 不是需要token的页面直接放行
    next()
  }
})
export default router
