<template>
  <Layout>
    <h1 class="category-title text-center space-bottom">
      # {{ $page.category.title }}
    </h1>

    <div class="posts">
      <PostSummary
        v-for="edge in $page.category.belongsTo.edges"
        :key="edge.node.id"
        :post="edge.node"
      />
    </div>
  </Layout>
</template>

<page-query>
query Category ($id: ID!) {
  category (id: $id) {
    title
    belongsTo {
      edges {
        node {
          ...on Post {
            title
            path
            date (format: "D. MMMM YYYY")
            timeToRead
            excerpt
            category {
              id
              title
              path
            }
            tags {
              id
              title
              path
            }
          }
        }
      }
    }
  }
}
</page-query>

<script>
import PostSummary from "~/components/PostSummary.vue";

export default {
  components: {
    PostSummary,
  },
};
</script>
