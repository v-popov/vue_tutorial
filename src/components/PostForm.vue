// post is an object defined in "data" from "script"
// v-model eliminates the need to use v-bind and $event
<template>
  <form @submit.prevent>
    <h4>Post Creation</h4>
    <input
      class='input'
      v-model="post.title"
      type='text'
      placeholder='Name'
    >
    <input
      class='input'
      v-model="post.body"
      type='text'
      placeholder='Description'
    >
    <button
      class='btn'
      @click="createPost"
    >Add Post
    </button>
  </form>

</template>


// there is no way to pass data from child componet to a parent one
// but we can generate an event from child component and parent will subscribe to it
// to achieve that we can use function $emit. In our example 'create' is the event name
// this.post is an argument that a parent will receive after it subsribes to the event
// after event is generated, we are cleaning the inputs

// post object (this.post in createPost method) is already created in the data model above
<script>
export default {

  data() {
    return {
      post: {
        title: '',
        body: ''
      }
    }
  },

  methods: {
    createPost() {
      this.post.id =Date.now();
      this.$emit('create', this.post)
      this.post = {
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
