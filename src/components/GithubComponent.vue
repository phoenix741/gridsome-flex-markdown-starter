<template>
  <div class="utterances" :style="{ height: containerHeight + 'px' }">
    <iframe
      class="utterances-frame"
      title="Comments"
      scrolling="no"
      :src="iframeSrc"
    ></iframe>
  </div>
</template>


<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    repo: {
      type: String,
      required: true,
    },
    pathname: {
      type: String,
      required: true,
    },
    url: {
      type: String,
    },
    src: {
      type: String,
      default: "https://utteranc.es/utterances.html",
    },
    issueTerm: {
      type: String,
      default: "pathname",
    },
    label: {
      type: String,
      default: null,
    },
    theme: {
      type: String,
      default: "github-light",
    },
    description: {
      type: String,
      default: null,
    },
    origin: {
      type: String,
      default: window.location.origin,
    },
  },

  data() {
    return {
      session: localStorage.getItem("utterances-session") || "",
      containerHeight: 0,
    };
  },

  computed: {
    utterancesOrigin() {
      const m = this.src.match(/^(https?:\/\/[^\/]+).*/);
      return m ? m[1] : null;
    },
    iframeSrc() {
      const url = this.url || window.location.origin + window.location.pathname;
      const origin = this.origin || window.location.origin;
      const params = [
        "title",
        "repo",
        "theme",
        "label",
        "session",
        "description",
        "pathname",
      ]
        .filter((key) => !!this[key])
        .map((key) => `${key}=${encodeURIComponent(this[key])}`);
      params.push(`issue-term=${encodeURIComponent(this.issueTerm)}`);
      params.push(`url=${encodeURIComponent(url)}`);
      params.push(`origin=${encodeURIComponent(origin)}`);
      return `https://utteranc.es/utterances.html?${params.join("&")}`;
    },
  },

  created() {
    window.addEventListener("message", this.handleEvent);

    // slice access token from query string
    const { search, pathname, hash } = window.location;
    const m = search.substr(1).match(/(?:^|&)utterances=([^&]+)(?:$|&)/);
    if (m) {
      this.session = decodeURIComponent(m[1]);
      localStorage.setItem("utterances-session", this.session);

      this.$router.replace(
        pathname + search.replace(`utterances=${m[1]}`, "") + hash
      );
    }
  },

  destroyed() {
    removeEventListener("message", this.handleEvent);
  },

  methods: {
    handleEvent(event) {
      if (event.origin !== this.utterancesOrigin) {
        return;
      }
      const data = event.data;
      if (data && data.type === "resize" && data.height) {
        this.containerHeight = data.height;
      }
    },
  },
};
</script>


<style>
.utterances {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  max-width: 760px;
  margin-left: auto;
  margin-right: auto;
}

.utterances-frame {
  position: absolute;
  left: 0;
  right: 0;
  width: 1px;
  min-width: 100%;
  max-width: 100%;
  height: 100%;
  border: 0;
}
</style>
