// This is Single File Component
// It should have template, script, and style sections

// Specifying layout - buttons, titles, etc.
// {{ }} -> interpolation
// v-on - директива; it can subscribe to different events (click in our case)
// v-on for shorthand can be replaced with "@" symbol (addDislike example)
<template>
  <div>

    <div>
      <button v-on:click="addLike">Like</button>
      <button @click="addDislike">Dislike</button>
    </div>

    <div>Num Likes: {{ likes }}</div>
    <div>Num DisLikes: {{ dislikes }}</div>

  </div>
</template>


// Specifying component logic; create functions; declare variables
// In this section we need to export an object: export default { }
<script>
export default {

  data() { // function
    return {
      likes: 0, // initializing variable ("field") likes
      dislikes: 8,
    }
  },

  methods: {
    addLike() {
      this.likes += 1;
    },
    addDislike() {
      this.dislikes += 1;
    }
  }
}
</script>



<style>

</style>
