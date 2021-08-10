// This is Single File Component
// It should have template, script, and style sections

// Specifying layout - buttons, titles, etc.

<template>
  <div>

    <div class="post" v-for="post in posts">
      <div><strong>Name: </strong> {{ post.title }}</div>
      <div><strong>Description: </strong> {{ post.body }}</div>
    </div>

  </div>
</template>


<script>
export default {

  data() {
    return {
      posts: [
        {id: 1, title: 'Some Title', body: 'Some Description'},
        {id: 2, title: 'Some Title 2', body: 'Some Description 2'},
        {id: 3, title: 'Some Title 3', body: 'Some Description 3'}
      ]
    }
  },

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
