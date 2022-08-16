<script setup>
const posts = [
    {
        title: 'Títutlo 1',
        description: 'Descripción 1',
        content: 'Contenido 1'
    },
    {
        title: 'Títutlo 2',
        description: 'Descripción 2',
        content: 'Contenido 2'
    },
    {
        title: 'Títutlo 3',
        description: 'Descripción 3',
        content: 'Contenido 3'
    },];
</script>

<template>
    <h2>All my posts</h2>
    <div v-for="post in posts" :key="post.title">
        <h3>{{post.title}}</h3>
        <p>{{post.description}}</p>
        <p>{{post.content}}</p>
    </div>
</template>
