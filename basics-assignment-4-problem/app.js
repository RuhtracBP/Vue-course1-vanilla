const app = Vue.createApp({
  data() {
    return {
      user: "",
      button: true,
    };
  },
  computed: {
    classes() {
      return this.user;
    },
  },
  methods: {
    toggleButton() {
      console.log("oi");
      this.button = !this.button;
    },
  },
});

app.mount("#assignment");
