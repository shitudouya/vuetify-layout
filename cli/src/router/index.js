import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Base",
    component: () => import("../Base.vue"),
    redirect: "/one",
    children: [
      {
        path: "/one",
        name: "One",
        component: () => import("../views/one.vue"),
      },
      {
        path: "/two",
        name: "Two",
        component: () => import("../views/two.vue"),
      },
      {
        path: "/three",
        name: "Three",
        component: () => import("../views/three.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
