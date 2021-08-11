<template>
  <div>
    <h3>Users List</h3>
    <post-item
      v-for="post in posts"
      :post='post'
    />
  </div>
</template>

<!--props defines arguments of the current component (posts in our case)
that are passed from a parent (App.vue in our case)-->
<script>
import PostItem from '@/components/PostItem';
export default {
  components: {PostItem},
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
