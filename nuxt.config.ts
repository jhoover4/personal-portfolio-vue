// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/img/icons8-coderwall-48.png",
        },
      ],
    },
  },
  target: "static",
  telemetry: false,
  modules: ["@nuxt/content"],
  buildModules: ["nuxt-vite", "@nuxtjs/google-fonts"],
  css: [
    "~/node_modules/bootstrap/dist/css/bootstrap.min.css",
    "~/node_modules/hamburgers/dist/hamburgers.min.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
    "@/assets/scss/style.scss",
  ],
  script: [
    {
      src: "~/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js",
      mode: "client",
    },
  ],
  googleFonts: {
    families: {
      Eczar: [500, 600],
      Muli: [300, 400],
    },
  },
});
