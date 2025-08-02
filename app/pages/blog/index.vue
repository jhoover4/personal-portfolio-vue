<script setup>
const posts = await queryCollection("blog").order("date", "DESC").all();
</script>

<template>
  <div class="container mt-5">
    <h1 class="title">Blog</h1>
    <div class="row">
      <div class="col-lg-8 col-lg-offset-2">
        <div class="intro">
          My thoughts on software and whatever else comes to mind.
        </div>
        <div
          v-for="post in posts"
          :key="post.id"
          class="blog-post-listing pt-3 pb-3"
        >
          <h2 class="underline-expand">
            <a :href="post.path">{{ post.title }}</a>
          </h2>
          <p class="meta">
            <font-awesome-icon icon="fa fa-calendar-days" class="pr-1" />
            {{ formatDate(post.date) }}
          </p>
          {{ post.description }}
        </div>
      </div>
    </div>
  </div>
</template>
