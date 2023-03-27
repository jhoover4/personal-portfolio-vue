<template>
  <main class="container mt-5 mb-5">
    <ContentDoc v-slot="{ doc }">
      <h1 class="title">{{ doc.title }}</h1>
      <div class="row">
        <div class="col-lg-8 col-lg-offset-2">
          <p class="meta">
            <font-awesome-icon icon="fa fa-calendar-days" class="pr-1" />
            {{ doc.date }}
          </p>
          <div class="intro lead px-3 mt-4 mb-5">
            <p>{{ doc.description }}</p>
          </div>
          <div class="blog-post-body pl-2 mt-5">
            <div class="blog-body mt-2"><ContentRenderer :value="doc" /></div>
            <p class="mt-5">
              <a class="underline-expand" href="/blog">Return to blog</a>
            </p>
          </div>
        </div>
      </div>
    </ContentDoc>
  </main>
</template>
