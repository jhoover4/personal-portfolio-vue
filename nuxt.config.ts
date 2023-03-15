// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  telemetry: false,
  modules: ["@nuxt/content"],
  buildModules: ["nuxt-vite"],
  css: ["@/assets/scss/style.scss"],
});
