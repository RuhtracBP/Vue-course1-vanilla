<template>
  <form @submit.prevent="$emit('add-user', name, age)">
    <div>
      <label>Name:</label>
      <input type="text" v-model="name" />
    </div>
    <div>
      <label>Age:</label>
      <input type="number" v-model="age" />
    </div>
    <button>Submit</button>
  </form>
</template>

<script>
  export default {
    emits: ['add-user'],
    data() {
      return {
        name: '',
        age: null
      };
    }
  };
</script>
