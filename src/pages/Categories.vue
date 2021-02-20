<template>
  <Layout>
    <article class="single">
      <header>
        <h1>Catégories</h1>
      </header>
      <div>
        <ul class="list">
          <li v-for="category in $page.allCategory.edges" :key="category.node.id">
            <g-link :to="category.node.path">{{ category.node.title }} </g-link> ({{ category.node.belongsTo.totalCount }})
          </li>
        </ul>
      </div>
    </article>
  </Layout>
</template>

<page-query>
query {
  allCategory(sortBy: "title", order: ASC) {
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
