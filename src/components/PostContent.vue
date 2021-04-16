<template>
  <div class="post">
    <h3>
      {{ post.title }}
      <i @click="$emit('delete-post', post.id)" class="fas fa-times"></i>
    </h3>
    <p>{{ post.author }}</p>
    <p>{{ post.day }}</p>
    <p>{{ post.text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    post: Object,
  },
};
</script>

<style scope>
.fas {
  color: #8a8f8a;
}

.post {
  background: #e9f0e9;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.post.reminder {
  border-left: 5px solid #008000;
}

.post h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
