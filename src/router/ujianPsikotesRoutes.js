
const ujianPsikotesRoutes = [
  {
    path: "/up",
    name: "Up",
    component: () => import("@/layouts/UjianPsikotesLayout.vue"),
    redirect: "/ujian",
    meta: {
      requireAuth: true,
      title: "Admin",
      breadcrumb: {
        name: "Up",
        path: "/up",
        goto: "Up",
      },
    },
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
      {
        path: "/paket/aspek/:aspek_id",
        name: "ujian.psikotest.paket.aspek",
        component: () => import("@/views/ujian/PaketAspek.vue"),
      },
    ],
  },
];
export default ujianPsikotesRoutes;
