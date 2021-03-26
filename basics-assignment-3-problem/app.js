const app = Vue.createApp({
  data() {
    return {
      result: 0,
      message: "",
    };
  },
  methods: {
    add(num) {
      this.result += num;
    },
    defineMessage() {
      if (this.result < 37) {
        this.message = "Not there yet";
      } else if (this.result > 37) {
        this.message = "Too much!";
      }
      return this.message;
    },
  },
  watch: {
    result() {
      const hold = this;
      setTimeout(function () {
        hold.result = 0;
      }, 5000);
    },
  },
});

app.mount("#assignment");
