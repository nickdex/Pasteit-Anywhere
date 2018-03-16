export default [
  {
    path: '/home/:session',
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
