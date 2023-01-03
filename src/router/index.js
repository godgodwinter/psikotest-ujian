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
  if (
    to.matched.some((record) => record.meta.requireAuth) &&
    !localStorage.getItem("isLogin")
  ) {
    Toast.babeng("Info", "Silahkan Login terlebih dahulu!");
    // console.log("belum login");
    // next("/login");
    next({ name: "Login" });
    // console.log(to);
    // next({ name: "login", query: { next: to.fullPath } });
  } else {
    next();
  }
});

export default router;
