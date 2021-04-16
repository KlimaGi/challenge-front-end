<template>
  <AddPost @add-post="addPost" />

  <PostsList @delete-post="deletePost" :posts="posts" />
</template>

<script>
import PostsList from "../components/PostsList";
import AddPost from "../components/AddPost";
export default {
  name: "Home",
  props: {},
  components: {
    PostsList,
    AddPost,
  },
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    addPost(post) {
      this.posts = [...this.posts, post];
    },
    deletePost(id) {
      if (confirm("Are you sure?")) {
        this.posts = this.posts.filter((post) => post.id !== id);
      }
    },
  },
  created() {
    this.posts = [
      // typically make request
      {
        id: 1,
        title: "Lorem Ipsum",
        author: "Lorem",
        day: "2021-04-01",
        text: "Content",
      },
      {
        id: 2,
        title: "german language lesson",
        author: "Lorem",
        day: "2021",
        text: "Content",
      },
      {
        id: 3,
        title: "more about git",
        author: "Lorem",
        day: "2021",
        text: "Content",
      },
    ];
  },
};
</script>
