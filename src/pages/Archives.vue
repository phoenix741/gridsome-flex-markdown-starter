<template>
  <Layout>
    <article class="single">
      <header><h1>Archives</h1></header>
      <div>
        <dl>
          <template v-for="(arr, date) in postGroupByDate">
            <dt :key="date">{{ date }}</dt>
            <dd v-for="post in arr" :key="post.node.id">
              <g-link :to="post.node.path">{{ post.node.title }} </g-link>
            </dd>
          </template>
        </dl>
      </div>
    </article>
  </Layout>
</template>

<page-query>
query {
  posts: allPost(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        date (format: "MMMM YYYY")
        path
      }
    }
  }
}
</page-query>

<script>
export default {
  computed: {
    postGroupByDate() {
      return this.$page.posts.edges.reduce((acc, item) => {
        acc[item.node.date] = acc[item.node.date] || [];
        acc[item.node.date].push(item);
        return acc;
      }, {});
    }
  }
}
</script>