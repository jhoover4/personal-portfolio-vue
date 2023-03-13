<script setup>
const email = ref("jordan@hoovermld.com");

const portfolios = ref([
  {
    active: true,
    title: "",
    url: "",
    img: {
      alt: "",
      url: "",
    },
    languagesUsed: [],
  },
]);
</script>

<template>
  <div id="home-body" class="container-fluid">
    <div class="row">
      <div class="col-sm-6">
        <Navigation />
        <div class="left-side main fade-in">
          <h1>Welcome</h1>
          <p>To Jordan Hoover's Portfolio</p>
          <div class="contact">
            <a :href="`mailto:${email}`">Contact Me</a>
          </div>
          <div class="portfolio-links">
            <a href="linkedin.com" target="_blank">LinkedIn</a>
            <a href="github.com" target="_blank">Github</a>
          </div>
        </div>
      </div>
      <div class="right-side col-sm-6">
        <div id="carouselControls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div
              v-for="(portfolioItem, index) in portfolios"
              :key="index"
              class="carousel-item"
              :class="{ active: portfolioItem.active }"
            >
              <img
                class="d-block portfolio-img"
                :src="portfolioItem.img.url"
                :alt="portfolioItem.img.alt"
              />
              <div class="carousel-caption d-none d-md-block">
                <a :href="portfolioItem.url" target="_blank">View this site</a>
              </div>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselControls"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselControls"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  </div>
  <footer>
    <div class="email-footer contact">
      <h1>Don't be shy.</h1>
      <a :href="`mailto:${email}`">Say Hello</a>
    </div>
  </footer>
</template>
