import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home";
import About from "../pages/About";
import CreatePost from "../pages/CreatePost.vue";
import EditPost from "../pages/EditPost.vue";
import Post from "../pages/Post.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/post/:id",
    name: "Post",
    props: true,
    component: Post,
  },
  {
    path: "/create-post",
    name: "Create Post",
    component: CreatePost,
  },
  {
    path: "/edit-post",
    name: "Edit Post",
    component: EditPost,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
