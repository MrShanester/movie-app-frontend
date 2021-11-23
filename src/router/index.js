import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import MoviesEdit from "../views/MoviesEdit.vue";
import MoviesShow from "../views/MoviesShow.vue";
import MoviesNew from "../views/MoviesNew.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/movies/:id/edit",
    name: "MoviesEdit",
    component: MoviesEdit,
  },
  {
    path: "/movies/:id",
    name: "MoviesShow",
    component: MoviesShow,
  },
  {
    path: "/newmovie",
    name: "MoviesNew",
    component: MoviesNew,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
