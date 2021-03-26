const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastname: "",
      //fullname: "",
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      }
    },
    /* name(value) {
      if (value === "") {
        this.fullname = "";
      } else {
        this.fullname = value + " " + this.lastname;
      }
    },
    lastname(value) {
      if (value === "") {
        this.fullname = "";
      } else {
        this.fullname = this.name + " " + value;
      }
    } */
  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = "";
    },
    outputFullname() {
      console.log("outputFullname executed");
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "lastName";
    },
  },
  computed: {
    fullname() {
      console.log("outputFullname executed");
      if (this.name === "" || this.lastname === "") {
        return "";
      }
      return this.name + " " + this.lastname;
    },
  },
});

app.mount("#events");
