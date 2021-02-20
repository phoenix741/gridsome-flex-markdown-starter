<template>
  <article>
    <PostHeader :post="post"></PostHeader>

    <div v-html="post.excerpt"></div>
    <br>
    <g-link class="btn" :to="post.path">Lire la suite ...</g-link>
    <hr>
  </article>
</template>

<script>
import PostHeader from './PostHeader.vue'

export default {
  components: {
    PostHeader
  },
  props: ['post'],
}
</script>
