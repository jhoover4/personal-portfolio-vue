<script setup>
const portfolios = ref([]);

const portfolioItemExample = {
  title: "",
  url: "",
  img: {
    alt: "",
    url: "",
  },
  languagesUsed: [],
};

portfolios.value.push(portfolioItemExample);
</script>

<template>
  <div class="container mt-5 gallery-wrapper">
    <header>
      <h1 class="title">Portfolio</h1>
      Intro text goes here
    </header>
    <div class="gallery-container">
      <div v-for="portfolioItem in portfolios"
           class="col-xs-12 col-sm-6 col-md-4 col-lg-4 cell-container gallery-thumbnail-container">
        <a :href="portfolioItem.url" :title="portfolioItem.img.alt" target="_blank">
          <img :src="portfolioItem.img.url" :alt="portfolioItem.img.alt" class="gallery-thumbnail image">
        </a>
        <a class="overlay" :href="portfolioItem.url" :title="portfolioItem.img.alt" target="_blank">
          <div class="portfolio-item-title px-md-5">
            <p>{{ portfolioItem.title }}</p>
            <div class="divider"></div>
            <i v-for="(language, index) in portfolioItem.languagesUsed" :key="index" class="fab" :class="language"></i>
          </div>
          <span></span>
        </a>
      </div>
    </div>
  </div>
</template>
