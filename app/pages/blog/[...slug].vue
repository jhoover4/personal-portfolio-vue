<script lang="ts" setup>
import { formatDate } from "../../utils";

const route = useRoute();
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection("blog").path(route.path).first();
});
</script>

<template>
  <main class="container mt-5 mb-5">
    <h1 class="title">{{ page.title }}</h1>
    <div class="row">
      <div class="col-lg-8 col-lg-offset-2">
        <p class="meta">
          <font-awesome-icon icon="fa fa-calendar-days" class="pr-1" />
          {{ formatDate(page.date) }}
        </p>
        <div class="intro lead px-3 mt-4 mb-5">
          <p>{{ page.description }}</p>
        </div>
        <div class="blog-post-body pl-2 mt-5">
          <div class="blog-body mt-2"><ContentRenderer :value="page" /></div>
          <p class="mt-5">
            <a class="underline-expand" href="/blog">Return to blog</a>
          </p>
        </div>
      </div>
    </div>
  </main>
</template>
