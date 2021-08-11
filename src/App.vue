// This is Single File Component
// It should have template, script, and style sections

// posts are defined in the model "data" in "script" section
// ":posts" can be used as a shorthand for "v-bind:posts"
<template>
  <div class='app'>
    <post-form/>
    <post-list :posts='posts'/>
  </div>
</template>


<!--
@ references src folder (can be used from any project directory)
-->
<script>
import PostForm from './components/PostForm';
import PostList from '@/components/PostList';

export default {

  components: {
    PostForm, PostList
  },

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

.app {
  padding: 20px;
}

</style>
