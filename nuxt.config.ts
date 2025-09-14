// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  vite: {
    vue: {
      customElement: true,
    },
    vueJsx: {
      mergeProps: true,
    },
  },
  nitro: {
    preset: "cloudflare_module",
    cloudflare: {
      deployConfig: true,
      nodeCompat: true,
    },
  },
  app: {
    head: {
      link: [
        {
          rel: "style",
          type: "image/png",
          href: "/img/icons8-coderwall-48.png",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Eczar:500,600",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Muli:300,400",
        },
      ],
    },
  },
  content: {
    database: {
      type: "d1",
      bindingName: "CF_BINDING_NAME",
    },
  },
  telemetry: false,
  modules: ["@nuxt/content", "@nuxt/eslint", "nitro-cloudflare-dev"],
  css: [
    "./node_modules/bootstrap/dist/css/bootstrap.min.css",
    "./node_modules/hamburgers/dist/hamburgers.min.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
    "./app/assets/scss/style.scss",
  ],
  devtools: { enabled: true },
});