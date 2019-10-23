const base = '/local-cate'
const cateRouter = [
  {
    path: base,
    redirect: base + '/index'
  },
  {
    path: base + '/index',
    name: 'LocalCate',
    component: () => import('@views/local-cate/index.vue')
  }
]
export default cateRouter
