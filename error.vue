<script setup>
const props = defineProps({
  error: Object,
});
const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <div class="container mt-5">
    <h1 class="title">
      <font-awesome-icon icon="fas fa-exclamation-triangle" class="pr-3" />Page
      not found
    </h1>
    <div class="row">
      <div class="col-lg-8 col-lg-offset-2 mt-5">
        <h2 v-if="error.statusCode === 404">
          Uh oh! Looks like that's a not a page on the site.
        </h2>
        <h2 v-if="error.statusCode === 500">
          Sorry, there seems to be an error. Please try again soon.
        </h2>
        <p>
          Want to try
          <a href="/" @click.prevent="handleError">returning to the homepage</a
          >?
        </p>
      </div>
    </div>
  </div>
</template>
