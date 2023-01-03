const exRoutes = [
  {
    path: "/ex",
    name: "Ex",
    component: () => import("@/views/examples/exLayout.vue"),
    redirect: "/500",
    children: [
      {
        path: "/blog_01",
        name: "blog_01",
        component: () => import("@/views/examples/pages/blog_01.vue"),
      },
      {
        path: "/blog_02",
        name: "blog_02",
        component: () => import("@/views/examples/pages/blog_02.vue"),
      },
      {
        path: "/card_01",
        name: "card_01",
        component: () => import("@/views/examples/pages/card_01.vue"),
      },
      {
        path: "/card_02",
        name: "card_02",
        component: () => import("@/views/examples/pages/card_02.vue"),
      },
      {
        path: "/card_03",
        name: "card_03",
        component: () => import("@/views/examples/pages/card_03.vue"),
      },
      {
        path: "/card_04",
        name: "card_04",
        component: () => import("@/views/examples/pages/card_04.vue"),
      },
      {
        path: "/cetak_01",
        name: "cetak_01",
        component: () => import("@/views/examples/pages/cetak_01.vue"),
      },
      {
        path: "/cetak_02",
        name: "cetak_02",
        component: () => import("@/views/examples/pages/cetak_02.vue"),
      },
      {
        path: "/cetak_03",
        name: "cetak_03",
        component: () => import("@/views/examples/pages/cetak_03.vue"),
      },
      {
        path: "/todo",
        name: "todo",
        component: () => import("@/views/examples/pages/todoList.vue"),
      },
      {
        path: "/features",
        name: "features",
        component: () => import("@/views/examples/pages/features.vue"),
      },
      {
        path: "/profile",
        name: "profile",
        component: () => import("@/views/examples/pages/profile.vue"),
      },
      {
        path: "/landing_001",
        name: "landing_001",
        component: () => import("@/views/examples/pages/landing_001.vue"),
      },
      {
        path: "/banner",
        name: "banner",
        component: () => import("@/views/examples/pages/banner.vue"),
      },
      {
        path: "/sosmed",
        name: "sosmed",
        component: () => import("@/views/examples/pages/sosmed.vue"),
      },
      {
        path: "/testi_01",
        name: "testi_01",
        component: () => import("@/views/examples/pages/testi_01.vue"),
      },
      {
        path: "/cmd",
        name: "cmd",
        component: () => import("@/views/examples/pages/cmd.vue"),
      },
      {
        path: "/sidebar_01",
        name: "sidebar_01",
        component: () => import("@/views/examples/pages/sidebar_01.vue"),
      },
    ],
  },
];
export default exRoutes;
