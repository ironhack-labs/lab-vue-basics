<template>
<div class="footer">
    <h2>This is my footer</h2>
    <ul>
        <li>
            <a href="#">Home</a>
        </li>
        <li>
            <a href="#">About</a>
        </li>
        <li>
            <a href="#">Contact Us</a>
        </li>
    </ul>
</div>  
</template>

<script>
export default {
  name: 'Footer',
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.footer {
    display: flex;
    justify-content: center;
    width: 100%;
}
</style>