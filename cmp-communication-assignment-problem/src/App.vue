<template>
  <section>
    <h1>OI</h1>
    <div class="wrapper">
      <div class="users">
        <active-user
          class="items"
          v-for="user in users"
          :key="user.name"
          :name="user.name"
          :age="user.age"
        />
      </div>
      <user-data class="items" @add-user="newUser" />
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        users: [
          {
            name: 'arthur',
            age: 24
          },
          {
            name: 'isabel',
            age: 52
          },
          {
            name: 'Bianca',
            age: 29
          }
        ]
      };
    },
    methods: {
      newUser(name, age) {
        const newUser = {
          name: name,
          age: age
        };
        this.users.push(newUser);
      }
    }
  };
</script>

<style>
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .items {
    padding: 2em;
    margin: 2em;
  }
</style>
