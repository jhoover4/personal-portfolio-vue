<script setup>
const posts = await queryContent("/").find();
posts.reverse();
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
          :key="post._id"
          class="blog-post-listing pt-3 pb-3"
        >
          <h2 class="underline-expand">
            <a :href="post._path">{{ post.title }}</a>
          </h2>
          <p class="meta">
            <font-awesome-icon icon="fa fa-calendar-days" class="pr-1" />{{
              post.date
            }}
          </p>
          {{ post.description }}
        </div>
      </div>
    </div>
  </div>
</template>
