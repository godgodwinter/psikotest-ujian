const ujianKlasikRoutes = [
  {
    path: "/klasik",
    name: "Klasik",
    component: () => import("@/layouts/MinatbakatLayout.vue"),
    redirect: "/klasik/index",
    children: [
      {
        path: "/klasik/index",
        name: "klasik.index",
        component: () => import("@/views/klasik/KlasikIndex.vue"),
      },
    ],
  },
];
export default ujianKlasikRoutes;
