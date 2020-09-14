import Vue from "vue";
import VueRouter from "vue-router";

import Landing from "@/Landing.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Landing,
      redirect: { name: "home" }
    },
    {
      path: "!",
      name: "!",
      component: () => import("@/Home-Parent.vue"),
      children: [
        {
          path: "home",
          name: "home",
          component: () => import("@/Pages/Home.vue")
        }
      ]
    }
  ]
});

export default router;
