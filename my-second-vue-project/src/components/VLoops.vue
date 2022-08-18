<template>
    <div class="posts">
        <div v-for="post in posts"
        :key="post.id">
            <h1>{{ post.title }}</h1>
            <p>{{ post.description }}</p>
            <p class="small">{{ post.content }}</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'MyPosts',
  data() {
    return {
      posts: [
        {
          id: 0,
          title: 'Holidays 2020',
          description: 'Summer holidays in Iceland',
          content: 'Pictures',
        },
        {
          id: 1,
          title: 'Holidays 2021',
          description: 'Winter holidays in Jaca',
          content: 'Videos',
        },
        {
          id: 2,
          title: 'Holidays 2022',
          description: 'Summer holidays in Menorca',
          content: 'Social media posts',
        },
      ],
    };
  },
};
</script>

<style scoped>
    .posts{
        margin-top: 30px;
        border: 2px solid lightblue;
        border-radius: 30px;
        display: inline-block;
        padding: 20px;
    }
    h1{
        font-size: 25px;
    }
    p{
        font-size: 20px;
    }
    .small{
        font-size: 15px;
    }
</style>
