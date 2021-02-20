<template>
  <header>
    <h2>
      <g-link :to="post.path" v-html="post.title"></g-link>
    </h2>
    <p>
      <PostHeaderTitle :post="post"></PostHeaderTitle>
      •
      <PostHeaderTags :post="post"></PostHeaderTags>
    </p>
    <p>
      <PostHeaderTimeToRead :post="post"></PostHeaderTimeToRead>
    </p>
  </header>
</template>

<script>
import PostHeaderTitle from "./PostHeaderTitle";
import PostHeaderTags from "./PostHeaderTags";
import PostHeaderTimeToRead from "./PostHeaderTimeToRead";

export default {
  components: {
    PostHeaderTitle,
    PostHeaderTags,
    PostHeaderTimeToRead,
  },
  props: ["post"],
};
</script>
