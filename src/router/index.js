import { createRouter, createWebHistory } from "vue-router";
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

export default router;
