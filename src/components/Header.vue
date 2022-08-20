<template>
	<header>
	<nav>
		<ul>
			<li><router-link to="/">Home</router-link></li>
			<li><router-link to="/about">About</router-link></li>
			<li><router-link to="/posts">Posts</router-link></li>
		</ul>
	</nav>
		
	</header>
</template>

<script>
export default {
	name: 'HeaderComponent',
	props: {
		msg: String
	}
}
</script>

<style scoped>
ul {
	list-style: none;
	display: flex;
	justify-content: space-between;
	margin-left: 0;
	padding-left: 0;
}
li {
	list-style: none;
}

</style>
