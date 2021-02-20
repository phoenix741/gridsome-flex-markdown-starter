<template>
  <span
    >Temps de lecture: <strong>{{ post.timeToRead }} min</strong></span
  >
</template>

<script>
export default {
  props: ["post"],
};
</script>
