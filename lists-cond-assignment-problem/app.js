const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      newTask: "",
      taskListVisible: true,
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.newTask);
    },
    toggleTaskList() {
      this.taskListVisible = !this.taskListVisible;
    },
  },
  computed: {
    buttonCaption() {
      return this.taskListVisible ? "Hide List" : "Show List";
    },
  },
});

app.mount("#assignment");
