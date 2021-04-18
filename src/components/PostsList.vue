<template>
  <div :key="post.id" v-for="post in posts">
    <PostItem @delete-post="deletePost" :post="post" />
  </div>
</template>

<script>
import PostItem from "./PostItem";
import axios from "axios";

export default {
  data() {
    return {
      posts: [],
    };
  },
  components: {
    PostItem,
  },
  emits: ["delete-post"],
  async created() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    this.posts = response.data;
  },
  methods: {
    deletePost(id) {
      if (confirm("Are you sure?")) {
        this.posts = this.posts.filter((post) => post.id !== id);
      }
    },
  },
};
</script>
