<template>
  <Layout>
    <article class="single">
      <header>
        <h1 v-html="$page.page.title"></h1>
      </header>

      <div v-html="$page.page.content"></div>
    </article>
  </Layout>
</template>

<script>
export default {
  metaInfo () {
    return {
      title: this.$page.page.title,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.$page.page.description
        }
      ]
    }
  }
}
</script>

<page-query>
query BlogPage ($id: ID!) {
  page: blogPage (id: $id) {
    title
    path
    content
  }
}
</page-query>
