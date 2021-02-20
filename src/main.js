// CSS
import "~/assets/stylesheet/style.less";
import "~/assets/font-awesome/css/font-awesome.min.css";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

// Import default layout so we don't need to import it to every page
import DefaultLayout from "~/layouts/Default.vue";

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function(Vue, { router, head, isClient }) {
  // Add attributes to HTML tag
  head.htmlAttrs = { lang: "fr" };
  head.link.push({
    rel: "stylesheet",
    href:
      "//fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700,400italic",
  });
  head.meta.push({ httpEquiv: "X-UA-Compatible", content: "IE=edge" });
  head.meta.push({ name: "HandheldFriendly", content: true });
  head.meta.push({
    key: "viewport",
    name: "viewport",
    content: "width=device-width, initial-scale=1.0",
  });
  // Chrome, Firefox OS and Opera
  head.meta.push({ name: "theme-color", content: "#333" });
  // Windows Phone
  head.meta.push({ name: "msapplication-navbutton-color", content: "#333" });
  // iOS Safari
  head.meta.push({ name: "apple-mobile-web-app-capable", content: "yes" });
  head.meta.push({
    name: "apple-mobile-web-app-status-bar-style",
    content: "black-translucent",
  });

  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
}
