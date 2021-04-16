<template>
  <form @submit="onSubmit" class="add-form">
    <div class="form-control">
      <label>Post Title</label>
      <input
        type="text"
        v-model="title"
        name="title"
        placeholder="Post Title"
      />
    </div>

    <div class="form-control">
      <label>Author</label>
      <input type="text" v-model="author" name="author" placeholder="Author" />
    </div>

    <div class="form-control">
      <label>Date</label>
      <input type="text" v-model="day" name="day" placeholder="Date" />
    </div>

    <div class="form-control">
      <label>Text</label>
      <textarea type="text" v-model="text" name="text" placeholder="Text" />
    </div>

    <input type="submit" value="Save Task" class="btn btn-block" />
  </form>
</template>

<script>
export default {
  name: "AddTask",
  data() {
    return {
      title: "",
      author: "",
      day: "",
      text: "",
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();

      if (!this.title || !this.author || !this.day || !this.text) {
        alert("Please add the text, all areas are important.");
        return;
      }

      const newTask = {
        id: Math.floor(Math.random() * 100000),
        title: this.title,
        author: this.author,
        day: this.day,
        text: this.text,
      };

      this.$emit("add-task", newTask);
      this.title = "";
      this.author = "";
      this.day = "";
      this.text = "";
    },
  },
};
</script>

<style scoped>
.add-form {
  margin-bottom: 40px;
}

.form-control {
  margin: 20px 0;
}

.form-control label {
  display: block;
}

.form-control input,
textarea {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}

.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.form-control-check label {
  flex: 1;
}

.form-control-check input {
  flex: 2;
  height: 20px;
}
</style>
