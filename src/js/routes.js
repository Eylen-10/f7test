import Home from '../pages/home.vue'

export default[
  {
    path: '*',
    redirect: '/home/'
  },
  {
    path: '/',
    redirect: '/home/'
  },
  {
    path:'/home/',
    component: Home
  }
]