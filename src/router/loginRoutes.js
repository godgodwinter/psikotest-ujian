const loginRoutes = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/examples/exLayout.vue"),
    redirect: "/login_00",
    children: [
      {
        path: '/login_00',
        name: 'login_00',
        component: () => import('@/views/examples/login/Login_00.vue')
      },
      {
        path: '/login_01',
        name: 'login_01',
        component: () => import('@/views/examples/login/Login_01.vue')
      },
      {
        path: '/login_02',
        name: 'login_02',
        component: () => import('@/views/examples/login/Login_02.vue')
      },
      {
        path: '/login_03',
        name: 'login_03',
        component: () => import('@/views/examples/login/Login_03.vue')
      },
      {
        path: '/login_04',
        name: 'login_04',
        component: () => import('@/views/examples/login/Login_04.vue')
      },
      {
        path: '/login_05',
        name: 'login_05',
        component: () => import('@/views/examples/login/Login_05.vue')
      },
      {
        path: '/login_06',
        name: 'login_06',
        component: () => import('@/views/examples/login/Login_06.vue')
      },
      {
        path: '/login_07',
        name: 'login_07',
        component: () => import('@/views/examples/login/Login_07.vue')
      },
      {
        path: '/login_08',
        name: 'login_08',
        component: () => import('@/views/examples/login/Login_08.vue')
      },
    ],
  },
];
export default loginRoutes;
