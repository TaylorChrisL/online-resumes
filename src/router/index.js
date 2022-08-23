import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ResumeShow from "../views/ResumeShow.vue";
import ResumeIndex from "../views/ResumeIndex.vue";

const routes = [
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/resumes/:id",
    name: "resume-show",
    component: ResumeShow,
  },
  {
    path: "/",
    name: "resumes",
    component: ResumeIndex,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
