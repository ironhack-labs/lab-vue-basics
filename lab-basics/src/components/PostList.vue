<script setup>
import { reactive } from 'vue';

const posts = reactive([
    {
        title: 'Títutlo 1',
        description: 'Descripción 1',
        content: 'Contenido 1',
        isActive: false
    },
    {
        title: 'Títutlo 2',
        description: 'Descripción 2',
        content: 'Contenido 2',
        isActive: true
    },
    {
        title: 'Títutlo 3',
        description: 'Descripción 3',
        content: 'Contenido 3',
        isActive: false
    }]);
</script>

<template>
    <h2>All my posts</h2>
    <div v-for="post in posts" :key="post.title" @click="post.isActive = !post.isActive"
        :class="['card', { active: post.isActive }]">
        <h3>{{ post.title }}</h3>
        <p>{{ post.description }}</p>
        <p>{{ post.content }}</p>
    </div>
</template>

<style scoped>
.card {
    background-color: aliceblue;
    padding: 3rem;
    margin: 1rem;
    display: inline-block;
}

.active {
    background-color: lightskyblue;
}
</style>
