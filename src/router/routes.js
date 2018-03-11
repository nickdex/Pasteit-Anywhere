export default [
  {
    path: '/home',
    component: () => import('layouts/default'),
    children: [{ path: '', component: () => import('pages/home') }]
  },
  {
    path: '/',
    component: () => import('layouts/login')
  },

  {
    // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
