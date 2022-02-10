import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import("../views/home/Home");
const Main = () => import("../views/main/Main");
const About = () => import("../views/about/About");
const Profile = () => import("../views/profile/Profile");

Vue.use(VueRouter)

const routes = [
  {
    path: "",
    redirect: "/home",
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/main",
    component: Main,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/profile",
    component: Profile,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;