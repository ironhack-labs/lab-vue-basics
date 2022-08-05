import PostsViewVue from "@/views/PostsView.vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ChangeBackgroundColorView from "../views/ChangeBackgroundColorView.vue";
import ComputedPropertiesView from "../views/ComputedView.vue";
import PostDetailVue from "@/components/PostDetail.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/posts/detail/:id",
    name: "posts-detail",
    component: PostDetailVue,
  },
  {
    path: "/posts",
    name: "posts",
    component: PostsViewVue,
  },
  {
    path: "/colors",
    name: "colors",
    component: ChangeBackgroundColorView,
  },
  {
    path: "/computed",
    name: "computed",
    component: ComputedPropertiesView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
