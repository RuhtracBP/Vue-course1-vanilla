<template>
  <div>
    <h2>User Name: {{ name }}</h2>
    <h3>User Age: {{ age }}</h3>
  </div>
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        required: true
      },
      age: {
        type: Number,
        required: true
      }
    }
  };
</script>
