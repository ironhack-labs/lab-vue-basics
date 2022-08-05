<template>
  <div>
    <div class="navigation">
      <a @click="goBack">←</a>
      <a @click="nextPost">→</a>
    </div>

    <div v-if="post" class="post-detail">
      <img
        class="post-detail__image"
        :src="post.cover"
        :alt="post.coverDescription"
      />
      <h5 class="post-detail__title">{{ post.title }}</h5>
      <div class="post-detail__description">
        {{ post.description }}
      </div>
      <div class="post-detail__body">{{ post.body }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import router from "@/router";
import Post from "../classes/Post";

const route = useRoute();
let post = ref<Post>({});
let paramPostId = route.params.id;

function goBack() {
  if (paramPostId > 0) {
    loadPostDetails(paramPostId--);
  } else {
    router.go(-1);
  }
}
function nextPost() {
  loadPostDetails(paramPostId++);
}

const loadPostDetails = async (postId) => {
  // const postId = parseInt()
  const postContent = await getPostById(postId);
  if (postContent) {
    post.value.title = postContent.title;
    post.value.description = postContent.description;
    post.value.body = postContent.body;
    post.value.cover = postContent.cover;
    return postContent;
  }
};

const GRAPHQL_POST_API_BASE_URL =
  "https://mockend.com/droidsam1/ironhack-mid-term-project-mockend/graphql?";

const getPostById = async (postId: number) => {
  const response = await fetch(GRAPHQL_POST_API_BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `query ($postId: Int!) {
        post(id: $postId) {
          id
          title
          description
          body
          cover,
          coverDescription,
          createdAt
        }
      }`,
      variables: { postId },
    }),
  });
  const json = await response.json();
  return json.data.post;
};

onMounted(() => {
  loadPostDetails(paramPostId);
});
</script>

<style scoped>
.post-detail {
  margin: 4rem 2rem 4rem 2rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-around;
}
.post-detail__image {
  position: relative;
  height: 30rem;
  object-fit: cover;
}

.post-detail__title {
  font-size: 2rem;
}

.post-detail__description {
  margin: 1rem;
  font-style: italic;
}
.post-detail__body {
  margin-bottom: 5rem;
}

.navigation {
  margin: 1rem;
  font-size: 4rem;
  display: flex;
  justify-content: space-between;
  color: #41b88360;
}

.navigation a:hover {
  color: #2c3e50;
  cursor: pointer;
}
</style>
