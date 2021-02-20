<template>
  <Layout>
    <PostSummary v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>

    <Pager class="pagination" 
      :info="$page.posts.pageInfo" 
      linkClass="btn"
      />
  </Layout>
</template>

<page-query>
query ($page: Int) {
  posts: allPost(perPage: 10, page: $page, filter: { published: { eq: true }}) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        date (format: "D. MMMM YYYY")
        timeToRead
        path
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
        excerpt
      }
    }
  }
}
</page-query>

<script>
import { Pager } from 'gridsome';
import PostSummary from '~/components/PostSummary.vue'

export default {
  components: {
    Pager,
    PostSummary
  }
}
</script>
