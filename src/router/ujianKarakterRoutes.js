const ujianKarakterRoutes = [
  {
    path: "/karakter",
    name: "Karakter",
    component: () => import("@/layouts/MinatbakatLayout.vue"),
    redirect: "/karakter/index",
    children: [
      {
        path: "/karakter/instruksi",
        name: "karakter.instruksi",
        component: () => import("@/views/karakter/KarakterInstruksi.vue"),
      },
      {
        path: "/karakter/proses/:soal_id",
        name: "karakter.proses",
        component: () => import("@/views/karakter/KarakterProses.vue"),
      },
      {
        path: "/karakter/goto/proses/:soal_id",
        name: "karakter.proses.goto",
        redirect: to => {
          return { path: `/karakter/proses/${to.params.soal_id}` }
        },
      },
    ],
  },
];
export default ujianKarakterRoutes;
