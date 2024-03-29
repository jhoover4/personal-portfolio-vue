<script setup>
definePageMeta({
  layout: "custom",
});

const doTransition = ref(false);
const portfolioLinksMargin = ref(40);

const email = ref("jordan@hoovermld.com");
const portfolios = ref([
  {
    active: true,
    title: "TPWF Site",
    url: "https://www.tpwf.org",
    img: {
      alt: "TPWF Site",
      url: "/img/tpwf-site.jpg",
    },
  },
  {
    active: false,
    title: "We Will Not Be Tamed Site",
    url: "https://www.wewillnotbetamed.org/",
    img: {
      alt: "We Will Not Be Tamed Site",
      url: "/img/wwnbt-site.jpg",
    },
  },
]);

const portfolioLinks = ref([
  {
    name: "Github",
    url: "https://github.com/jhoover4",
  },
  {
    name: "CodePen",
    url: "https://codepen.io/jhoover4",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/jordanhoover",
  },
]);

const currentPortfolioIndex = computed(() =>
  portfolios.value.findIndex((portfolio) => portfolio.active)
);
const lastIndex = computed(() => portfolios.value.length - 1);

const prevPortfolio = () => {
  const currentIndex = currentPortfolioIndex.value;
  portfolios.value[currentIndex].active = false;

  if (currentIndex === 0) {
    portfolios.value[lastIndex.value].active = true;
  } else {
    portfolios.value[currentIndex - 1].active = true;
  }
};

const nextPortfolio = () => {
  const currentIndex = currentPortfolioIndex.value;
  portfolios.value[currentIndex].active = false;

  if (currentIndex === lastIndex.value) {
    portfolios.value[0].active = true;
  } else {
    portfolios.value[currentIndex + 1].active = true;
  }
};

const onNavOpen = () => {
  portfolioLinksMargin.value = 25;
};

const onNavClose = () => {
  portfolioLinksMargin.value = 40;
};

onMounted(() => {
  doTransition.value = true;
});
</script>

<template>
  <div id="home-body" class="container-fluid">
    <div class="row">
      <div class="col-sm-6">
        <Navigation @nav-open="onNavOpen" @nav-close="onNavClose" />
        <Transition appear>
          <div class="left-side main" v-if="doTransition">
            <h1>
              Hi, I'm Jordan Hoover - a full-stack developer from Dallas, Texas.
            </h1>
            <p>
              I've given shape to, created in, and fretted with applications on
              all sides of the web stack. Pythonista, Javascripter, Java
              enthusiast.
            </p>
            <div>
              <a class="contact" :href="`mailto:${email}`">Contact Me</a>
            </div>
            <div
              class="portfolio-links"
              :style="{ marginTop: portfolioLinksMargin + '%' }"
            >
              <a
                v-for="(link, index) in portfolioLinks"
                :key="index"
                :href="link.url"
                target="_blank"
                >{{ link.name }}</a
              >
            </div>
          </div>
        </Transition>
      </div>
      <div class="right-side col-sm-6">
        <div id="carouselControls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div
              v-for="(portfolioItem, index) in portfolios"
              :key="index"
              class="carousel-item"
              :class="portfolioItem.active ? 'active' : ''"
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
            @click.prevent="prevPortfolio"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselControls"
            role="button"
            data-slide="next"
            @click.prevent="nextPortfolio"
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
    <a class="contact" :href="`mailto:${email}`">Say Hello</a>
  </footer>
</template>

<style lang="scss" scoped>
.right-side {
  float: right;
}

.left-side {
  padding: 15% 10%;
}

.contact {
  color: #8b9480;
  text-decoration: underline;

  &:hover {
    color: #8b9480;
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 2s ease-out;
  top: 5%;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.portfolio-img {
  height: auto;
  @media (max-width: 576px) {
    max-width: 100%;
    border-radius: 0.25rem;
  }
}

.portfolio-links {
  margin-top: 40%;
  transition: all 0.5s;

  a {
    font-family: "Muli", sans-serif;
    font-weight: 300;
    text-transform: lowercase;
    padding-right: 7%;

    &:hover {
      color: black;
      text-decoration: underline solid black;
    }
  }
}

.carousel-caption {
  text-align: left;

  a {
    color: white;
    text-decoration: underline solid white;
    text-transform: capitalize;
  }
}

footer {
  text-align: center;
  padding: 30%;
}
</style>
