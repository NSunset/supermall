import * as VueRouter from "vue-router";

const Home = () => import("views/tabbar/home/Home");
const Category = () => import("views/tabbar/category/Category");
const Cart = () => import("views/tabbar/cart/Cart");
const Profile = () => import("views/tabbar/profile/Profile");

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
    path: "/category",
    component: Category,
  },
  {
    path: "/cart",
    component: Cart,
  },
  {
    path: "/profile",
    component: Profile,
  },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});

export default router;
