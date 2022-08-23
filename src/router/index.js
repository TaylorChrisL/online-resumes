import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ResumeShow from "../views/ResumeShow.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/resumes/:id",
    name: "resume-show",
    component: ResumeShow,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
