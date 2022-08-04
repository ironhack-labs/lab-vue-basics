<template>
  <div>
    <h1>Recent Projects</h1>

    <div class="posts">
      <PostCard
        :post="post"
        v-for="post in posts"
        :key="post.id"
        @click="showFullPost"
      />
    </div>
    <PostDetail :post="posts[0]" />
  </div>
</template>

<script setup lang="ts">
import PostCard from "./PostCard.vue";
import PostDetail from "./PostDetail.vue";

const showFullPost = (event: Event) => {
  console.log(event.currentTarget);
  console.log("post id = " + event.currentTarget.dataset.post);
};

const posts = [
  {
    body: "Praesentium odit sapiente, facere nam maxime, perspiciatis dignissimos accusantium qui. Reprehenderit cum velit aut, perferendis a quos, consequatur doloribus vitae repellat. Perferendis assumenda a, officia voluptatibus, a consequatur laboriosam itaque fuga. Quibusdam a reprehenderit consequuntur, reprehenderit voluptatibus pariatur rerum, doloribus fuga. Tempora alias qui delectus facilis, deleniti cum nulla sequi, placeat est quisquam ea odit. Veniam perferendis a commodi tempora iusto, provident libero praesentium ipsa. Assumenda veniam sunt ut a, a quod repudiandae illum, facere adipisci blanditiis nemo. Reprehenderit qui voluptas, veniam aspernatur voluptas at qui non, sint molestias. Consequuntur reprehenderit magni expedita, assumenda officiis perspiciatis, temporibus ratione totam corrupti, a inventore saepe voluptatibus officia veniam. Illo quas sapiente ea ab facere necessitatibus, corrupti reprehenderit ducimus. Perspiciatis reprehenderit ab excepturi libero, reprehenderit eum perspiciatis id, ratione a doloribus sit a, sequi placeat cumque omnis molestias. Id assumenda sapiente iusto aliquid a, minima consectetur tempora quibusdam. Reprehenderit pariatur optio, delectus quidem repellendus impedit a exercitationem. Maxime consequuntur at, officiis delectus ex cum ut, veritatis expedita impedit libero. Quibusdam impedit totam animi inventore, explicabo itaque laboriosam quod ab cumque a.",
    cover: "https://picsum.photos/id/1003/1181/1772",
    coverDescription: "ratione",
    createdAt: "2021-09-19T13:42:23Z",
    description: "a corrupti",
    id: 1,
    isDraft: false,
    tag: "two",
    title: "molestias",
  },
  {
    body: "Quos ad a velit labore, a dolore dolorum ad corporis eos, a fugiat quia voluptatibus a. Voluptate molestiae odio nisi reprehenderit in, aperiam ea alias veniam repellat. Consequatur reprehenderit reiciendis a, reprehenderit exercitationem, at debitis reprehenderit sunt. Explicabo illo magnam reprehenderit porro odio, ad doloremque ex a, mollitia possimus qui hic. Reprehenderit a reprehenderit reprehenderit, ullam quod amet non, reprehenderit alias ea vel. A nam est reprehenderit qui ad dicta, recusandae totam esse, accusantium fugit. Soluta quibusdam voluptatibus eius, praesentium amet reprehenderit nostrum, ea odit mollitia. Dolorum repellendus a consequuntur totam nesciunt, facilis laudantium vitae beatae. Ea perspiciatis consectetur facilis aperiam ea, repellat maxime tempore reprehenderit in eveniet a. Assumenda ex corporis ea reprehenderit autem, aliquam at quo modi, culpa et veniam, tenetur dolorum repellat.",
    cover: "https://picsum.photos/id/1/5616/3744",
    coverDescription: "laborum",
    createdAt: "2020-10-23T01:52:51Z",
    description: "a quos ea",
    id: 2,
    isDraft: false,
    tag: "two",
    title: "neque",
  },
  {
    body: "Perferendis nam aspernatur, praesentium consectetur obcaecati voluptates, cumque facilis expedita. A rem similique, molestias repudiandae quo, hic a sapiente dolore ad enim facere. Praesentium laudantium a blanditiis, dignissimos sequi expedita a accusamus. Consequuntur reprehenderit a id beatae, fugit ut asperiores provident ea nam. Explicabo dolore, reprehenderit ea, sequi voluptatum a, reprehenderit a, et deserunt nemo. A eligendi assumenda a molestiae sed, quia et a suscipit, reprehenderit reprehenderit reprehenderit accusamus. A porro possimus maxime repudiandae a distinctio, praesentium a officiis iure pariatur. Cupiditate sed consectetur deserunt, qui reprehenderit minima, similique soluta a vel. Officiis consequuntur commodi reprehenderit quia, qui laborum cupiditate corrupti. Excepturi a modi neque ab a, deleniti doloremque perspiciatis nesciunt labore nam. Ipsa accusantium nam provident, odio nobis doloremque itaque repellendus totam, in voluptas incidunt.",
    cover: "https://picsum.photos/id/1020/4288/2848",
    coverDescription: "maiores",
    createdAt: "2013-11-20T03:20:27Z",
    description: "adipisci iste",
    id: 3,
    isDraft: true,
    tag: "one",
    title: "sunt",
  },
];
</script>

<style scoped>
.posts {
  margin: 4rem 2rem 4rem 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.post__post__image {
  position: relative;
  height: 30rem;
  object-fit: cover;
}

.post__post__title {
  font-size: 2rem;
}

.post__post__description {
  margin: 1rem;
  font-style: italic;
}
.post__post__body {
  margin-bottom: 5rem;
}
</style>
