// This is Single File Component
// It should have template, script, and style sections

// posts are defined in the model "data" in "script" section
// ":posts" can be used as a shorthand for "v-bind:posts"

// post-list subsribes to event 'create' that is generated from the
// createPost method in PostForm.vue component
<template>
  <div class='app'>
    <post-form
      @create="createPost"
    />
    <post-list
      :posts='posts'
    />
  </div>
</template>


<!--
@ references src folder (can be used from any project directory)

createPost method will receive arguments defined in PostForm.vue
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
    }
  },


  methods: {
    createPost(post) {
      this.posts.push(post);
    },

    inputTitle(event) {
      this.title = event.target.value;
    }
  }

}
</script>


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
