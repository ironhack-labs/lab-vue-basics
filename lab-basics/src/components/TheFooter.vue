<script setup>
    const showNumber = false;
</script>

<template>
    <footer>
        The footer <span v-if="showNumber">{{ 2 + 2 }}</span>
    </footer>
</template>
