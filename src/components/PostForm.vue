// post is an object defined in "data" from "script"
<template>
  <form @submit.prevent>
    <h4>Post Creation</h4>
    <input
      class='input'
      v-bind:value='post.title'
      @input='post.title = $event.target.value'
      type='text'
      placeholder='Name'
    >
    <input
      class='input'
      v-bind:value='post.body'
      @input='post.body = $event.target.value'
      type='text'
      placeholder='Description'
    >
    <button
      class='btn'
    >Add Post
    </button>
  </form>

</template>

<script>
export default {
  data() {
    return {
      post: {
        title: '',
        body: ''
      }
    }
  }
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}

.input {
  width: 100%;
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 5px;
}

.btn {
  margin-top: 5px;
  align-self: flex-end;
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 1px solid teal;
}
</style>
}
