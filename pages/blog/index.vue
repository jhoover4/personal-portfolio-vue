<script scoped>
const posts = ref([]);
</script>

<template>
  <div class="container mt-5">
    <h1 class="title">Blog Home Page</h1>
    <div class="row">
      <div class="col-lg-8 col-lg-offset-2">
        <div class="intro">Intro for blog</div>
        <div v-for="post in posts" class="blog-post-listing pt-3 pb-3">
          <h2 class="underline-expand">
            <a :href="post.url">{{ post.title }}</a>
          </h2>
          <p class="meta">
            <i class="far fa-calendar-alt pr-1"></i>{{ post.date }}
          </p>
          {{ post.intro }}
        </div>
      </div>
    </div>
  </div>
</template>
