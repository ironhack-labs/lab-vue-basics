<template>
	<div class="container">
		<div class="math">
			<div>{{ 2 + 2 }}</div>
			<div>{{ getString() }}</div>
			<div class="text-element text-element-1" v-if="showElementIf">
				{{ text + ' 1' }}
			</div>
			<div class="text-element text-element-2" v-show="showElementShow">
				{{ text + ' 2' }}
			</div>

			<div class="buttons">
				<button @click="toggleShowElementIf()">Show element 1</button>
				<button @click="toggleShowElementShow()">Show element 2</button>
				<button @click="changeColor()">Change color</button>
				<div class="square" :style="{ backgroundColor: activeColor }">
					changed using :style
				</div>

				<div class="square" :class="{ 'red-background': activeColor=='red', 'blue-background': activeColor=='blue', 'green-background':  activeColor=='green' }">
					changed using :class
				</div>
			</div>
		</div>
		<div class="posts">
			<div class="post" v-for="item in posts" :key="item.setup">
				<h3 class="post-title">{{ item.name }}</h3>
				<p class="post-desc">
					{{ item.description }}
				</p>
				<p class="post-text">
					{{ item.text }}
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'PostsComponent',
	data() {
		return {
			text: 'This is element',
			showElementIf: false,
			showElementShow: false,
			posts: [],
			colors: ['red', 'green', 'blue'],
			activeColorIndex: 0
		};
	},
	created() {
		this.getPosts();
	},
	computed: {
		activeColor() {
			return this.colors[this.activeColorIndex];
		}
	},
	methods: {
		getString() {
			return 'Hello World!'
		},
		toggleShowElementIf() {
			this.showElementIf = !this.showElementIf;
		},
		toggleShowElementShow() {
			this.showElementShow = !this.showElementShow;
		},
		getPosts() {
			// this.$http.get('/api/posts').then(response => {
			// 	this.posts = response.data;
			// });
			fetch('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single&amount=10')
				.then(response => response.json())
				.then(json => this.posts = json.jokes.map(({ joke, id }) => ({ id, name: `${joke.substring(0, 15)}...`, description: `Joke #${id}`, text: joke })));

		},
		changeColor() {
			if (this.activeColorIndex === this.colors.length - 1) {
				this.activeColorIndex = 0;
			} else {
				this.activeColorIndex++;
			}
		}
	}
}
</script>

<style>
.buttons {
	display: flex;
	margin-left: 0;
	padding-left: 0;
	gap: 20px;
}

button {
	background-color: rgb(1, 101, 91);
	color: rgb(255, 255, 255);
	padding: 10px;
	border-radius: 5px;
	border: none;
	margin-top: 20px;

	cursor: pointer;
}

button:hover {
	background-color: rgb(0, 70, 63);
}

.container {
	width: 100%;
	max-width: 1200px;
	margin: 0 auto;

}

.posts {
	margin-top: 20px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	box-sizing: border-box;
	gap: 20px;
}

.post {
	width: 40%;
	margin-bottom: 20px;
	background-color: rgb(240, 240, 240);
	border-radius: 10px;
	padding: 10px 25px;
	height: 200px;
}

.square {
	line-height: 40px;
	padding: 0 10px;
	height: 40px;
	border-radius: 5px;
	margin-top: 20px;
	color: #fff;
}
.red-background {
	background-color: red;
}
.blue-background {
	background-color: blue;
}
.green-background {
	background-color: green;
}
</style>