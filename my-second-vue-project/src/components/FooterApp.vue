<template>
  <div class="footerapp">
    <ul>
        <a href=""><li>Sobre nosotros</li></a>
        <a href=""><li>Proyectos</li></a>
        <a href=""><li>Contacto</li></a>
        <p>Esta web ha sido creada por Pepe</p>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FooterApp',
};
</script>

<style scoped>
    .footerapp{
      margin-left: -40px;
    }
    li{
        list-style: none;
    }
</style>
