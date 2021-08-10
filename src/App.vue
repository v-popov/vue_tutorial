// This is Single File Component
// It should have template, script, and style sections

// Specifying layout - buttons, titles, etc.
// {{ }} -> interpolation
// v-on - директива; it can subscribe to different events (click in our case)
// v-on for shorthand can be replaced with "@" symbol (addDislike example)
<template>
  <div>

    <div class="post">
      <div><strong>Name:</strong> my name</div>
      <div><strong>Description:</strong> my description</div>
    </div>

    <div class="post">
      <div><strong>Name:</strong> my name</div>
      <div><strong>Description:</strong> my description</div>
    </div>

    <div class="post">
      <div><strong>Name:</strong> my name</div>
      <div><strong>Description:</strong> my description</div>
    </div>

  </div>
</template>



// Specifying component logic; create functions; declare variables
// In this section we need to export an object: export default { }
<script>
export default {

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
