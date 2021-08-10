// This is Single File Component
// It should have template, script, and style sections

// Specifying layout - buttons, titles, etc.

// v-bind allows us to connect (bind) data (model) to a component
// value is a standard attribute of any input
// But component is not connected to data (model) yet (uni-directional)
// Thus, changes in component (entering text in the input field) will not modify the data (model)

// To make this connection bi-directional (syncronized) we need to subscribe to the 'input' event: @input
// We can either pass a method name to @input (like we do for title), or pass the command directly (like we do for body)

// @submit.prevent in the form prevents browser from refresh after we click the 'Add Post' button.
// If a browser refreshes, we will loose the post that we've added using the form
<template>
  <div>

    <form @submit.prevent>
      <h4>Post Creation</h4>
      <input v-bind:value='title' @input='inputTitle' type='text' placeholder='Name'>
      <input v-bind:value='body' @input='body = $event.target.value' type='text' placeholder='Description'>
      <button @click='createPost'>Add Post</button>
    </form>

    <div class="post" v-for="post in posts">
      <div><strong>Name: </strong> {{ post.title }}</div>
      <div><strong>Description: </strong> {{ post.body }}</div>
    </div>

  </div>
</template>


<!--
newPost object should have a unique id
We set this.title and this.body to empty strings after pushing new post to this.posts to erase the content of input forms
-->
<script>
export default {

  data() {
    return {
      posts: [
        {id: 1, title: 'Some Title', body: 'Some Description'},
        {id: 2, title: 'Some Title 2', body: 'Some Description 2'},
        {id: 3, title: 'Some Title 3', body: 'Some Description 3'}
      ],
      title: '',
      body: ''
    }
  },


  methods: {
    createPost() {
      const newPost = {
        id: Date.now(),
        title: this.title,
        body: this.body,
      }
      this.posts.push(newPost)
      this.title = '',
      this.body = ''
    },

    inputTitle(event) {
      this.title = event.target.value;
    }
  }

}
</script>



<!--
If we want this style to be available only for this component
we can add flag scoped: <style scoped>
Star (*) means the style will be applied for all elements

Классическое обнуление:
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
-->
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
}
</style>
