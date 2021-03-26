const app = Vue.createApp({
    data() {
        return {
            courseGoalA: 'Finish he course and Learn Vue!',
            courseGoalB: 'Master Vue and make amazing apps!',
            vueLink: 'http://vuejs.org/'
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5  ) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }            
        }
    }
});

app.mount('#user-goal');