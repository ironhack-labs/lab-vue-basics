<script>
export default {
  name: 'Navbar',
  data() {
    return {
      links: [
        { href: '#operaciones', text: 'Operaciones' },
        { href: '#condicional', text: 'Condicional' },
        { href: '#posts', text: 'Posts' },
        { href: '#bonus', text: 'Bonus' },
      ],
    }
  },
}
</script>

<template>
  <header class="navbar">
    <h2>Vue Basics</h2>
    <nav>
      <a v-for="link in links" :key="link.href" :href="link.href">{{ link.text }}</a>
    </nav>
  </header>
</template>
