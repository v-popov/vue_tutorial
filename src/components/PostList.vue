<template>
  <div class="post" v-for="post in posts">
    <div><strong>Name: </strong> {{ post.title }}</div>
    <div><strong>Description: </strong> {{ post.body }}</div>
  </div>
</template>

<!--props defines arguments of the current component (posts in our case)
that are passed from a parent (App.vue in our case)-->
<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
}
</style>
