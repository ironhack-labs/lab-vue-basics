<template>
<div class="footer">
    <h3>This is my footer</h3>
    <div>
    <ul class="footerLinks">
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
</div>
</template>

<script>
export default {
  name: 'MainFooter',
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
}
.footer a {
    text-decoration: none;
    color: #42b983;
    font-weight: bold;
}
.footerLinks {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
}
</style>
