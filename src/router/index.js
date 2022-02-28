import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Auth/Login.vue"),
  },
  {
    path: "/profile",
    name: "Profile",
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/Auth/Profile.vue"),
  },
  {
    path: "/client-dashboard",
    name: "ClientDashboard",
    component: () => import("../views/ClientDashboard/Index.vue"),
    meta: { authOnly: true },
  },
  {
    path: "/client-dashboard/property",
    name: "ClientMyProperty",
    component: () => import("../views/ClientDashboard/Property.vue"),
    meta: { authOnly: true },
  },
  {
    path: "/client/my-property/:id",
    component: () => import("../views/ClientDashboard/ViewProperty.vue"),
    name: "singleProperty",
    meta: { authOnly: true },
  },
  {
    path: "/client-dashboard/agents",
    name: "ClientMyAgents",
    component: () => import("../views/ClientDashboard/allAgent.vue"),
    meta: { authOnly: true },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
