<template>
  <div :key="post.id" v-for="post in posts">
    <PostContent @delete-post="$emit('delete-post', post.id)" :post="post" />
  </div>
</template>

<script>
import PostContent from "./PostContent";

export default {
  props: {
    posts: Array,
  },
  components: {
    PostContent,
  },
  emits: ["delete-post"],
};
</script>
