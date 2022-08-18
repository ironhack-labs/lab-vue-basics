<template>
  <div class="menu">
    <ul>
        <a href=""><li>Sobre nosotros</li></a>
        <a href=""><li>Proyectos</li></a>
        <a href=""><li>Contacto</li></a>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>

<style scoped>
    .menu{
        display: flex;
        justify-content: space-around;
        margin-left: -40px;
    }

    li{
        list-style: none;
    }
</style>
