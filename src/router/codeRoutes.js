const codeRoutes = [
  {
    path: "/code",
    name: "Code",
    component: () => import("@/views/examples/exLayout.vue"),
    redirect: "/500",
    children: [
      {
        path: "/404",
        name: "NotFound",
        component: () => import("@/views/examples/404/404.vue"),
      },
      {
        path: "/500",
        name: "500",
        component: () => import("@/views/examples/500/500.vue"),
      },
      {
        path: "/maintenance",
        name: "Maintenance",
        component: () => import("@/views/examples/maintenance/Maintenance.vue"),
      },
    ],
  },
];
export default codeRoutes;
