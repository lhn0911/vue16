import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import Register from "@/views/Register.vue";
import Login from "@/views/Login.vue";
import Detail from "@/views/Detail.vue";
import Product from "@/views/Product.vue";
import Account from "@/views/Account.vue";
import Dashboard from "@/views/Dashboard.vue";
import NotFound from "@/views/NotFound.vue";


const routes = [
  { path: "/", component: HomeView,

    children: [
      { path: "about", component: About },
      { path: "contact", component: Contact },
      { path: "detail", component: Detail},
      { path: "product", component: Product },
      { path: "account", component: Account},
      { path: "dashboard", component: Dashboard },
    ]
  },
  { path: "/register", component: Register },
  { path: "/login", component: Login },
  { path: '/:pathMatch(.*)*', component: NotFound },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
