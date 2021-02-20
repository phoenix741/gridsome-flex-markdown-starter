<template>
  <div>
    <aside>
      <div>
        <Author></Author>

        <nav>
          <ul class="list">
            <li v-for="page in $static.metadata.pages" :key="page.title">
              <g-link :to="page.link">{{ page.title }}</g-link>
            </li>
          </ul>
        </nav>

        <ul class="social">
          <li v-for="page in $static.metadata.socials" :key="page.type">
            <g-link :class="`sc-${page.type}`" :to="page.link">
              <i :class="`fa fa-${page.type}`"></i>
            </g-link>
          </li>
        </ul>
      </div>
    </aside>
    <main>
      <nav>
        <g-link to="/">Home</g-link>
        <g-link to="/archives">Archives</g-link>
        <g-link to="/categories">Categories</g-link>
        <g-link to="/tags">Tags</g-link>
        <g-link to="/feed.atom">ATOM</g-link>
      </nav>

      <slot />

      <footer>
        <p>
          &copy; {{ $static.metadata.siteAuthor }}
          {{ $static.metadata.sitePublished }}-{{ todayYear }}
        </p>
        <p>
          Powered by <g-link to="https://gridsome.org/">Gridsome</g-link> -
          <g-link
            to="https://github.com/phoenix741/gridsome-flex-markdown-starter"
            >Flex</g-link
          >
          theme by
          <g-link to="https://shadoware.org">Ulrich Vandenhekke</g-link>
        </p>
        <p>
          Fork of
          <g-link to="https://github.com/alexandrevicenzi/flex">Flex</g-link>
          theme by
          <g-link to="http://alexandrevicenzi.com">Alexandre Vicenzi</g-link>
        </p>
      </footer>
    </main>
  </div>
</template>

<static-query>
query {
  metadata {
    siteAuthor
    sitePublished
    pages {
      title
      link
    }
    socials {
      type
      link
    }
  }
}
</static-query>

<script>
import Author from "~/components/Author.vue";

export default {
  components: {
    Author,
  },
  computed: {
    todayYear() {
      return new Date().getFullYear();
    },
  },
};
</script>
