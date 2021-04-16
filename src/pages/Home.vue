<template>
  <AddTask @add-task="addTask" />

  <Tasks @delete-task="deleteTask" :tasks="tasks" />
</template>

<script>
import Tasks from "../components/Tasks";
import AddTask from "../components/AddTask";
export default {
  name: "Home",
  props: {},
  components: {
    Tasks,
    AddTask,
  },
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    addTask(task) {
      this.tasks = [...this.tasks, task];
    },
    deleteTask(id) {
      if (confirm("Are you sure?")) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
      }
    },
  },
  created() {
    this.tasks = [
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
