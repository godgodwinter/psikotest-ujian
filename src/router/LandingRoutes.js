const LandingRoutes = [
  {
    path: "/landing",
    name: "Landing",
    component: () => import("@/layouts/LandingLayout.vue"),
    redirect: "/",
    children: [
      {
        path: "/",
        name: "LandingIndex",
        component: () => import("@/views/examples/login/Login_00.vue"),
      },
    ],
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/404",
  },
];
export default LandingRoutes;
