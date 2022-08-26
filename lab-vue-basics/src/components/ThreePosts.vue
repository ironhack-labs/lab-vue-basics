<template>
  <ul>
    <li v-for="post in posts" :key="post.title">{{ post.title }}</li>
    <li v-for="post in posts" :key="post.body">{{ post.body }}</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {
          title: 'Post 1',
          body: 'This is the first post',
        },
        {
          title: 'Post 2',
          body: 'This is the second post',
        },
        {
          title: 'Post 3',
          body: 'This is the third post',
        },
      ],
    };
  },
};
</script>
