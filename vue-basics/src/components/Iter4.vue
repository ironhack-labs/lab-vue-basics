<template>
    <div>
      <h2>Iteration 4</h2>
      <ul v-for="post in posts">
        <li>{{ post.title }}</li>
        <li>{{ post.description }}</li>
        <li>{{ post.content }}</li>
        <hr/>
      </ul>
    </div>
</template>

<script>
export default {
  data() {
    return{
        posts: [
          {
            title: 'Title one',
            description: 'Description one',
            content: 'My first content'
          },
          {
            title: 'Title two',
            description: 'Description two',
            content: 'My second content'
          }
        ]
    }
  }
}
</script>

<style>

</style>