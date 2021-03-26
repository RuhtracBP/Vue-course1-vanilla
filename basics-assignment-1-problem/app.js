const app = Vue.createApp({
    data() {
        return {
            name: 'Arthur',
            age: 24,
            image: 'https://avatars.githubusercontent.com/RuhtracBP'
        }
    },
    methods: {
        FavNumber() {
            const number = Math.random();
            return number;
        }
    }
});

app.mount('#assignment')