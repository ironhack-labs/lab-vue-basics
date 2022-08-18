<template>
  <div>
    <li v-for="post in posts" :key="post.id">
      {{ post.title }} <br>
      {{ post.description }} <br>
      {{ post.content }}
    </li>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {
          id: 0,
          title: 'Welcome',
          description: 'Welcome to this web',
          content: 'lorem ipsum lorem ipsum lorem ipsum',
        },
        {
          id: 1,
          title: 'Projects',
          description: 'Take a look at our projects',
          content: 'lorem ipsum lorem ipsum lorem ipsum',
        },
        {
          id: 2,
          title: 'Services',
          description: 'This are our services',
          content: 'lorem ipsum lorem ipsum lorem ipsum',
        },
        {
          id: 3,
          title: 'Contact Us',
          description: 'If you need anything...',
          content: 'lorem ipsum lorem ipsum lorem ipsum',
        },
      ],
    };
  },
};
</script>

<style>
  li {
    list-style: none;
  }
</style>
