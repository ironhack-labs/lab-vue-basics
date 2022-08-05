<template>
  <div>
    <h1>Recent Projects ({{ numberOfPosts }})</h1>

    <div class="posts">
      <PostCard
        :post="post"
        v-for="post in posts"
        :key="post.id"
        @click="navigateToFullPost(post.id)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
// import { ref } from "vue";
import router from "@/router";
import { onMounted, ref, computed } from "@vue/runtime-core";
import PostCard from "./PostCard.vue";
let posts = ref([]);

const navigateToFullPost = (id: number) => {
  router.push({ path: `/posts/detail/${id}` });
};

const numberOfPosts = computed(() => {
  return parseInt(posts.value.length);
});

const GRAPHQL_POST_API_BASE_URL =
  "https://mockend.com/droidsam1/ironhack-mid-term-project-mockend/graphql?";

async function getTenPost() {
  const response = await fetch(GRAPHQL_POST_API_BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `{
            posts(limit: 10) {
              id,
              title,
              description,
              body,
              cover,
              coverDescription
            }
          }`,
    }),
  });
  const json = await response.json();
  return json.data.posts;
}

async function getRandomPosts() {
  const posts = await getTenPost();
  if (posts && posts.length > 0) {
    // shuffleArray(posts);
    return posts;
  }
}

// function shuffleArray(array: Array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
// }

onMounted(async () => {
  let postResponse = await getRandomPosts().catch(() => []);
  console.log(postResponse);
  posts.value = postResponse;
});
</script>

<style scoped>
.posts {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.post__post__image {
  position: relative;
  height: 30rem;
  object-fit: cover;
}

.post__post__title {
  font-size: 2rem;
}

.post__post__description {
  margin: 1rem;
  font-style: italic;
}
.post__post__body {
  margin-bottom: 5rem;
}
</style>
