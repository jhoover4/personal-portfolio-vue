# Personal Portfolio

A new personal portfolio using NuxtJS. The site is completely static and hosted on Cloudflare.

## Linting

Linting is done through [Nuxt's eslint module](https://eslint.nuxt.com/packages/module). Configuration can be done in the
`estlint.config.mjs` file.

Formatting is done with [prettier](https://prettier.io).

Both linting and formatting will be run with `npm run lint` (for checking) or `npm run lint:fix`.

## Adding Blog Pages

Blog pages are created using [nuxt content](https://content.nuxt.com). To add a new page, add a new markdown page under
`content/blog`. Metadata such as title, data, and description are added as yaml in the `---` sections of the markdown page.
See [here](https://content.nuxt.com/docs/files/markdown) for the documentation on adding using markdown with nuxt content.

The blog page data model can be found in `content.config.ts`. More information on how to configure the data 
[here](https://content.nuxt.com/docs/collections/define).

Nuxt content will take these and render them with some customizations from the `pages/blog` folder.

## Deploy

To build a static website nuxt uses the command `nuxt generate` instead of `nuxt build` which is for generate SSR as well.
I've removed `nuxt build` from the `package.json` as I won't need to use server side rendering in this app.

For deploying to cloudflare see the [nuxt documentation](https://nuxt.com/deploy/cloudflare) in tandem with the 
[nuxt content documentation](https://content.nuxt.com/docs/deploy/cloudflare-workers). Nuxt content now uses SQLite as a
backend, so a [cloudflare D1 worker](https://developers.cloudflare.com/d1/) needs to be created to support it. ss