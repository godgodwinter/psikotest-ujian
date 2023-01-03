const ujianPsikotesRoutes = [
  {
    path: "/up",
    name: "Up",
    component: () => import("@/layouts/UjianPsikotesLayout.vue"),
    redirect: "/ujian",
    children: [
      {
        path: "/ujian",
        name: "ujian.psikotest.index",
        component: () => import("@/views/ujian/UjianIndex.vue"),
      },
      {
        path: "/paket",
        name: "ujian.psikotest.paket",
        component: () => import("@/views/ujian/PaketIndex.vue"),
      },
    ],
  },
];
export default ujianPsikotesRoutes;
