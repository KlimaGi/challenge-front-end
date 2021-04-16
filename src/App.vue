<template>
  <div class="container">
    <router-link to="/post/2">Post</router-link>
    <router-link to="/create-post">Create Post</router-link>
    <router-link to="/edit-post">Edit Post</router-link>
    <Header title="Our Articles" />

    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Kiwi+Maru:wght@300&display=swap");
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  /* text-align: center;  */
}
body {
  font-family: "Kiwi Maru", serif;
}
.container {
  max-width: 700px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid #006400;
  padding: 30px;
  border-radius: 5px;
}
.btn {
  display: inline-block;
  background: #006400;
  color: whitesmoke;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
</style>
