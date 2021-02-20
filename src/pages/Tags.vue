<template>
  <Layout>
    <article class="single">
      <header>
        <h1>Tags</h1>
      </header>
      <div>
        <ul class="list">
          <li v-for="tag in $page.allTag.edges" :key="tag.node.id">
            <g-link :to="tag.node.path">{{ tag.node.title }} </g-link> ({{ tag.node.belongsTo.totalCount }})
          </li>
        </ul>
      </div>
    </article>
  </Layout>
</template>

<page-query>
query {
  allTag(sortBy: "title", order: ASC) {
    edges {
      node {
        id
        title
        path
        belongsTo {
          totalCount
        }
      }
    }
  }
}
</page-query>
