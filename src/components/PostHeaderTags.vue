<template>
  <span
    >Tags:
    <template v-for="(tag, index) in post.tags">
      <template v-if="index > 0">, </template>
      <g-link :key="tag.id" :to="tag.path">{{ tag.title }}</g-link>
    </template>
  </span>
</template>

<script>
export default {
  props: ["post"],
};
</script>
