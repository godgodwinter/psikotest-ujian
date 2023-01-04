import { createRouter, createWebHistory } from "vue-router";
import Toast from "@/components/lib/Toast";
import LandingRoutes from "./LandingRoutes";
import loginRoutes from "./loginRoutes";
import codeRoutes from "./codeRoutes";
import exRoutes from "./exRoutes";
import minatbakatRoutes from "./minatbakatRoutes";
import ujianPsikotesRoutes from "./ujianPsikotesRoutes";
import ujianKlasikRoutes from "./ujianKlasikRoutes";
import ujianKarakterRoutes from "./ujianKarakterRoutes";

const routes = [];

routes.push(
  ...LandingRoutes,
  ...loginRoutes,
  ...codeRoutes,
  ...exRoutes,
  ...minatbakatRoutes,
  ...ujianKlasikRoutes,
  ...ujianPsikotesRoutes,
  ...ujianKarakterRoutes,
);

const router = createRouter({
  history: createWebHistory(),
  routes,
});


router.beforeEach((to, from, next) => {
  // middleware login
  if (
    to.matched.some((record) => record.meta.requireAuth) &&
    !localStorage.getItem("isLogin")
  ) {
    // 1.periksa apakah token valid
    // 2. jikat tidak valid maka remove localstorage
    // 3. pergi kemenu login
    Toast.babeng("Info", "Silahkan Login terlebih dahulu!");
    // console.log("belum login");
    // next("/login");
    next({ name: "Login" });
    // console.log(to);
    // next({ name: "login", query: { next: to.fullPath } });
  } else {
    next();
  }

  // // middleware proses pengerjaan  soal
  // if (
  //   to.matched.some((record) => record.meta.requireProsesAktif) &&
  //   !localStorage.getItem("isProsesAktif")
  // ) {
  //   Toast.babeng("Info", "Sesi ujian tidak ditemukan!");
  //   console.log("requireProsesAktif");
  //   // next("/login");
  //   // next({ name: "ujian.psikotest.paket" });

  //   // next({ name: "Login" });
  //   // console.log(to);
  //   // next({ name: "login", query: { next: to.fullPath } });
  //   // router.push({
  //   //   name: ujian.psikotest.paket
  //   // })
  // } else {
  //   next();
  // }
});

export default router;
