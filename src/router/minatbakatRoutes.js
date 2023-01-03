const minatbakatRoutes = [
  {
    path: "/mb",
    name: "Mb",
    component: () => import("@/layouts/MinatbakatLayout.vue"),
    redirect: "/minatbakat",
    children: [
      {
        path: "/minatbakat",
        name: "minatbakat",
        component: () => import("@/views/minatbakat/MinatbakatIndex.vue"),
      },
    ],
  },
];
export default minatbakatRoutes;
