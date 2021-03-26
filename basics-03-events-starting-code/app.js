const app = Vue.createApp({
  data() {
    
    return {
      counter: 0,
      name: '',
    };
  },
  methods: {
    Add(num) {
      this.counter = this.counter + num;
    },
    Remove(num) {
      this.counter = this.counter - num;
    },
    setName(e) {
      this.name = e.target.value;
    }
  },
});

app.mount('#events');
