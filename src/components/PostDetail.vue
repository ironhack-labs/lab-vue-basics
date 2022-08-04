<template>
  <div>
    <div class="post-detail">
      <img
        class="post-detail__image"
        :src="props.post.cover"
        :alt="props.post.coverDescription"
      />
      <h5 class="post-detail__title">{{ props.post.title }}</h5>
      <div class="post-detail__description">
        {{ props.post.description }}
      </div>
      <div class="post-detail__body">{{ props.post.body }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(["post"]);
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
</style>
