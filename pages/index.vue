<script setup>
const email = ref("jordan@hoovermld.com");

const portfolios = ref([
  {
    active: true,
    title: "TPWF Site",
    url: "www.tpwf.org",
    img: {
      alt: "TPWF Site",
      url: "/img/tpwf-site.jpg"
    },
    languagesUsed: []
  },
  {
    active: true,
    title: "We Will Not Be Tamed Site",
    url: "https://www.wewillnotbetamed.org/",
    img: {
      alt: "We Will Not Be Tamed Site",
      url: "/img/wwnbt-site.jpg"
    },
    languagesUsed: []
  }
]);

const updateActive = () => {

};
</script>

<template>
  <div id="home-body" class="container-fluid">
    <div class="row">
      <div class="col-sm-6">
        <transition appear name="fade-in">
          <div class="left-side main">
            <h1>Welcome</h1>
            <p>To Jordan Hoover's Portfolio</p>
            <div class="contact">
              <a :href="`mailto:${email}`">Contact Me</a>
            </div>
            <transition appear name="fade-in-links">
              <div class="portfolio-links">
                <a href="https://www.linkedin.com/in/jordanhoover/" target="_blank">LinkedIn</a>
                <a href="https://github.com/jhoover4" target="_blank">Github</a>
              </div>
            </transition>
          </div>
        </transition>
      </div>
      <div class="right-side col-sm-6">
        <div id="carouselControls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div
              v-for="(portfolioItem, index) in portfolios"
              :key="index"
              class="carousel-item"
              :class="portfolioItem.active ? 'active' : ''"
              @click="updateActive"
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
    <h1>Don't be shy.</h1>
    <a :href="`mailto:${email}`">Say Hello</a>
  </footer>
</template>

<style lang="scss" scoped>
.right-side {
  float: right;
}

.fade-in-enter-active,
.fade-in-leave-active {
  opacity: 0;
  top: 5%;
  -webkit-animation: fadein 2s ease-out; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: fadein 2s ease-out; /* Firefox < 16 */
  -o-animation: fadein 2s ease-out; /* Opera < 12.1 */
  animation: fadein 2s ease-out;
}

.fade-in-enter-from,
.fade-in-leave-to {
  opacity: 100;
}

.portfolio-img {
  height: auto;
  @media (max-width: 576px) {
    max-width: 100%;
    border-radius: .25rem;
  }
}

.portfolio-links {
  margin-top: 40%;

  a {
    font-family: 'Muli', sans-serif;
    font-weight: 300;
    text-transform: lowercase;
    padding-right: 7%;

    &:hover {
      color: black;
      text-decoration: underline solid black;
    }
  }
}

.fade-in-links-enter-active,
.fade-in-links-leave-active {
  transition: opacity 0.5s ease;
}

.fade-in-links-enter-from,
.fade-in-links-leave-to {
  opacity: 0;
}

.carousel-caption {
  text-align: left;

  a {
    color: white;
    text-decoration: underline solid white;
    text-transform: capitalize;
  }
}

.contact a {
  color: #8b9480;
  text-decoration: underline;
}

footer {
  text-align: center;
  padding: 30%;
}
</style>